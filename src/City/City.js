import React from 'react'
import './city.css'
import Img1 from '../images/55555.png'
import { Link } from 'react-router-dom'

class City extends React.Component {
  state={
    tab:["北京","上海","无锡","景德镇","沈阳","杭州","大连","成都","郑州","武汉","宁波","青海","广州","西安","海南","郑州"]
  }

  render () {
    let {tab}=this.state
    let Citym=tab.map((item,index)=>{
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
          <h3>热门城市</h3>
          <div className="obj">
            {Citym}
          </div>
          <h3>A</h3>
            <p>鞍山</p>
            <p>安庆</p>
            <p>安阳</p>
            <p>安平镇</p>
            <p>安吉县</p>

        </div>
      </div>
    )
  }
}

export default City;
