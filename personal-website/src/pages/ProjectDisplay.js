import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../helpers/ProjectList'
import GitHubIcon from '@material-ui/icons/GitHub'
import '../styles/ProjectDisplay.css'

function ProjectDisplay() {
    const { id } = useParams();
    const project = ProjectList[id];
    const isPrivate = project.private ? 'Private' : 'Public';
    return (
      <div className="project">
        <h1> {project.name} - {isPrivate} </h1>
        <img src={project.image} alt='yuh'/>
        <p>
            <b>Skills:</b> {project.skills}
        </p>
        <a href={project.url} target='_blank' rel='noreferrer' >
          <GitHubIcon />
        </a>
      </div>
    );
  }

export default ProjectDisplay;