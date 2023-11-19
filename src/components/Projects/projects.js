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
        <span className="projTitle" data-aos='fade-right'>My Work</span>
        <div style={{ borderTop: '3px solid #0C9F50', width: 180, marginTop: 13, marginBottom: 10, marginLeft: 40}} />
        <div className="projImgs">
          <div className="projImg1">
            <h2 className='h2m'>Medtrack</h2>
            <p className='param'>A Medicine Tracking app</p>
            <a class="btn btn-outline-light" href="https://www.figma.com/proto/zC3GnvWrYqImobiO3mq4Ln/MedTrack?type=design&node-id=17-1019&t=9XyqZ4ALuRuyipxE-1&scaling=scale-down&page-id=7%3A2&starting-point-node-id=7%3A4" role="button" rel='noreferrer' target="_blank">View Prototype</a>
          </div>
          <div className="projImg2">
            <h2 className='h2m'>Dr Kitty's</h2>
            <p className='param'>A Veterinary clinic website</p>
            <a class="btn btn-outline-light" href="https://infi-bins-loop.github.io/Bootstrap_JS_tasks/task2.html" role="button" rel='noreferrer' target="_blank">View Website</a>
          </div>
          <br />
          <div className="projImg3">
            <h2 className='h2m'>Cubiculum</h2>
            <p className='param'>An online platform to make rooms for collaboration among students.</p>
            <a class="btn btn-outline-light" href="https://www.figma.com/proto/kAeUedFey2wsB0n23XncmJ/Cubiculum?type=design&node-id=206-320&t=hJHTdRi7ncJr6aBd-1&scaling=min-zoom&page-id=201%3A2&starting-point-node-id=206%3A320" role="button" rel='noreferrer' target="_blank">View Prototype</a>
          </div>
          <div className="projImg4">
            <h2 className='h2m'>SalesMon</h2>
            <p className='param'>A sales monitoring app</p>
            <a class="btn btn-outline-light" href="https://www.figma.com/proto/rJxx6ETv9V2goHkF1ntV05/SalesMon?type=design&node-id=118-147&t=Mrj9iBwmGFP08fcC-1&scaling=scale-down&page-id=114%3A3&starting-point-node-id=118%3A147" role="button" rel='noreferrer' target="_blank">View Prototype</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;