/* eslint-env browser */
import {
  Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const React = require('react');
const ReactDOM = require('react-dom');
const Search = require('./Search/Search.jsx');
const Profile = require('./Profile/Profile.jsx');
const Login = require('./Login/Login.jsx');
const ProfileChecker = require('./profileChecker.jsx');


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false, profile: null };
    this.methods = {
      updateUser: (profile, loggedIn) => this.setState({ profile, loggedIn }),
      goTo: path => history.push(path),
      logout: (e) => {
        e.preventDefault();
        fetch('/logout').then(this.methods.updateUser(null, false))
          .then(this.methods.goTo('/'));
      },
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.loggedIn === true && this.state.loggedIn === false) {
      this.methods.goTo(`/profile/${nextState.profile.id}`);
    }
    return true;
  }
  render() {
    const ProfileCheckerRender = (props) => {
      const userId = this.state.profile ? this.state.profile.id : 0;
      return (<ProfileChecker id={userId} params={props} />); 
    }
    const LoginPage = this.state.loggedIn ? null : <Login methods={this.methods} />;
    const profileLink = this.state.profile ? `/profile/${this.state.profile.id}` : '/profile';
    return (
      <div>
        <Router history={history}>
          <div>
            <div>
              <div className="navbar-fixed-top navbar-color">
                <nav className="navbar-inner pull-right">
                  <Link to="/" className="btn">
                    HOME
                  </Link>
                  <Link to="/" className="btn">
                    RESULTS
                  </Link>
                  <Link to={profileLink} className="btn">
                    PROFILE
                  </Link>
                  <button
                    onClick={this.methods.logout}
                    className="btn"
                  >Logout</button>
                </nav>
              </div>
            </div>
            {LoginPage}
            <Switch>
              <Route path="/profile/:id" render={ProfileCheckerRender} />
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

exports.history = history;
