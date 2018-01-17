import React from 'react'
import './reply.css'
import Img1 from '../images/55555.png'
import Img2 from '../images/444.jpg'
import Img3 from '../images/333.jpg'
import Img4 from '../images/1111.jpg'
import Img5 from '../images/dingw.png'


class Reply extends React.Component {
  render () {
     return(
       <div className="reply">
         <div className="top">
           <img src={Img1} alt=""/>
           <span>回复任务</span>
         </div>
           <div className="reple-m">
             <img src={Img2} alt=""/>
             <img src={Img3} alt=""/>
             <img src={Img4} alt=""/>
           </div>
            <span>具体请情况如上图，街上的行人较少，咖啡厅基本上都是情侣</span>
            <p>+</p>
          <p>
            <span>当前位置</span>
            <span> <img src={Img5} alt=""/></span>
            <span>武汉市 武昌区 万达广场汉街</span>
          </p>
          <button>发送</button>

       </div>
     )
  }
}

export default Reply;
