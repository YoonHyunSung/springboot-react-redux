import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import {Home, Navigation }from 'features/common';
import {UserAdd, UserDetail, UserList, UserLogin, UserModify, UserRemove} from 'features/user/index'
import { BrowserRouter as Router } from 'react-router-dom'
const App = () => {
  return (
    <div className="App">
      <Router>
      <Navigation/>
      <Switch>
        <Route exact path='/' component= {Home}/>
        <Redirect from='/home' to ={'/'}/>
        <Route exact path='/userAdd' component={UserAdd}/>
        <Route exact path='/userDetail' component={UserDetail}/>
        <Route exact path='/userList' component={UserList}/>
        <Route exact path='/userLogin' component={UserLogin}/>
        <Route exact path='/userModify' component={UserModify}/>
        <Route exact path='/userRemove' component={UserRemove}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;