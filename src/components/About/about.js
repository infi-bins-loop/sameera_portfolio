import React from 'react'
import './about.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const About = () => {
  return (
    <section id="about">
      <div className="aboutContent">
        <span className="aboutTitle"><i className='bi bi-person-fill'></i> About Me.</span>
        <span className="aboutDesc">I am an enthusiastic designer with a solid grasp of user-centric design concepts and experience working with a range of technologies and development tools. I'm also highly interested in cybersecurity and I always try to learn more about it. I have the thirst for knowledge, the required skill set, and the professional background to go deeply into the area of creating user-enjoyable and industry useful applications. I always try to maintain positive connections with those around me and I am a team player with good communication skills. Outside of work, I enjoy a variety of hobbies, including painting, drawing, cycling, listening to music, traveling, and playing badminton. </span>
        </div>
    </section>
  )
}

export default About;