import React from 'react'
import './details.css'
import { Link } from 'react-router-dom'
import img44 from '../images/44.png'
import img17 from '../images/17.png'
import img19 from '../images/19.png'
import img20 from '../images/20.png'
import img22 from '../images/22.png'
import img18 from '../images/18.jpg'
class Details extends React.Component {
  render () {
        return(
          <div className='details-0'>
              <div className='details-1'>
                <Link to='/home'>
                  <img className='details-2' src={img44} alt=""/>

                </Link>
                  <span className='details-3'>任务详情</span>
              </div>
              <div className='details-4'>
                  <img className='details-5' src={img17} alt=""/>
                  <div>
                    <span className='details-6'>an 然</span>
                    <img className='details-7' src={img22} alt=""/>
                  </div>
              </div>
              <div className='details-8'></div>

            <div className='details-9'>
                  <p className='details-10'>我想知道北京这个星巴克现在的客流量怎么样...</p>
                  <img className='details-10-1' src={img18} alt=""/>
                  <div className='details-12'>
                      <img className='details-13' src={img20} alt=""/>
                      <span className='details-14'>上海市浦东新区 988km 2017-03-09  5分钟前</span>
                      <img className='details-15' src={img19} alt=""/>
                      <span className='details-16'>50</span>
                  </div>
            </div>

            <p className='details-18'>接受任务</p>

          </div>
        )
  }
}

export default Details;
