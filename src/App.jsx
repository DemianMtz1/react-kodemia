import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import { Exercises } from './screens/Exercises';
import { Login } from './components/Login';
import Home from './screens/Home';
import { AddPost } from './screens/AddPost';
import { PostDetails } from './screens/PostDetails';



class App extends Component {
  render() {

    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/exercises">
              <Exercises />
            </Route>
            <Route exact path="/create-post">
              <AddPost />
            </Route>
            <Route exact path="/post/:id">
              <PostDetails />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
