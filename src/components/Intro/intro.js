import React,{useEffect} from 'react'
import './intro.css';
import bg from '../../assets/bg.jpg';
import "bootstrap-icons/font/bootstrap-icons.css";
import AOS from 'aos';
import "aos/dist/aos.css";

const Intro = () => {
  useEffect(() => {
    AOS.init({duration: 1400});
}, []);
  return (
    <section id="intro">
      <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText" data-aos='fade-right'>I'm <span className="introName">Sameera</span><br />UX Designer and Developer</span>
          <div style={{ borderTop: '3px solid #0C9F50', width: 100, marginTop: 12, marginBottom: 10}} />
          <p className="introPara">I am a passionate designer with keen interest towards designing and development to create applications that are user-friendly and solvereal world problems.</p>
          <span className="introSocial"><a href="https://www.instagram.com/sameera_0108/" rel='noreferrer' target="_blank"><i className='bi bi-instagram' style={{color:'black'}}></i></a> <a href="https://twitter.com/Sameera0108" target="_blank" rel='noreferrer'><i className='bi bi-twitter' style={{color:'black'}}></i></a> <a href="https://www.linkedin.com/in/m-bhargavee-sameera-008b09234/" target="_blank" rel='noreferrer'><i className='bi bi-linkedin' style={{color:'black'}}></i></a>  <a href="https://github.com/infi-bins-loop" target="_blank" rel='noreferrer'><i className='bi bi-github' style={{color:'black'}}></i></a></span>
      </div>
      <div className="zoomImg">
      <img src={bg} alt="Profile" className="bg" />
      <br />
      </div>
      <br />
      <hr style={{maxWidth: 7500}}/>
    </section>
  )
}

export default Intro;