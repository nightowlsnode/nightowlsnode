/* eslint react/prop-types: 0 */

const PublicProfile = require('./Profile/PublicProfile/PublicProfile.jsx');
const PrivateProfile = require('./Profile/Profile.jsx');

const React = require('react');

class ProfileChecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.id === Number(this.props.params.match.params.id)) {
      return (<PrivateProfile id={this.props.params.match.params.id} />);
    }
    return (<PublicProfile id={this.props.params.match.params.id} />);
  }
}

module.exports = ProfileChecker;
