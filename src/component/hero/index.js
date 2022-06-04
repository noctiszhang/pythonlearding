import React, { Fragment } from 'react'
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from '../../images/hero/1.png'
import img2 from '../../images/hero/2.png'
import img3 from '../../images/hero/3.png'
import img4 from '../../images/hero/4.png'

export default function Hero() {
  return (
    <Fragment>
      <div style={{height:'5px'}}></div>
      <h1 className='hero-title'>This is Hero</h1>
      <div className="wrapper ">
        <div className="cols">
          <div className="col" onTouchStart="this.classList.toggle('hover');">
            <div className="container">
              <div className="front" style={{ backgroundImage: `url(${img1})` }}>
                <div className="inner">
                  <p>Diligord</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" onTouchStart="this.classList.toggle('hover');">
            <div className="container">
              <div className="front" style={{ backgroundImage: `url(${img2})` }}>
                <div className="inner">
                  <p>Diligord</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cols">
          <div className="col" onTouchStart="this.classList.toggle('hover');">
            <div className="container">
              <div className="front" style={{ backgroundImage: `url(${img3})` }}>
                <div className="inner">
                  <p>Diligord</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col" onTouchStart="this.classList.toggle('hover');">
            <div className="container">
              <div className="front" style={{ backgroundImage: `url(${img4})` }}>
                <div className="inner">
                  <p>Diligord</p>
                  <span>Lorem ipsum</span>
                </div>
              </div>
              <div className="back">
                <div className="inner">
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </Fragment>
  )
}
