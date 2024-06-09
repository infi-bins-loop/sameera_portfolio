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
          To put things in specific points,
          <ul>
            <li>My fields of Interest include:
              <ul>- UI/UX Design</ul>
              <ul>- Full Stack Web Development using MERN</ul>
              <ul>- Java based Web Application Development</ul>
              <ul>- Cybersecurity</ul>
              <ul>- Python Programming and AI</ul>
            </li>
          </ul>
          Outside of work, You will often find me involved in various hobbies:
          <ul>
            <li> 🎨 Painting and Drawing</li>
            <li> 🏕️ Spending time with my family on vacations in scenic destinations</li>
            <li> 📷 Clicking pictures of beautiful moments and landscapes</li>
            <li>🎶 Vibing to some good beats and artists</li>
            <li>🐾 Taking refreshing walks with my furry friends</li>
          </ul>
        </span>
        </div>
    </section>
  )
}

export default About;