import React from 'react'
import './projects.css'
import cubiculum from '../../assets/cubiculum.png';
import drkittys from '../../assets/drkittys.png';

import salesmon from '../../assets/salesmon.png';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Projects = () => {
  return (
    <section id="projects">
      <div className="proj">
        <span className="projTitle">My Work</span>
        <div className="projImgs">
          <div className="projImg1">
            <h2 className='h2m'>Medtrack</h2>
            <p className='param'>A Medicine Tracking app</p>
            <button className="btn btn-outline-light">View Prototype</button>
          </div>
        </div>
        <div className='projImgs'>
          <img src={drkittys} alt="DrKitty's"  />
          <img src={cubiculum} alt="Cubiculum"  />
          <img src={salesmon} alt="SalesMon"  />
        </div>
      </div>
    </section>
  )
}

export default Projects;