const React = require('react');

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: '',
    };
    this.chooseLogin = () => {
    };
  }
  componentWillMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="container">
        <div className="col-sm-6 col-sm-offset-3">
          <h1><span className="fa fa-sign-in" /> Profile</h1>
          <form action="/Profile" method="post">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password" />
            </div>
            <button type="submit" className="btn btn-warning btn-lg">Profile</button>
          </form>
          <hr />
          <p>Need an account? <a href="/signup">Signup</a></p>
          <p>Or go <a href="/">home</a>.</p>
        </div>
      </div>

    );
  }
}

module.exports = Profile;
