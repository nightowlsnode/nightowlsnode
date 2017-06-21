// Bank component where users can view transaction history
// Will need to query some API. Potentially MVP+

/* eslint react/prop-types: 0 */

const React = require('react');

class Bank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillMount() {
  }
  render() {
    return (
      <div>
        <h2>Bank Stuff</h2>
      </div>
    );
  }
}

module.exports = Bank;
