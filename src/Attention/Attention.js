import React from 'react'
import './attention.css'
import Img1 from '../images/2_03.png'

class Attention extends React.Component {
  render () {
  return(
    <div className='attention'>
      <img src={Img1} alt=""/>
      <p>注意事项</p>
      <p>1、请尽量发布真实、有价值的问题答案</p>
      <p>2、发送内容支持最多5张照片、视频时间不可超过10秒</p>
      <p></p>
      <p>1、所有发送内容都会被审查</p>
      <p>2、禁止发送色情、血腥暴力等不当内容</p>
      <p>3、如有违反《随想咔咔内容条件》将会受到相应的惩罚，严重者追究法律责任</p>
      <button>我知道了</button>
      <div>
        <input id='no' type='checkbox'/>
        <span>
          不再提醒
        </span>

      </div>


  </div>
  )
  }
}

export default Attention;
