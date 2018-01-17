import React from 'react'
import './found.css'
import Img1 from '../images/29.svg'
import Img2 from '../images/34.svg'
import Img3 from '../images/35.png'
import Img4 from '../images/39.svg'
import Img5 from '../images/30.png'
import Img6 from '../images/31.svg'
import Img7 from '../images/32.svg'
import Img8 from '../images/33.svg'
import Img9 from '../images/dingw.png'
import Img10 from '../images/26.png'
import Img11 from '../images/27.png'
import Img12 from '../images/28.png'
import Img18 from '../images/u14.png'
import Img20 from '../images/u32.png'
import Img21 from '../images/u42.png'
import Img22 from '../images/u52.png'

import Img24 from '../images/u26.png'
import {Link} from 'react-router-dom'


class Found extends React.Component {
  render () {
    return(
      <div className="found">
        <div className="foundTop">
          <img src={Img1} alt=""/>
        </div>
        <div className="foundMin">
          <img className='obj' src={Img2} alt=""/>
          <div className="foundMinTop">
            <span>泡沫</span>
            <img src={Img5} alt=""/>
          </div>
          <p>安徽宏村秀里意境精品文化酒店，喜欢的可以去看看哦...</p>
          <div className="foumd">
            <img src={Img6} alt=""/>
            <img src={Img7} alt=""/>
            <img src={Img8} alt=""/>
          </div>
          <div className="foundDown">
            <span>58分钟前</span>
            <span><img src={Img9} alt=""/></span>
            <span>宏村秀里精品文化酒店</span>
            <span><img src={Img10} alt=""/></span>
            <span>326</span>
            <span><img src={Img11} alt=""/></span>
            <span>70</span>
            <span><img src={Img12} alt=""/></span>
            <span>26</span>
          </div>
        </div>
        <div className="foundMin">
          <img className='obj' src={Img3} alt=""/>
          <div className="foundMinTop">
            <span>泡沫</span>
            <img src={Img5} alt=""/>
          </div>
          <p>安徽宏村秀里意境精品文化酒店，喜欢的可以去看看哦...</p>
          <div className="foumd">
            <img src={Img6} alt=""/>
            <img src={Img7} alt=""/>
            <img src={Img8} alt=""/>
          </div>
          <div className="foundDown">
            <span>58分钟前</span>
            <span><img src={Img9} alt=""/></span>
            <span>宏村秀里精品文化酒店</span>
            <span><img src={Img10} alt=""/></span>
            <span>326</span>
            <span><img src={Img11} alt=""/></span>
            <span>70</span>
            <span><img src={Img12} alt=""/></span>
            <span>26</span>
          </div>
        </div>
        <div className="foundMin">
          <img className='obj' src={Img4} alt=""/>
          <div className="foundMinTop">
            <span>泡沫</span>
            <img src={Img5} alt=""/>
          </div>
          <p>安徽宏村秀里意境精品文化酒店，喜欢的可以去看看哦...</p>
          <div className="foumd">
            <img src={Img6} alt=""/>
            <img src={Img7} alt=""/>
            <img src={Img8} alt=""/>
          </div>
          <div className="foundDown">
            <span>58分钟前</span>
            <span><img src={Img9} alt=""/></span>
            <span>宏村秀里精品文化酒店</span>
            <span><img src={Img10} alt=""/></span>
            <span>326</span>
            <span><img src={Img11} alt=""/></span>
            <span>70</span>
            <span><img src={Img12} alt=""/></span>
            <span>26</span>
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
                <img src={Img24} alt=""/>
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

export default Found;
