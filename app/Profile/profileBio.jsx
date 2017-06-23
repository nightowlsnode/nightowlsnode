// Profile Bio Component
// User can view  profile info and edit info by clicking cog button
// Need to create and conditionally render editable state.

/* eslint react/prop-types: 0 */

const React = require('react');
const BioText = require('./BioText.jsx');
const BioForm = require('./BioForm.jsx');

class ProfileBio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }
  componentWillMount() {
  }
  toggleEditing() {
    this.setState({
      editing: true,
    });
  }
  render() {
    // const Editing = this.state.editing ? null : <Editing />;
    const Info = this.state.editing ?
      (<BioForm
        firstName={this.props.firstName}
        lastName={this.props.lastName}
        email={this.props.email}
        bio={this.props.bio}
        rating={this.props.rating}
        city={this.props.city}
        state={this.props.state}
        zip={this.props.zip}
        userId={this.props.userId}
      />) :
      (<BioText
        fullName={this.props.fullName}
        email={this.props.email}
        bio={this.props.bio}
        rating={this.props.rating}
        city={this.props.city}
        state={this.props.state}
        zip={this.props.zip}
      />);
    return (
      <div>
        <span className="glyphicon glyphicon-cog" role="button" onClick={this.toggleEditing.bind(this)} />
        {Info}
      </div>
    );
  }
}

module.exports = ProfileBio;
