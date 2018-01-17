import React from 'react'
import './more.css'
import Img1 from '../images/55555.png'
import Img2 from '../images/toux.png'
import Img3 from '../images/toux1.png'
import Img4 from '../images/222.png'
import Img5 from '../images/dingw.png'
import Img6 from '../images/333.jpg'


class More extends React.Component {
  render () {
    return(
      <div className='more'>
        <div className="top">
          <img src={Img1} alt=""/>
          <span>更多任务</span>
        </div>
        <div className="mission">
          <p>想了解一下武汉市武昌区汉街的街景和街上的几个咖啡厅里面的情况</p>
          <span></span>
          <div className="mids">
            <span> <img src={Img2} alt=""/></span>
            <span>chen xx</span>
            <span> <img src={Img5} alt=""/></span>
            <span>上海市浦 988 km 03-09</span>
            <span> <img src={Img4} alt=""/></span>
            <span>50</span>
          </div>
        </div>
        <div className="mission">
          <p>想了解一下武汉市武昌区汉街的街景和街上的几个咖啡厅里面的情况</p>
          <span><img src={Img6} alt=""/></span>
          <div className="mids">
            <span> <img src={Img3} alt=""/></span>
            <span>an 然</span>
            <span> <img src={Img5} alt=""/></span>
            <span>上海市浦 988 km 03-09</span>
            <span> <img src={Img4} alt=""/></span>
            <span>100</span>
          </div>
        </div>
        <div className="mission">
          <p>想了解一下武汉市武昌区汉街的街景和街上的几个咖啡厅里面的情况</p>
          <span></span>
          <div className="mids">
            <span> <img src={Img2} alt=""/></span>
            <span>chen xx</span>
            <span> <img src={Img5} alt=""/></span>
            <span>上海市浦 988 km 03-09</span>
            <span> <img src={Img4} alt=""/></span>
            <span>60</span>
          </div>
        </div>
        <div className="mission">
          <p>想了解一下武汉市武昌区汉街的街景和街上的几个咖啡厅里面的情况</p>
          <span></span>
          <div className="mids">
            <span> <img src={Img3} alt=""/></span>
            <span>an 然</span>
            <span> <img src={Img5} alt=""/></span>
            <span>上海市浦 988 km 03-09</span>
            <span> <img src={Img4} alt=""/></span>
            <span>40</span>
          </div>
        </div>
      </div>
    )
  }
}

export default More;
