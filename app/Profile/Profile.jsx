/*  global fetch:false  */
/* eslint react/prop-types: 0 */
// User Profile Page
// TODO: Need to refactor this.state to props
//  fields to be able to add stuff

const React = require('react');
const ProfileBio = require('./profileBio.jsx');
const AddStuff = require('./addStuff.jsx');
const Bank = require('./bank.jsx');
const ProfileItemList = require('./profileItemList.jsx');


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      fbId: null,
      fbToken: null,
      image: null,
      name: null,
      email: null,
      password: null,
      street: null,
      city: null,
      state: null,
      zip: null,
      bio: null,
      rating: null,
      ratingCount: null,
      createdAt: null,
      updatedAt: null,
    };
    this.chooseLogin = () => {
    };
  }
  componentDidMount() {
    fetch(`http://localhost:3000/api/profile/${this.props.match.params.id}`)
      .then(profile => profile.json())
      .then(json => this.setState(json));
  }
  render() {
    return (
      <div className="container">
        <div className="col-lg-2 col-lg-offset-1">
          <img
            className="img-responsive"
            src={this.state.image}
            alt=""
          />
          <ProfileBio
            fullName={this.state.fullName}
            email={this.state.email}
            bio={this.state.bio}
            rating={this.state.rating}
            city={this.state.city}
            state={this.state.state}
            zip={this.state.zip}
          />
        </div>
        <div className="col-lg-3">
          <AddStuff userId={this.state.id} />
          <Bank userId={this.state.id} />
        </div>
        <div className="col-lg-5">
          {this.state.id && <ProfileItemList userId={this.state.id} />}
        </div>
      </div>

    );
  }
}


module.exports = Profile;
