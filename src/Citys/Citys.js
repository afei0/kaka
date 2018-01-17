import React from 'react'
import Img1 from '../images/55555.png'
import { Link } from 'react-router-dom'

class Citys extends React.Component {
  state={
    tab:[
      '首尔','东京','京都','名古屋','日本','韩国','釜山','济州岛','箱根','冲绳','福冈','北海道','奈良','西安恒滨','大阪',
    ],
    tabs:[
      '英国','伦敦','巴黎','爱丁堡','法国','罗马','米兰','意大利','柏林','德国','荷兰','威尼斯','法兰克福','佛罗伦萨','慕尼黑','阿姆斯特丹','巴塞罗那','马德里','西班牙','土耳其'
    ]
  }
  render () {
    let {tab} = this.state
    let {tabs} = this.state
    let tabss = tab.map((item,index)=>{
      return(
        <span key={index}>{item}</span>
      )
    })
    let cit = tabs.map((item,index)=>{
      return(
        <span key={index}>{item}</span>
      )
    })
    return(
      <div className='city'>
        <div className="top">
          <img onClick={()=>this.props.history.goBack()} src={Img1} alt=""/>
          <span>选择城市</span>
        </div>
        <input type="text" value='输入城市名或拼音/英文名'/>
        <div className="ttp">
        <h3><Link to='/home/city'>国内</Link></h3>
        <h3><Link to='/home/citys'>海外</Link></h3>
        </div>
        <div className="min1">
          <h3>根据您的位置推荐</h3>
          <div className="obj">
            <span>北京</span>
          </div>
          <h3>历史记录</h3>
          <div className="obj">
            <span>北京</span>
            <span>深圳</span>
            <span>上海</span>
          </div>
          <h3>日韩</h3>
          <div className="obj">
            {tabss}
          </div>
          <h3>欧洲</h3>
          <div className="obj">
            {cit}
          </div>
        </div>
      </div>
    )
  }
}

export default Citys;
