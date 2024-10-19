// Project.jsx
import React from 'react';

const Project = ({ title, imgSrc }) => {
  return (
    <div className="project">
      <img src={imgSrc} alt={title} className="project-image" />
      <h3 className="project-title">{title}</h3>
    </div>
  );
};

export default Project;
