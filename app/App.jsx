/* eslint-env browser */
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const React = require('react');
const ReactDOM = require('react-dom');
const Search = require('./Search.jsx');
const Profile = require('./Profile/Profile.jsx');
const Login = require('./Login/Login.jsx');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false, profile: null };
    this.methods = {
      updateUser: (profile) => {
        this.setState({ profile, loggedIn: true });
      },
      goTo: (path) => {
        history.push(path);
      },
    };
  }
  render() {
    const LoginPage = this.state.loggedIn ? null : <Login methods={this.methods} />;
    const profileLink = this.state.profile ? `/profile/${this.state.profile.id}` : '/profile';
    return (
      <div style={{ height: 'inner-height' }}>
        <Router>
          <div>
            <div>
              <div className="main-container row">
                <nav className="navbar mega-menu col-sm-offset-1">
                  <Link to="/" className="btn btn-default btn-sm">
                    HOME
                  </Link>
                  <Link to="/" className="btn btn-default btn-sm">
                    RESULTS
                  </Link>
                  <Link to={profileLink} className="col-sm-offset-7 btn btn-default btn-sm">
                    PROFILE
                  </Link>
                  <button href="/logout" className="btn btn-default btn-sm">Logout</button>
                </nav>
              </div>
              {LoginPage}
            </div>
            <Switch>
              <Route path="/profile/:id" component={Profile} />
              <Route path="/profile" component={Profile} />
              <Route path="/" component={Search} />
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
