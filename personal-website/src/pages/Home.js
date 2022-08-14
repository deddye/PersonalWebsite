import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import IconButton from '@material-ui/core/IconButton'

import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi! I'm Ethan. </h2>
        <div className='prompt'> 
          <p>
            Full-time CS student. Part-time construction worker.
          </p>
          <p>
            All the time software enthusiast.
          </p>
          <a href='https://www.linkedin.com/in/david-dye-cs22/' target='_blank' rel='noreferrer' >
            <IconButton color='primary' >
              <LinkedInIcon />
            </IconButton>
          </a>
          <a href='https://github.com/deddye' target='_blank' rel='noreferrer' >
            <IconButton color='primary'>
             <GitHubIcon />
            </IconButton>
          </a>
          <IconButton color='primary'>
            <EmailIcon />
          </IconButton>
        </div>
      </div>
      <div className='skills'>
        <h1> Skills </h1>
        <ol className='list'>
          <li className='item'>
            <h2> Tools / OS </h2>
            <span> 
              Windows, Linux, Eclipse, VS Code, Android Studio, 
              ReactJS, NPM, MaterialUI
            </span>
          </li>
          <li className='item'>
            <h2> Languages </h2>
            <span> 
              Java - JavaFX, C, Kotlin, Python, C++, JavaScript, C#
            </span>
          </li>
          <li className='item'>
            <h2> Soft Skills </h2>
            <span>
              Communication, Conscientiousness, Research, Team collaboration,
              Problem solving
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home