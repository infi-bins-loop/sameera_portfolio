import React from 'react'
import './intro.css';
import bg from '../../assets/bg.jpg';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">I'm <span className="introName">Sameera</span><br />UX Designer and Developer</span>
          <p className="introPara">I am a passionate designer with keen interest towards designing and <br />development to create applications that are user-friendly and solve <br />real world problems.</p>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro;