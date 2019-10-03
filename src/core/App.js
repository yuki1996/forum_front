import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostsContainer from '../components/Posts';
import PostDetailsContainer from '../components/PostDetails/PostDetailsContainer';
import UserDetailsContainer from '../components/UserDetails';
import NavigationBar from '../common/NavigationBar/NavigationBarContainer';

function App() {
  return (
    <BrowserRouter basename='/'>
        <NavigationBar/>
        <Switch>
            <Route exact path='/' component={PostsContainer}/>
            <Route exact path='/:id' component={PostDetailsContainer}/>
            <Route exact path='/users/:id' component={UserDetailsContainer}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
