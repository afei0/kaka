import React from 'react'
import './guiding.css'
import Img1 from '../images/Guiding/1.png'
import Img2 from '../images/Guiding/11.png'
import Img3 from '../images/Guiding/111.png'
import {Link} from 'react-router-dom'
import Img5 from'../images/1.jpg'
// import Img4 from '../images/Guiding/1111.png'

class Guiding extends React.Component {
  state={
    show:0
  }
  handleLeft=()=>{
    let {show}=this.state
    if(show<3){
      this.setState({
        show:show+1
      })

    }
    console.log(show);
  }
  render () {
  return(
    <div className="wrap" onClick={this.handleLeft} style={{marginLeft:`${this.state.show*-100}vw`}}>
    <div className='guiding'>
      <img src={Img1} alt=""/>
      <img src={Img2} alt=""/>
      <img src={Img3} alt=""/>
      <div id="roots">
        <img id='logo' src={Img5} alt=""/>
        <p>随想咔咔</p>
        <span>帮你所看 随想咔咔</span>
        <Link to='/login'><button id='his'>点击进入</button></Link>
      </div>
    </div>
    </div>
  )
  }
}

export default Guiding;
