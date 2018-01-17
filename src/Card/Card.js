import React from 'react'
import './card.css'
import Img1 from '../images/44.png'
import Img2 from '../images/my/9.jpg'

class Card extends React.Component {
  render () {
    return(
      <div className="card">
        <div className="cardTop">
          <img  onClick={()=>this.props.history.goBack()} src={Img1} alt=""/>
          <h1>我的名片</h1>
        </div>
        <div className="cardbanner">
          <img src={Img2} alt=""/>
        </div>
      </div>
    )
  }
}

export default Card;
