import React from 'react'
import './education.css'
import "bootstrap-icons/font/bootstrap-icons.css";

const Education = () => {
  return (
    <section id="education">
        <div className="eduContent">
            <span className="eduTitle"><i className='bi bi-mortarboard-fill'></i> Education</span>
            <div className="eduMain">
                <p className="clg">Vellore Institute of Technology, Vellore</p>
                <p className="deg">Bachelor of Technology in Computer Science </p>
                <p className="date">2021 - 2025 &nbsp; Vellore, India</p>
                <br />
                <p className="clg">Geetanjali Olympiad School and College</p>
                <p className="deg">Senior Secondary Education (Grade 12) </p>
                <p className="date">2019 - 2021 &nbsp; Bengaluru, India</p>
                <br />
                <p className="clg">Geethanjali Vidyalaya School</p>
                <p className="deg">Secondary Education (Grade 10) </p>
                <p className="date">2009 - 2019 &nbsp; Bengaluru, India</p>
            </div>
        </div>
    </section>
  )
}

export default Education;