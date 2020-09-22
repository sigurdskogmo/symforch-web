import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ROUTES from './ROUTES';

// Components
import TopBar from './components/TopBar';

// Views
import HomeView from './views/HomeView';
import ConcertView from './views/ConcertView';
import AboutView from './views/AboutView';
import NotFound from './views/NotFound';

const App = () => {  

  return (
    <div className="App">
      <TopBar/>
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME} component={HomeView} />
          <Route exact path={ROUTES.CONCERTS} component={ConcertView} />
          <Route exact path={ROUTES.ABOUT} component={AboutView} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
