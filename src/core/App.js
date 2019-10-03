import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostsContainer from '../components/Posts';
import PostDetailsContainer from '../components/PostDetails/PostDetailsContainer';
function App() {
  return (
    <BrowserRouter basename='/'>
        <Switch>
            <Route exact path='/' component={PostsContainer}/>
            <Route exact path='/:id' component={PostDetailsContainer}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
