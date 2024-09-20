import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Ansh Jain</h4>
      <h4>Copyright &copy; 2024 AJ</h4>
      <div className='footerLinks'>
        <a href="https://github.com/ANSH-JAIN-0210" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/ansh-jain-b29bb5211/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:anshjain7683@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/anshjain7683/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer