import React from 'react'
import './enter.css'
import Img1 from'../images/1.jpg'
import {Link} from 'react-router-dom'

class Enter extends React.Component {
  render () {
    return(
      <div id="root">
        <img src={Img1} alt=""/>
        <p>随想咔咔</p>
        <span>帮你所看 随想咔咔</span>
        <Link to='/attention'><button id='his'>点击进入</button></Link>
      </div>
    )
  }
}

export default Enter;
