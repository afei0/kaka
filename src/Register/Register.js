import React from 'react'
import './register.css'
import Img1 from '../images/1.jpg'

class Register extends React.Component {
  render () {
    return(
      <div className='register'>
        <img src={Img1} alt=""/>
          <input id='username' type='text' defaultValue='请输入手机号'/>
          <input id='password' type='password' defaultValue='请输入密码'/>
          <input type="text" defaultValue='请输入验证码'/>
          <button id='submit' >注册</button>
          <button id='look'>随便看看</button>
      </div>
    )
  }
}

export default Register;
