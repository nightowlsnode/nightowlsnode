// Popup form for signing up with email
const React = require('react');

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: '',
    };
    this.signupUser = (e) => {
      console.log('this.signupUser is running', e)
    };
  }
  render() {
    return (
      <div className="container">
        <div className="col-sm-6 col-sm-offset-3">
          <h1><span className="fa fa-sign-in" /> Signup</h1>
          <form action="/profile" >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password" />
            </div>
            <button type="submit" className="btn btn-warning btn-lg">Signup</button>
          </form>
          <hr />
          <p>Already have an account? <a href="/login">Login</a></p>
          <p>Or go <a href="/">home</a>.</p>
        </div>
      </div>
    );
  }
}

module.exports = Login;
