import React from 'react';

import One from './img/1.jpg';
import Two from './img/2.jpg';
import  Three from './img/3.jpg';
import Facebook from './img/facebook.png';
import Ibm from './img/ibm.png';
import Microsoft from './img/microsoft.png';
import Apple from './img/apple.png';

export default function Home() {
  return (<>
  <section id='introSection'>
        <div> Welcome to Ryo's Fitness Academy </div>
        <div className='small'> Eat Sleep Workout Repeat </div>
        </section>
  <section id='missionSection'>
      <h2>Our Mission</h2>
      <div id='box'>
        <div className='card'>
            <h3>Fitness Perfection</h3>
            <div className='card-box'>
                <div className='card-img'>
                    <img src={One} alt="img1"/>
                </div>
                <div className='card-content'>
                    <p>This is the best Fitness academy of the universe</p>
                </div>
            </div>
        </div>
        <div className='card' id='exception'>
            <h3>No Pain No Gain</h3>
            <div className='card-box'>
                <div className='card-img'>
                    <img src={Two} alt="img1"/>
                </div>
                <div className='card-content'>
                    <p>This is the best Fitness academy of the universe</p>
                </div>
            </div>
        </div>
        <div className='card'>
            <h3>Expert Trainers</h3>
            <div className='card-box'>
                <div className='card-img'>
                    <img src={Three} alt="img1"/>
                </div>
                <div className='card-content'>
                    <p>This is the best Fitness academy of the universe</p>
                </div>
            </div>
        </div>
      </div>
  </section>

    <section id='sponsorsSection'>
      <h2>Our Sponsors</h2> 
        <div className='splogo'>
          <img src= {Apple} alt= "Sponsor" className= "spImage"/>
          <img src= {Facebook} alt= "Sponsor" className= "spImage"/>
          <img src= {Ibm} alt= "Sponsor" className= "spImage"/>
          <img src= {Microsoft} alt= "Sponsor" className= "spImage"/>
        </div>
    </section>
  </>
  )
}
