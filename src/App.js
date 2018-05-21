import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Views/Home'
import About from './Views/About';
import Article from './Views/Article';
import NotFound from './Views/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/index" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/article/:id" component={Article} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;


