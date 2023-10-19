import React from 'react'
import './education.css'

const Education = () => {
  return (
    <section id="education">
        <div className="eduContent">
            <span className="eduTitle"> Education</span>
            <div style={{ borderTop: '3px solid #0C9F50', width: 200, marginTop: 13, marginBottom: 10, marginLeft: 50}} />
              <table className="eduMain">
                <tr>
                  <td style={{width: 250}}>2021 - 2025</td>
                  <td style={{fontSize: 'large', fontWeight: 600}}>Vellore Institute of Technology, Vellore</td>
                </tr>
                <tr>
                  <td>Vellore, India</td>
                  <td style={{fontStyle: 'italic'}}>Bachelor of Technology in Computer Science</td>
                </tr>
                <br />
                <tr>
                  <td>2019 - 2021</td>
                  <td style={{fontSize: 'large', fontWeight: 600}}>Geetanjali Olympiad School and College</td>
                </tr>
                <tr>
                  <td>Bengaluru, India</td>
                  <td style={{fontStyle: 'italic'}}>Senior Secondary Education (Grade 12)</td>
                </tr>
                <br />
                <tr>
                  <td>2009 - 2019</td>
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