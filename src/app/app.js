import React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import './app.scss';
import ErrorBoundary from '../components/errorboundary/errorboundary.component';
import Header from '../components/header/header.component';
import Main from '../components/main/main.component';

const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <Router history={history}>
          <header className="header">
            <Header history={history} />
          </header>
          <div className="main">
            <Main history={history} />
          </div>
        </Router>
      </ErrorBoundary>
    );
  }
}

export default App;
