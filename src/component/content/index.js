import React, { Component, Fragment } from 'react';
import '../../assets/css/bootstrap.min.css';
import './content.css'

export default class Content extends Component {
    render() {
        return (
            <Fragment>
                <div className='container-fluid'>
                    <div className="row header">
                        <div className='container-fluid offset-2'>
                            <div className='row'>
                                <div className='col-md-2 title'>For</div>
                                <div className='col-md-2 title'>My</div>
                                <div className='col-md-2 title'>Love</div>
                                <div className='col-md-2 title'>邓志祥</div>
                                <div className='col-md-2 title'>亲亲</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
