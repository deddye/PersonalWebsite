import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import IconButton from '@material-ui/core/IconButton'
import ContactMe from '../components/ContactForm'

import '../styles/Home.css'

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi! I'm Ethan </h2>
        <div className='prompt'> 
          <p>
            I'm a Computer Science student trying to build cool things.
          </p>
          <p>
            Current Interest: Systems with C
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
          <ContactMe/>
        </div>
      </div>
      <div className='skills'>
        <h1> <u>Skills</u> </h1>
        <ol className='list'>
          <li className='item'>
            <h2> <u>Tools/ OS</u> </h2>
            <span> 
              Windows, Linux, MongoDB, VS Code, IntelliJIDEA, Android Studio, 
              Azure, Microsoft Teams
            </span>
          </li>
          <li className='item'>
            <h2> <u>Languages</u> </h2>
            <span> 
              Java - JavaFX, C, Kotlin, JavaScript/ TypeScript, Python
            </span>
          </li>
          <li className='item'>
            <h2> <u>Soft Skills</u> </h2>
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