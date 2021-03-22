import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ArticleList from './pages/ArticleList/ArticleList';

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={ArticleList} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
