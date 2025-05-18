import React from 'react';

import s from './ProjectCard.module.scss'
import clsx from 'clsx'

interface ProjectCardProps {
  project: {
    name?: string;
    description?: string;
    image?: string;
    github?: string;
    link?: string;
    stack?: string[];
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={clsx("rounded-lg shadow-md p-4 flex flex-col", s['project-card'])}>
      <img src={project.image} alt={project.name} className={clsx(s['project-image'], "w-full h-48 object-cover")} />
      <div className='mt-4 mb-auto text-center font-PPMori'>
        <h2 className="text-lg font-bold mb-auto text-[#3b3b3b]">{project.name}</h2>
        <p className="text-gray-500 text-sm">{project.description}</p>
        <div className={s['projects']}>
            {project?.stack?.map((tech, index) => (
                <span key={index} className="text-sm text-slate-400">{tech}</span>
            ))}
        </div>
        <div className='flex gap-2 text-center justify-center'>
            {project.github && (
                <><a href={project.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-bold">
                View on GitHub
                </a>{project?.link ? " | " : ""}</>
            )}
            {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline font-bold">
                Live Demo
                </a>
            )}
            </div>
      </div>
    </div>
  );
};

export default ProjectCard;


