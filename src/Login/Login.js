import React from 'react'
import './login.css'
import Img2 from '../images/2.png'
import Img1 from '../images/1.jpg'
import {Link} from 'react-router-dom'

class Login extends React.Component {
  render () {
        return(
            <div id="root">
              <img src={Img1} alt=""/>
              <input id='username' type='text' defaultValue='请输入手机号'/>
              <input id='password' type='password' defaultValue='请输入密码'/>
              <div className='main'>
                <span>忘记密码？</span>
                <Link to='/register'>重置</Link>
              </div>
              <button id='submit' ><Link to='home'>登录</Link></button>
              <div className='or'>
                <span></span>
                <span>or</span>
                <span></span>
              </div>
              <div className="footer">
              <img src={Img2} alt=""/>
              <button id='look'><Link to='home'>随便看看</Link></button>
              </div>
            </div>


        )
  }
}

export default Login;
