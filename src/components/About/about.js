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
        <span className="aboutDesc" >I am an enthusiastic designer based in Bengaluru, India. I have been developing my design skills for over a year and have gained a solid understanding of user-centric design concepts. I have experience working with a range of technologies and development tools, and I am also highly interested in cybersecurity and always curious to learn more about it. I have a thirst for knowledge, the required skill set, and the professional background to delve deeply into the area of creating user-enjoyable and industry-useful applications. I always strive to maintain positive relationships with those around me, and I am a team player with excellent communication skills. Outside of work, I enjoy a variety of hobbies, such as painting, drawing, cycling, listening to music, traveling, and playing badminton. </span>
        </div>
    </section>
  )
}

export default About;