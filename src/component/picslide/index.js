import React, { Fragment } from "react";
import './style.css';
import { BeforeAfter } from "./script";


export default class Picslide extends React.Component {
    state = {
        list: [{
            name: 'one',
            img1: './images/picslide/1.jpg',
            img2: "./images/picslide/2.jpg"
        }, {
            name: 'two',
            img1: "./images/picslide/3.jpg",
            img2: "./images/picslide/4.jpg"
        }
        ]
    }
    componentDidMount() {
        new BeforeAfter({
            id: '#one'
        });
        new BeforeAfter({
            id: '#two'
        });
    }
    render() {
        return (
            <Fragment>
                <h2 className="display-5 title">
                <span className="title-div">Video AI Color</span>
                </h2>
                <div className="mainSection">
                    {
                        this.state.list.map((item, i) => (
                            <div id={item.name} key={i} className="bal-container" >
                                <div className="bal-after">
                                    < img src={item.img1} alt='' />
                                    <div className="bal-afterPosition afterLabel">
                                        Orignal
                                    </div>
                                </div>

                                <div className="bal-before">
                                    <div className="bal-before-inset">
                                        < img src={item.img2} alt='' />
                                        <div className="bal-beforePosition beforeLabel">
                                            Colored
                                        </div>
                                    </div>
                                </div>
                                <div className="bal-handle">
                                    <span className=" handle-left-arrow"></span>
                                    <span className="handle-right-arrow"></span>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </Fragment>
        );;
    }
}
