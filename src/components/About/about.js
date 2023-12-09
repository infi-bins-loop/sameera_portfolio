import React,{useEffect} from 'react'
import './about.css';
import AOS from 'aos';
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({duration: 1400});
}, []);
  return (
    <section id="about">
      <div className="aboutContent">
        <span className="aboutTitle" data-aos='fade-right'>About Me.</span>
        <div style={{ borderTop: '3px solid #0C9F50', width: 200, marginTop: 11, marginBottom: 10, marginLeft: 50}} />
        <span className="aboutDesc" >I am a passionate designer with keen interest towards designing and development to create applications that are user-friendly and solve real world problems. I am also highly interested in cybersecurity and always curious to learn more about it. I am a team player with excellent communication skills. Outside of work, I enjoy a variety of hobbies like painting, drawing, cycling, listening to music, traveling, and playing badminton. </span>
        </div>
    </section>
  )
}

export default About;