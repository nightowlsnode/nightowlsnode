/*  global fetch:false  */
/* eslint react/prop-types: 0 */
// Popup form for signing up with email
const React = require('react');

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: '',
    };
    this.clearField = () => {
      this.firstName.value = '';
      this.lastName.value = '';
      this.email.value = '';
      this.password.value = '';
    };
    this.fieldSubmit = (e) => {
      e.preventDefault();
      const info = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        email: this.email.value,
        password: this.password.value,
      };
      fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(info),
      })
        .then(resp => resp.json())
        .then((resp) => {
          this.props.methods.updateUser(resp.profile);
        });
      this.clearField();
    };
  }
  render() {
    return (
      <div className="container">
        <div className="col-sm-6 col-sm-offset-3">
          <h1><span className="fa fa-sign-in" /> Signup</h1>
          <form onSubmit={e => this.fieldSubmit(e)} >
            <div className="row">
              <div className="form-group col-sm-6">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  ref={(input) => { this.firstName = input; }}
                />
              </div>
              <div className="form-group col-sm-6">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  ref={(input) => { this.lastName = input; }}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="form-control"
                ref={(input) => { this.email = input; }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                name="password"
                className="form-control"
                ref={(input) => { this.password = input; }}
              />
            </div>
            <button type="submit" className="btn btn-warning btn-lg">Signup</button>
          </form>
          <hr />
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    );
  }
}

module.exports = SignupForm;
