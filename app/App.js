var React = require('react');
var ReactDOM = require('react-dom');
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
var Search = require('./Search');



class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.state)
    return (
      <div style={{'height':'inner-height'}}>
      <Router>
      <div>
        <div>
          <div className="main-container row">
            <nav className="navbar mega-menu" role="navigation">
              <Link to="/" className="col-sm-1 col-sm-offset-2">
                HOME
              </Link>
              <Link to="/" className="col-sm-1 col-sm-offset-2">
                RESULTS
              </Link>
            </nav>
          </div>
        </div>
        <Switch>
          <Route path="/" component={Search}/>
        </Switch>
        </div>
      </Router>
      </div>
    )
  }
};


ReactDOM.render(<App/>,
  document.getElementById('App')
);