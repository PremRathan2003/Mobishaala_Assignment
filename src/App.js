import React from 'react'
import ReactPlayer from 'react-player'
import './App.css';
import { FaWhatsapp } from "react-icons/fa";


function App() {
  return (
    <div className="App">
      <div className="row">
        <div>
          <h1 className='heading'>Mobishaala</h1>
          <p className='para'>Create your <span className='in-color'>Digital Classroom</span> in 5 mins for <span className='in-color'>FREE</span> & connect to 1+ Million Students.</p>
          <ul class="circle-list">
            <li>No technical knowledge required.</li>
            <li>Quickly setup live class, tests, notes, ebooks and more.</li>
            <li>Reach out to millions of students anywhere, anytime.</li>
          </ul>
          <div className='btn-container'>
          <div>
          <p>Institute/Teacher</p>
          <button type="button" className='get-btn'>Get Started</button>
          </div>
          <div>
          <p>Student</p>
          <button type="button" className='get-btn'>Download App</button>
          </div>
         <button type='button' className='talk-btn'><FaWhatsapp size={25} className='icon'/> Talk to Us</button>
        </div>
        </div>
        <div className='video-container'>
        <ReactPlayer url='https://youtu.be/jg5d59ligW4?si=xb0yCsryyteJeEu4' controls={true}  width="100%" height="100%"/>
        <button type="button" className='get-btn buy-btn'>Buy</button>

        </div>
      </div>
    </div>
  );
}

export default App;
