import React,{useEffect} from 'react'
import './education.css'
import AOS from 'aos';
import "aos/dist/aos.css";

const Education = () => {
  useEffect(() => {
    AOS.init({duration: 1400});
    AOS.refresh();
}, []);
  return (
    <section id="education">
        <div className="eduContent">
            <span className="eduTitle" data-aos='fade-right'>Education</span>
            <div style={{ borderTop: '3px solid #0C9F50', width: 200, marginTop: 13, marginBottom: 10, marginLeft: 50}} />
              <table className="eduMain">
                <tr>
                  <td className='date'>2021 - 2025</td>
                  <td style={{fontSize: 'large', fontWeight: 600}}>Vellore Institute of Technology, Vellore</td>
                </tr>
                <tr>
                  <td>Vellore, India</td>
                  <td style={{fontStyle: 'italic'}}>Bachelor of Technology in Computer Science</td>
                </tr>
                <br />
                <tr>
                  <td className='date'>2019 - 2021</td>
                  <td style={{fontSize: 'large', fontWeight: 600}}>Geetanjali Olympiad School and College</td>
                </tr>
                <tr>
                  <td>Bengaluru, India</td>
                  <td style={{fontStyle: 'italic'}}>Senior Secondary Education (Grade 12)</td>
                </tr>
                <br />
                <tr>
                  <td className='date'>2009 - 2019</td>
                  <td style={{fontSize: 'large', fontWeight: 600}}>Geethanjali Vidyalaya School</td>
                </tr>
                <tr>
                  <td>Bengaluru, India</td>
                  <td style={{fontStyle: 'italic'}}>Secondary Education (Grade 10) </td>
                </tr>
              </table>
            </div>
    </section>
  )
}

export default Education;