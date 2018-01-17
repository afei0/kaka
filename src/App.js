import React from 'react'
import Login from './Login/Login'
import Enter from './Enter/Enter'
import Guiding from './Guiding/Guiding'
import Attention from './Attention/Attention'
import Register from './Register/Register'
import Tip from './Tip/Tip'
import City from './City/City'
import Citys from './Citys/Citys'
import More from './More/More'
import Reply from './Reply/Reply'
import Home from './Home/Home'
import Search from './Search/Search'
import Task from './Task/Task'
import Drtails from './Details/Details'
import Comment from './Comment/Comment'
import Found from './Found/Found'
import Release from './Release/Release'
import Message from './Message/Message'
import My from './My/My'
import Card from './Card/Card'

import'./app.css'
import {HashRouter as Router ,Route ,Switch } from 'react-router-dom'

class App extends React.Component {
  render () {
    return(
      <Router>
        <div>
          <Switch>
            <Route path='/' exact component={Guiding} />
            <Route path='/register' exact component={Register} />
            <Route path='/login' exact component={Login} />
            <Route path='/home/city' exact component={City} />
            <Route path='/home/citys' exact component={Citys} />
            <Route path='/home' exact component={Home} />
            <Route path='/home/search' exact component={Search} />
            <Route path='/home/task' exact component={Task} />
            <Route path='/home/details' exact component={Drtails} />
            <Route path='/home/comment' exact component={Comment} />
            <Route path='/found' exact component={Found} />
            <Route path='/release' exact component={Release} />
            <Route path='/messsage' exact component={Message} />
            <Route path='/my' exact component={My} />
            <Route path='/my/card' exact component={Card} />
          </Switch>

        </div>

      </Router>
    )
  }
}

export default App;
