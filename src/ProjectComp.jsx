import React from 'react';

function ProjectComp(props) {
  
  return (
    <div className='projectContainer'>
        <div className='projectCardStyle'></div>
        <div className='projectImageBox'>
            <img className='projectImage'src={props.image} height='120' width='200' alt='project photo' />
        </div>
        <div className='projectCard'>
            <div className='projectTitle'>{props.title}</div>
            <div className='projectBuildTools'>{props.buildTools}</div>
            <div className='projectDescription'>{props.description}</div>
            <div className='projectLinksContainer'>
              {
                props.githubLink && <a className='projectLinks' href={props.githubLink} target='_blank'>Github</a>
              }
              <br/>
              {
                props.deployLink && <a className='projectLinks' href={props.deployLink} target='_blank'>View Live</a>
              }
                
            </div>
        </div>
    </div>
  )
}
export default ProjectComp;