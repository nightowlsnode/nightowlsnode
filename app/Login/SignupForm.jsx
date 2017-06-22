/*  global fetch:false  */
/* eslint react/prop-types: 0 */
// Popup form for signing up with email
const React = require('react');
const statesList = require('../lib/states.js');

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { statesList };
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
        city: this.city.value,
        street: this.address.value,
        zip: this.zip.value,
        state: this.addState.value,
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
          this.props.methods.updateUser(resp.profile, true);
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
            <div className="row nomargin">
              <div className="col-sm-6">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  ref={(input) => { this.firstName = input; }}
                />
              </div>
              <div className="col-sm-6">
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
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                className="form-control"
                ref={(input) => { this.address = input; }}
              />
            </div>
            <div className="row nomargin">
              <div className="col-sm-6">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  name="city"
                  className="form-control"
                  ref={(input) => { this.city = input; }}
                />
              </div>
              <div className="col-sm-2">
                <label htmlFor="addState">State</label>
                <select
                  name="addState"
                  className="form-control"
                  ref={(input) => { this.addState = input; }}
                >
                  {this.state.statesList.map(state => (
                    <option key={state.abbrev}>{state.abbrev}</option>
                  ))}
                </select>
              </div>
              <div className="col-sm-2">
                <label htmlFor="zip">Zipcode</label>
                <input
                  type="text"
                  name="zip"
                  className="form-control"
                  ref={(input) => { this.zip = input; }}
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
            <button type="submit" className="btn">Signup</button>
          </form>
          <hr />
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    );
  }
}

module.exports = SignupForm;
