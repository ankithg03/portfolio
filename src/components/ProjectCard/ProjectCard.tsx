import React from 'react';

import s from './ProjectCard.module.scss'
import clsx from 'classname'

interface ProjectCardProps {
  project: {
    title?: string;
    description?: string;
    image?: string;
    github?: string;
    link?: string;
    stack?: string[];
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={clsx("rounded-lg shadow-md p-4", s['project-card'])}>
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <h2 className="text-lg font-bold mt-4">{project.title}</h2>
      <p className="text-gray-600">{project.description}</p>
      <div className="mt-2">
        {project.stack.map((tech, index) => (
          <span key={index} className="text-sm text-gray-500 mr-2">{tech}</span>
        ))}
      </div>
      <div className='grid grid-cols-2'>
        {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            View on GitHub
            </a>
        )}
        {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Live Demo
            </a>
        )}
        </div>
    </div>
  );
};

export default ProjectCard;


