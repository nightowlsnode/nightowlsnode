// Profile Bio Component
// User can view  profile info but can't edit it

/* eslint react/prop-types: 0 */

const React = require('react');
const Rating = require('react-rating');

class PublicProfileBio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }
  componentWillMount() {
  }
  render() {
    // const Editing = this.state.editing ? null : <Editing />;
    return (
      <div>
        <span className="glyphicon glyphicon-cog" />
        <p>Name: {this.props.fullName}</p>
        <p>Email: {this.props.email}</p>
        <p>Bio: {this.props.bio}</p>
        <p>Address: {this.props.city}, {this.props.state}, {this.props.zip}</p>
        <div> Rating: {<Rating
          initialRate={this.props.rating}
          readonly
          empty={<img src="assets/star-grey.png" className="icon" alt="" />}
          full={<img src="assets/star-yellow.png" className="icon" alt="" />}
        />}
        </div>
      </div>
    );
  }
}

module.exports = PublicProfileBio;
