import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import EmailIcon from '@material-ui/icons/Email'
import IconButton from '@material-ui/core/IconButton'
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
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
      <p> &copy; 2022 etxnd.com </p>
    </div>
  );
}

export default Footer;