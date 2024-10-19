import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGraduationCap, faBriefcase,faCode } from '@fortawesome/free-solid-svg-icons';
import ReactLogo from './img/zlogo.png'
const header = () => {
  return (
    <div className='navbar'>
              <div className="newtons-cradle">
        <img className='reactLogo' src={ReactLogo} alt="" />
</div>
        <a>
        Hola👋, Amigos
        </a>


    </div>
  )
}

export default header

