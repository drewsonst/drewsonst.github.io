import React from 'react'
import { Parallax } from 'react-parallax'
import './Header.scss'
import headerBackground from '../../assets/apple-black-and-white.jpg'
import profilePic from "../../assets/avatar.png"

const Header = () => (
  <div className='header-box'>
    <Parallax bgImage={headerBackground} strength={1000} blur={{ min: 0, max: 5 }}>
      <div className="header">
        <div className="my-intro mx-auto my-auto">
          <h1>Andrew S</h1>
          <h5>Front End Developer, Quality Assurance</h5>
          <p>Site still in development</p>
        </div>
      </div>
    </Parallax>
    <img src={profilePic} alt="profile pic" className="my-profile-pic rounded-circle mx-auto" />
  </div>
)

export default Header