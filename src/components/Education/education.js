import React,{useEffect} from 'react'
import './education.css'
import AOS from 'aos';
import "aos/dist/aos.css";
import clg from '../../assets/clg.png';
import sch from '../../assets/sch.png';
import scho from '../../assets/scho.png';

const Education = () => {
  useEffect(() => {
    AOS.init({duration: 1400});
    AOS.refresh();
}, []);
  return (
    <section id="education">
        <div className="eduContent">
            <span className="eduTitle" data-aos='fade-right'>Education</span>
            <div style={{ borderTop: '3px solid #0469AF', width: 200, marginTop: 13, marginBottom: 9, marginLeft: 50}} />
            <div className='eduMain'>
              <img src={clg} alt="College" />
              <span className='title'>Vellore Institute of Technology</span><br />
              <p className='deg'><i>Bachelor of Technology in Computer Science</i> <br />September 2021 - May 2025</p>
            </div>
            <div className='eduMain'>
              <img src={sch} alt="School" />
              <span className='title'>Geetanjali Olympiad College</span>
              <p className='deg'><i>Grade 12</i> <br />May 2019 - March 2021</p>
            </div>
            <div className='eduMain'>
              <img src={scho} alt="School" />
              <span className='title'>Geethanjali Vidyalaya School</span>
              <p className='deg'><i>Grade 10</i> <br />July 2018 - March 2019</p>
              <br />
            </div>
        </div>
    </section>
  )
}

export default Education;