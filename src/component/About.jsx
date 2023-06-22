import React from 'react'
import Common from './Common'
import about from '../images/about.png'


const About = () => {
  return (
    <div>
      <Common
        name='Welcome to about page'
        visit = '/contact'
        imgsrc={about}
        btnname='Contact Now'
      ></Common>
    </div>
  )
}

export default About
