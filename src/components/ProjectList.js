import React from 'react';
import ProjectItem from './ProjectItem';

function ProjectList({ projects }) {
  return (
    <div className="projects">
      {projects.map(project => (
        <ProjectItem key={project.id} project={project} technologies={project.technologies} />
      ))}
    </div>
  );
}

export default ProjectList;
