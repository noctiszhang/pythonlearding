import React, { Fragment } from 'react'
import './style.css'
import img1 from '../../images/introduce/p1.png'
import img2 from '../../images/introduce/p2.png'
import img3 from '../../images/introduce/p3.png'


export default function Introduce() {
    return (
        <Fragment>
            <div className='frag'></div>
            <h3 className='intro-title'> Introduce</h3>
            <div className='intro-body'>
                <div className="intro-container">
                    <div className="card">
                        <div className="imgBx">
                            <img src={img1} alt="" />
                        </div>
                        <div className="content">
                            <h2>Intro 1</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                            <img src={img2} alt="" />
                        </div>
                        <div className="content">
                            <h2>Intro 2</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                            <img src={img3} alt="" />
                        </div>
                        <div className="content">
                            <h2>Intro 3</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
