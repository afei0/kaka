import React from 'react'
import './message.css'
import Img1 from '../images/29.svg'
import Img2 from '../images/35.png'
import Img3 from '../images/46.png'
import Img18 from '../images/u14.png'
import Img19 from '../images/u21.png'
import Img20 from '../images/u32.png'
import Img22 from '../images/u52.png'

import Img26 from '../images/u48.png'
import {Link} from 'react-router-dom'

class Message extends React.Component {
  style={
    tab:[
      Img2,
      Img3
    ]
  }
  render () {
    return(
      <div className='message'>
        <div className="foundTop">
          <img src={Img1} alt=""/>
        </div>
        <div className="messagemin">
          <img src={Img2} alt=""/>
          <div className="messagein">
            <p>初夏</p>
            <div className="mess">
              <span>在吗</span>
              <span>昨天17:43</span>
            </div>
          </div>
        </div>
        <div className="messagemin">
          <img src={Img3} alt=""/>
          <div className="messagein">
            <p>系统通知</p>
            <div className="mess">
              <span>30秒带你体验随想咔咔</span>
              <span>下午01:25</span>
            </div>
          </div>
        </div>
        <div className="messagemin">
          <img src={Img3} alt=""/>
          <div className="messagein">
            <p>欢迎加入随想咔咔</p>
            <div className="mess">
              <span>主人，小咔已恭候多时了，200积分奉上，可在钱包查收。有任何建议可直接在消息中回复小咔</span>
              <span>2017-01-15</span>
            </div>
          </div>
        </div>
        <div className="homeFd">
          <ul>
            <li>
              <Link to='/home'>
                <img src={Img18} alt=""/>
                <p>首页</p>
              </Link>
            </li>
            <li>
              <Link to='/found'>
                <img src={Img19} alt=""/>
                <p>发现</p>
              </Link>
            </li>
            <li>
              <Link to='/release'>
              <img src={Img20} alt=""/>
              <p>发布</p>
              </Link>
            </li>
            <li>
              <Link to='/messsage'>
              <img src={Img26} alt=""/>
              <p>消息</p>
              </Link>
            </li>
            <li>
              <Link to='/my'>
                <img src={Img22} alt=""/>
                <p>我的</p>
              </Link>
            </li>

          </ul>

        </div>
      </div>
    )
  }
}

export default Message;
