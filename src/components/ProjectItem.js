import React from 'react';

function ProjectItem({ project, technologies }) {
  return (
    <div className="project">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <div className="technologies">
        {technologies.map((technology, index) => (
          <span key={index}>{technology}</span>
        ))}
      </div>
      <a href={project.liveLink}>View Live</a>
      <a href={project.sourceLink}>View Source</a>
    </div>
  );
}

export default ProjectItem;
