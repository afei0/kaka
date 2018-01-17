import React from 'react'
import './task.css'
import { Link } from 'react-router-dom'
import img44 from '../images/44.png'
import img16 from '../images/16.png'
import img19 from '../images/19.png'
import img20 from '../images/20.png'
import img21 from '../images/21.png'
class Task extends React.Component {
  render () {
        return(
          <div className='task-0'>
              <div className='task-1'>
                <Link to='/home'>
                  <img className='task-2' src={img44} alt=""/>
                </Link>
                  <span className='task-3'>任务详情</span>
              </div>

              <div className='task-4'>
                  <img className='task-5' src={img16} alt=""/>
                  <div>
                    <span className='task-6'>chen xx</span>
                    <img className='task-7' src={img21} alt=""/>
                  </div>
              </div>
              <div className='task-8'></div>

            <div className='task-9'>
                  <p className='task-10'>想了解一下武汉市武昌区汉街的街景和街上的几个咖啡店里面的</p>
                  <p className='task-11'>情况.....</p>
                  <div className='task-12'>
                      <img className='task-13' src={img20} alt=""/>
                      <span className='task-14'>上海市浦东新区 988km 2017-03-09  5分钟前</span>
                      <img className='task-15' src={img19} alt=""/>
                      <span className='task-16'>50</span>
                  </div>
            </div>

            <div className='task-17'></div>

            <p className='task-18'>接受任务</p>

          </div>
        )
  }
}

export default Task;
