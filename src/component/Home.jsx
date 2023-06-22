import React from 'react';
import home from '../images/hero.jpg'
import Common from './Common';

const Home = () => {
  return (
    <div>
      <Common
        name='Grow your business with'
        visit = '/service'
        imgsrc={home}
        btnname='Get Started'
      ></Common>
    </div>
  )
}

export default Home;


{/* <div className='container-fluid nav_bg'>
<div className="row">
  <div className="col-10 mx-auto">
    
  </div>
</div>

</div> */}
