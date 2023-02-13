const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 5000;


//to parse json
app.use(express.json());
//enable cors
app.use(cors());


//              API' examples

//homepage
app.get('/',(req,res)=>{
    res.send(`Homepage is here ${req}`)
})

// GET request to /api/hello
app.get('/api/hello', (req, res) => {
    res.send(`Hello ${req}, API!`);
});

// GET request to /api/greeting/:name
app.get('/api/greeting/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});


//        MAIN PROGRAM

//connect to mongodb:
const mongUrl = `mongodb://127.0.0.1:27017/reactfitnesssite`;
mongoose.connect(mongUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
                            },()=>{
                                console.log("Backend app connected to mongod")
});
//create user schema
const userSchema = new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    phone:{type:Number,required:true},
    email:{type:String,required:true}
})
//create model the user document
const personModel = mongoose.model('CollectionFitness', userSchema)

        // API to POST request to /api/user

app.post('/api/user', async(req, res) => {
  const { firstname, lastname,phone,email } = req.body;
  //create new person document for db saving
const person = new personModel({firstname,lastname,phone,email});

try {
    //save the person document
    await person.save();
    //response once saved
    res.status(200).json({message:`${firstname} ${lastname}'s data saved to mongod`});
    //a console message for us to makesure data saved
    console.log(`${firstname} ${lastname} ${phone} ${email} data saved in mongod`)
} catch (error) {
    res.status(500).json({ error: error.message });
}
// //sending response
//   res.send(`User ${firstname+" "+lastname} with phone ${phone} and email ${email}  was added to the database. Post method handled successfully!`);
//   console.log(`${firstname} ${lastname} ${phone} ${email} data received.`)
});

app.listen(port, () => {
    console.log(`Backend API Server is listening on port: ${port}, send requests using fetch method now!`);
});


//in order to use custom host rather than localhost, the syntax should be app.listen(port,'customHost',()=>{console.log("Server running on cutom host and port")})