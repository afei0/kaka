import React from 'react'
import './home.css'
import Img1 from '../images/u75.svg'
import Img2 from '../images/11.png'
import Img3 from '../images/12.png'
import Img4 from '../images/banner1.jpg'
import Img5 from '../images/banner2.jpg'
import Img6 from '../images/banner3.png'
import Img7 from '../images/16.png'
import Img8 from '../images/17.png'
import Img9 from '../images/19.png'
import Img10 from '../images/dingw.png'
import Img11 from '../images/18.jpg'
import Img12 from '../images/23.jpg'
import Img13 from '../images/24.jpg'
import Img14 from '../images/25.jpg'
import Img15 from '../images/26.png'
import Img16 from '../images/27.png'
import Img17 from '../images/28.png'

import Img18 from '../images/u14.png'
import Img19 from '../images/u21.png'
import Img20 from '../images/u32.png'
import Img21 from '../images/u42.png'
import Img22 from '../images/u52.png'

import Img23 from '../images/u9.png'
import Img24 from '../images/u26.png'
import Img25 from '../images/u38.png'
import Img26 from '../images/u48.png'
import Img27 from '../images/u58.png'
import {Link} from 'react-router-dom'

class Home extends React.Component {
  state={
    show:0,
    aa:[
      Img18,Img19,Img20,Img21,Img22
    ],
    bb:[
      Img23,Img24,Img25,Img26,Img27
    ],
    clone:true,
    tab:70,
    chane:0
  }

  tumer = () =>{
    return this.loop = setInterval( ()=>{
      let {show} = this.state
      show++
      if(show===3){
        show=0
      }
      this.setState({
        show:show
      })
    },2000)
  }
  componentDidMount(){
  this.loop = this.tumer()
}
handleEnter = () => {
  clearInterval(this.loop)
}
handleLeave = () => {
  this.loop = this.tumer()
}
componentWillUnmount() {
  clearTimeout(this.loop)
}
handlenone=()=>{
    this.setState({
      clone:false
    })
}
handleadd=()=>{
  let {tab}=this.state
  this.setState({
    tab:tab+1
  })
}

  render () {
    // let {aa} = this.state
    // let bb = aa.map((item,index)=>{
    //   return(
    //     <li>{item}</li>
    //   )
    // })

    let ml = `${this.state.show*-100}vw`
    return(
      <div className="home">
        <div className="top">
          <span><Link to='home/city'>武汉</Link></span>
          <span><img src={Img2} alt=""/></span>
          <span><img src={Img1} alt=""/></span>
          <span> <Link to='home/search'><img src={Img3} alt=""/></Link></span>
        </div>
        <div className="banner" onMouseEnter={ this.handleEnter } onMouseLeave={ this.handleLeave }>
          <div className="bannerSvg" style={{marginLeft:ml}}>
            <img src={Img4} alt=""/>
            <img src={Img5} alt=""/>
            <img src={Img6} alt=""/>
          </div>
        </div>
        <div className="home-min">
          <h1>—— 最新任务 ——</h1>
          <div className="ent">
              <div className="entin">
                <Link to='home/task'>
                <p>想了解一下武汉市武昌区汉街的结晶和街上的几个咖啡店里面的情况......</p>
                <span></span>
                <span><img src={Img7} alt=""/></span>
                <span>cheng xx</span>
                <span><img src={Img9} alt=""/></span>
                <span></span>
                <span>50</span>
                <span><img src={Img10} alt=""/></span>
                <span>上海市浦东新区 988km 2017-03</span>
              </Link>
              </div>
            <div className="entin">
              <Link to='home/details'>
              <p>我想知道这个星巴克现在的客...</p>
              <span><img src={Img11} alt=""/></span>
              <span><img src={Img8} alt=""/></span>
              <span>an 然</span>
              <span><img src={Img9} alt=""/></span>
              <span></span>
              <span>100</span>
              <span><img src={Img10} alt=""/></span>
              <span>合肥市包河区 917km 2017-03</span>
            </Link>
            </div>
          </div>
        </div>
        <div className="home-footer">
          <h1>——今日推荐——</h1>
          <div className="homefm">
            <img src={Img12} alt=""/>
            <img src={Img13} alt=""/>
            <img src={Img14} alt=""/>
          </div>
          <p>所罗门-R-古根海梅美术馆（The Solomon R.Guggenheim Museum）</p>
          <p>古根海梅美术馆</p>
          <div className="homedown">
            <span><img src={Img15} alt=""/></span>
            <span>6326</span>
            <span onClick={this.handleadd}><img src={Img16} alt=""/></span>
            <span onClick={this.handleadd}>{this.state.tab}</span>
            <span><img onClick={()=>this.props.history.push('/home/comment')} src={Img17} alt=""/></span>
            <span onClick={()=>this.props.history.push('/home/comment')}>261</span>
          </div>
        </div>
        <div className="homeFd">
          <ul>
            <li>
              <Link to='/home'>
                <img src={Img23} alt=""/>
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
                <img src={Img22} alt=""/>
                <p>我的</p>
              </Link>
            </li>

          </ul>

        </div>
        <div className='rewards' onClick={this.handlenone} style={ {display : this.state.clone ? 'block' : 'none'} }>
          <div>
            <img src={Img1} alt=""/>
            <p>恭喜您获得今日奖励</p>
            <span>+10</span>
            <span>积分</span>
            <p>每日登录即可获得奖励</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
