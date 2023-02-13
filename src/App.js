import './App.css';
import Navbar from './comp/Navbar.mjs';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './comp/Home.mjs';
import Footer from './comp/Footer.mjs';
import Classinfo from './comp/Classinfo.mjs';
import About from './comp/About.mjs';
import Contact from './comp/Contact.mjs';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/classinfo' element={<Classinfo />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
