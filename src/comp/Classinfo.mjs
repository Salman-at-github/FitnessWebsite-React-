import React from 'react';

import Male from './img/male.jpg';
import Female from './img/female.jpg';

export default function Classinfo() {
  return (
    <>
    <div className='classcont'> 
        <h1 id='chead'>Weekly Classes Info</h1>
        <div id='classinfobox'>
            <div id='male'>
                <div className='maleimg'>
                  <img src={Male} alt="Maleguy"/>
                </div>
                <div className='malep'> 
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia obcaecati, fugit itaque eos cumque architecto maxime fugiat earum dicta nemo sapiente commodi necessitatibus ducimus est ipsum numquam, quibusdam cupiditate perspiciatis?</p>
                </div>
            </div>
            <div id='female'>
                <div className='femaleimg'>
                  <img src={Female} alt="Female"/>
                </div>
                <div className='femalep'> 
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia obcaecati, fugit itaque eos cumque architecto maxime fugiat earum dicta nemo sapiente commodi necessitatibus ducimus est ipsum numquam, quibusdam cupiditate perspiciatis?</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
