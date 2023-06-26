import React from 'react';

function MobileProjectComp({image, title, description, githubLink = "", deployLink = ""}) {
  
  return (
    <div className="card projectCardStyle" >
      <img src={image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        {deployLink && <a href={deployLink} className="card-link" target="_blank"><i className="bi bi-git"></i></a>}
        {githubLink && <a href={githubLink} className="card-link" target="_blank"><i className="bi bi-box-arrow-up-right"></i></a>}
      </div>
    </div>
  )
}
export default MobileProjectComp;