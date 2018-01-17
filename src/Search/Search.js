import React from 'react'
import './seaarch.css'
import Img1 from '../images/43.png'
import Img19 from '../images/u21.png'
import Img20 from '../images/u32.png'
import Img21 from '../images/u42.png'
import Img22 from '../images/u52.png'

import Img23 from '../images/u9.png'

class Search extends React.Component {
  render () {
    return(
      <div className='search'>
        <div className="searchTop">
          <input type="text" defaultValue='请输入关键字' />
          <span onClick={()=>this.props.history.goBack()}>取消</span>
        </div>
        <img src={Img1} alt=""/>
          <div className="homeFd">
            <ul>
              <li>
                <img src={Img23} alt=""/>
                <p>首页</p>
              </li>
              <li>
                <img src={Img19} alt=""/>
                <p>发现</p>
              </li>
              <li>
                <img src={Img20} alt=""/>
                <p>发布</p>
              </li>
              <li>
                <img src={Img21} alt=""/>
                <p>消息</p>
              </li>
              <li>
                <img src={Img22} alt=""/>
                <p>我的</p>
              </li>

            </ul>

          </div>
      </div>
    )
  }
}

export default Search;
