import React,{useEffect} from 'react'
import './about.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const About = () => {
  useEffect(() => {
    AOS.init({duration: 1400});
}, []);
  return (
    <section id="about">
      <div className="aboutContent">
        <span className="aboutTitle" data-aos='fade-right'>About Me</span>
        <div style={{ borderTop: '3px solid #0469AF', width: 200, marginTop: 11, marginBottom: 5, marginLeft: 50}} />
        <span className="aboutDesc" >
          Hello there 👋 Welcome to my portfolio!<br></br>
          Let me introduce myself. <br></br><br></br>
          I am M Bhargavee Sameera, a passionate UX Designer and Developer based out of Bengaluru, India. I have 2 years of experience in designing and recently started development. I also gained a lot of interest in cybersecurity and indulge myself in learning new things every now and then.<br></br>
          <br></br>
          Outside of work, I indulge myself in:
          <ul>
            <li> 🎨 Painting and Drawing</li>
            <li> 🏕️ Travelling</li>
            <li> 📷 Photography</li>
            <li>🎶 Music</li>
            <li>🐾 Furry friends</li>
          </ul>
        </span>
        </div>
    </section>
  )
}

export default About;