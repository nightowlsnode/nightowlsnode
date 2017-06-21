// login component
/* eslint react/prop-types: 0 */

const React = require('react');
const LoginForm = require('./LoginForm.jsx');
const SignupForm = require('./SignupForm.jsx');

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: null,
    };
    this.chooseSignup = () => this.setState({ form: 'Signup' });
    this.chooseLogin = () => this.setState({ form: 'Login' });
  }
  render() {
    let Form = null;
    if (this.state.form) {
      if (this.state.form === 'Login') {
        Form = <LoginForm update={this.props.update} />;
      } else {
        Form = <SignupForm update={this.props.update} />;
      }
    }
    return (
      <div className="container">
        <div className="jumbotron text-center">
          <h1>
            <span className="fa fa-lock" />
            Node Authentication
          </h1>
          <p>Feel Free to browse,</p>
          <p>but for the best experience please sign in:</p>

          <button
            className="btn btn-default"
            onClick={e => this.chooseLogin(e)}
          >
            Local Login
          </button>

          <button
            className="btn btn-default"
            onClick={e => this.chooseSignup(e)}
          >
            Local Signup
          </button>
        </div>
        {Form}
      </div>
    );
  }
}
module.exports = Login;
