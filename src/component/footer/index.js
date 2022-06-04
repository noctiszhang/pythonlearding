import React, { Component, Fragment } from 'react';
import './style.css';
import qrcode from '../../images/qrcode.jpg'


export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className='container-fluid'>
          <div className='row'>
            <div className='col-md-4 offset-md-1'>
              <p className='menu-title'>公司地址</p>
              <p>国家：中华人民共和国</p>
              <p>地址：上海市徐汇区港汇恒隆1号楼42层</p>
              <p>邮箱：welcome@xiting.com</p>
              <p>电话：+86-18888888888</p>
            </div>

            <div className='col-md-2 offset-md-3'>
              <p className='menu-title'>企业公众号</p>
              <img src={qrcode} style={{ width: '108px' }} />
            </div>

            <div className='col-md-2'>
              <p className='menu-title'>官方微信号</p>
              <img src={qrcode} style={{ width: '108px' }} />
            </div>
          </div>
        </footer>
      </Fragment>
    )
  }
}
