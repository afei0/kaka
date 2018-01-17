import React from 'react'
import './comment.css'
import Img1 from '../images/44.png'
import Img2 from '../images/35.png'
import Img3 from '../images/39.svg'


class Comment extends React.Component {
  render () {
    return(
      <div className='comment'>
        <div className="commentTop">
          <span onClick={()=>this.props.history.goBack()} ><img src={Img1} alt=""/></span>
          <span>评论详情</span>
        </div>
        <div className="commentMin">
          <h1>评论(261)</h1>
          <div className="commentMain">
            <div className="commentMainTop">
              <img src={Img2} alt=""/>
              <p>H.H</p>
            </div>
            <p>古根海姆博物馆的外部非常朴实无华，只是将博物馆的名字装饰了一下。平滑的白色混凝土覆盖在墙上，使他们仿佛更像一座巨大的雕像而不是建筑物</p>
            <span>BIG.BOSS:把你的回复读完之后我想去看一看了</span>
          </div>
          <div className="commentMain">
            <div className="commentMainTop">
              <img src={Img3} alt=""/>
              <p>五海</p>
            </div>
            <p>光是建筑外观就与众不同啊！</p>
          </div>
        </div>
        <div className="commentDown">

        </div>
      </div>
    )
  }
}

export default Comment;
