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
    this.loginOptions = () => (<div>
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
    </div>);
  }
  render() {
    let Form = null;
    if (this.state.form) {
      if (this.state.form === 'Login') {
        Form = <LoginForm methods={this.props.methods} chooseSignup={this.chooseSignup} />;
      } else {
        Form = <SignupForm methods={this.props.methods} chooseLogin={this.chooseLogin} />;
      }
    } else {
      Form = this.loginOptions();
    }
    return (
      <div className="card-container">
        <div className="card text-left">
          {Form}
        </div>
      </div>
    );
  }
}
module.exports = Login;
