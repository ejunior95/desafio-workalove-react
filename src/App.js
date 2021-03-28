import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '@/pages/home';
import ChatPage from '@/pages/chat';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
         <HomePage/>
        </Route>
        <Route path="/home"> 
         <HomePage/>
        </Route>
        <Route path="/chat"> 
         <ChatPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
