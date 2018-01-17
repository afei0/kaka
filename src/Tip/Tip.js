import React from 'react'
import './tip.css'

class Tip extends React.Component {
  render () {
    return(
      <div className='tip'>
        <ul>
          <li>
            <p>广告</p>
          </li>
          <li>
            <p>低俗色情</p>
          </li>
          <li>
            <p>恶意骚扰</p>
          </li>
          <li>
            <p>攻击歧视</p>
          </li>
          <li>
            <p>其他</p>
          </li>
          <li>
            <p>取消</p>
          </li>
        </ul>

      </div>
    )
  }
}

export default Tip;
