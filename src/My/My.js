import React from 'react'
import './my.css'
import Img1 from '../images/29.svg'
import Img2 from '../images/16.png'
import Img3 from '../images/a1.png'
import Img18 from '../images/u14.png'
import Img19 from '../images/u21.png'
import Img20 from '../images/u32.png'
import Img21 from '../images/u42.png'
import Img27 from '../images/u58.png'
import {Link} from 'react-router-dom'
import Img4 from '../images/my/1.png'
import Img5 from '../images/my/2.png'
import Img6 from '../images/my/3.png'
import Img7 from '../images/my/4.png'
import Img8 from '../images/my/5.png'
import Img9 from '../images/my/6.png'
import Img10 from '../images/my/7.png'
import Img11 from '../images/my/8.png'
import Img12 from '../images/55555.png'


class My extends React.Component {
  state={
    data:[
      {
        src:Img4,
        text:'我的账户',
        path:Img12
      },
      {
        src:Img5,
        text:'积分充值',
        path:Img12
      },
      {
        src:Img6,
        text:'已完成任务',
        path:Img12
      },
      {
        src:Img7,
        text:'已发布任务',
        path:Img12
      },
      {
        src:Img8,
        text:'我的收藏',
        path:Img12
      },
      {
        src:Img9,
        text:'意见反馈',
        path:Img12
      },
      {
        src:Img10,
        text:'关于我们',
        path:Img12
      },
      {
        src:Img11,
        text:'设置',
        path:Img12
      }
    ]
  }
  render () {
    let {data} = this.state
    let texts = data.map((item,index)=>{
      return(
        <div>
          <img src={item.src} alt=""/>
          <div>
            <p>{item.text}</p>
            <img src={item.path} alt=""/>
          </div>
        </div>
      )

    })
    return(
      <div className='my'>
        <div className="foundTop">
          <img src={Img1} alt=""/>
        </div>
        <div className="myTop">
          <div className="mytopl">
            <img src={Img2} alt=""/>
            <p>18733535695</p>
            <span><Link to='/my/card'>我的名片</Link></span>
          </div>
          <div className="mytopr">
            <span><img src={Img3} alt=""/>签到</span>
          </div>
        </div>
        <div className="mymin">
            {texts}
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
              <img src={Img21} alt=""/>
              <p>消息</p>
              </Link>
            </li>
            <li>
              <Link to='/my'>
                <img src={Img27} alt=""/>
                <p>我的</p>
              </Link>
            </li>

          </ul>

        </div>
      </div>
    )
  }
}

export default My;
