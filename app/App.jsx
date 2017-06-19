/* eslint-env browser */
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

const React = require('react');
const ReactDOM = require('react-dom');
const Search = require('./Search.jsx');
const Profile = require('./Profile.jsx');
const Login = require('./Login/Login.jsx');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
  }
  render() {
    const LoginPage = this.state.loggedIn ? null : <Login />;
    return (
      <div style={{ height: 'inner-height' }}>
        <Router>
          <div>
            <div>
              <div className="main-container row">
                <nav className="navbar mega-menu">
                  <Link to="/" className="col-sm-1 col-sm-offset-1">
                    HOME
                  </Link>
                  <Link to="/" className="col-sm-1 col-sm-offset-1">
                    RESULTS
                  </Link>
                  <Link to="/profile" className="col-sm-offset-6 col-sm-1">
                    PROFILE
                  </Link>
                </nav>
              </div>
              {LoginPage}
            </div>
            <Switch>
              <Route path="/" component={Search} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('App'),
);
