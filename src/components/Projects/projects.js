import React from 'react'
import './projects.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import cubiculum from '../../assets/cubiculum.png';
import drkittys from '../../assets/drkittys.png';
import medtrack from '../../assets/medtrack.png';
import salesmon from '../../assets/salesmon.png';

const Projects = () => {
  return (
    <section id="projects">
      <div className="proj">
        <span className="projTitle"><i className='bi bi-briefcase-fill'></i> Work</span>
        <div className="projImgs">
          <img src={medtrack} alt="MedTrack" className="projImg" />
          <img src={drkittys} alt="DrKitty's" className="projImg" />
          <img src={cubiculum} alt="Cubiculum" className="projImg" />
          <img src={salesmon} alt="SalesMon" className="projImg" />
        </div>
      </div>
    </section>
  )
}

export default Projects;