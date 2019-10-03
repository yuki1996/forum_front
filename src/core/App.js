import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostsContainer from "../components/Posts";
function App() {
  return (
    <BrowserRouter basename="/">
        <Switch>
            <Route exact path="/" component={PostsContainer}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
