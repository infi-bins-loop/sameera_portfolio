import React,{useEffect} from 'react'
import './projects.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import AOS from 'aos';
import "aos/dist/aos.css";
const Projects = () => {
  useEffect(() => {
    AOS.init({duration: 1400});
}, []);
  return (
    <section id="projects">
      <div className="proj">
        <span className="projTitle" data-aos='fade-right'>Projects</span>
        <div style={{ borderTop: '3px solid #0469AF', width: 180, marginTop: 13, marginBottom: 10, marginLeft: 35}} />
        <div className="projImgs">
          <div className="projImg5">
            <h2 className='h2m'>Virtual Car Showroom</h2>
            <p className='param'>KIA showroom website created using MERN Stack to explore and book.</p>
            <a class="btn btn-outline-light" href="https://vcs.onrender.com/" role="button" rel='noreferrer' target="_blank">View Website</a>
          </div>
          <div className="projImg1">
            <h2 className='h2m'>Medtrack</h2>
            <p className='param'>A Medicine Tracking app design</p>
            <a class="btn btn-outline-light" href="https://www.figma.com/proto/zC3GnvWrYqImobiO3mq4Ln/MedTrack?type=design&node-id=17-1019&t=9XyqZ4ALuRuyipxE-1&scaling=scale-down&page-id=7%3A2&starting-point-node-id=7%3A4" role="button" rel='noreferrer' target="_blank">View Prototype</a>
          </div>
          <div className="projImg2">
            <h2 className='h2m'>Dr Kitty's</h2>
            <p className='param'>Frontend for A Veterinary clinic website</p>
            <a class="btn btn-outline-light" href="https://infi-bins-loop.github.io/Bootstrap_JS_tasks/task2.html" role="button" rel='noreferrer' target="_blank">View Website</a>
          </div>
          
          <div className="projImg4">
            <h2 className='h2m'>SalesMon</h2>
            <p className='param'>A sales monitoring app design</p>
            <a class="btn btn-outline-light" href="https://www.figma.com/proto/rJxx6ETv9V2goHkF1ntV05/SalesMon?type=design&node-id=118-147&t=Mrj9iBwmGFP08fcC-1&scaling=scale-down&page-id=114%3A3&starting-point-node-id=118%3A147" role="button" rel='noreferrer' target="_blank">View Prototype</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;