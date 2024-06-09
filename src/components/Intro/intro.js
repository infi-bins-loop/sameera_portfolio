import React,{useEffect} from 'react'
import './intro.css';
import bg from '../../assets/bg.jpeg';
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
            <span className="introText" data-aos='fade-right'>I'm <span className="introName">Sameera</span><br /><span style={{fontSize: 28}}>UX Designer and Developer</span></span>
            <div style={{ borderTop: '3px solid #0469AF', width: 100, marginTop: 12, marginBottom: 10}} />
            <p className="introPara"><i className='bi bi-envelope-fill' style={{color:'#0469AF',fontSize: 20}}></i> mbsamee0108@gmail.com <br /><i className='bi bi-geo-alt-fill' style={{color:'#0469AF',fontSize: 20}}></i> Bengaluru, India <br /><i className='bi bi-cake2-fill' style={{color:'#0469AF',fontSize: 20}}></i> 1 August 2003</p>
            <h5>Follow me</h5>
            <span className="introSocial"><a href="https://www.instagram.com/sameera_0108/" rel='noreferrer' target="_blank"><i className='bi bi-instagram' style={{color:'black'}}></i></a> <a href="https://twitter.com/Sameera0108" target="_blank" rel='noreferrer'><i className='bi bi-twitter' style={{color:'black'}}></i></a> <a href="https://www.linkedin.com/in/m-bhargavee-sameera-008b09234/" target="_blank" rel='noreferrer'><i className='bi bi-linkedin' style={{color:'black'}}></i></a>  <a href="https://github.com/infi-bins-loop" target="_blank" rel='noreferrer'><i className='bi bi-github' style={{color:'black'}}></i></a></span>
        </div>
        <div className="zoomImg">
          <img src={bg} alt="Profile" className="bg" />
        </div>
    </section>
  )
}

export default Intro;