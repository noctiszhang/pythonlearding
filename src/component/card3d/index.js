import React, { Fragment } from 'react'
import './style.css'
import img1 from '../../images/card3d/giant.png'
import img2 from '../../images/card3d/barbarian.png'
import img3 from '../../images/card3d/wizard.png'
import {VanillaTilt} from './vanilla-tilt';

export default function Card3D() {
  React.useEffect(()=>{
    VanillaTilt.init(document.querySelectorAll(".card-item"), {
      max: 25,
      speed: 400,
  });
  },[])
  return (
    <Fragment>
      <div className='card-body'>
      <div className="wrap">
        <div className="card-item">
          <div className="role"><img src={img1} alt="" /></div>
          <div className="des">
            <h6>Kingdom</h6>
            <h1>The Giant</h1>
            <p>
              Slow, steady and powerful, Giants are massive warriors that soak up
              huge amounts of damage. Show them a turret or cannon and you'll see
              their fury unleashed!
            </p>
          </div>
          <div className="btn-list">
            It is methods
          </div>
        </div>
        <div className="card-item">
          <div className="role2"><img src={img2} alt="" /></div>
          <div className="des">
            <h6>Joker</h6>
            <h1>The Giant</h1>
            <p>
              Slow, steady and powerful, Giants are massive warriors that soak up
              huge amounts of damage. Show them a turret or cannon and you'll see
              their fury unleashed!
            </p>
          </div>
          <div className="btn-list">
            It is methods
          </div>
        </div>
        <div className="card-item">
          <div className="role3"><img src={img3} alt="" /></div>
          <div className="des">
            <h6>Queen</h6>
            <h1>The Giant</h1>
            <p>
              Slow, steady and powerful, Giants are massive warriors that soak up
              huge amounts of damage. Show them a turret or cannon and you'll see
              their fury unleashed!
            </p>
          </div>
          <div className="btn-list">
            It is methods
          </div>
        </div>
      </div>
      </div>
      
    </Fragment>
  )
}
