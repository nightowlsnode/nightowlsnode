/*  global fetch:false  */
/* eslint react/prop-types: 0 */
//  layout
//  fields to be able to add stuff

const React = require('react');

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
  componentWillMount() {
    fetch(`http://localhost:3000/api/profile/${this.props.match.params.id}`)
      .then(profile => profile.json())
      .then(json => this.setState(json));
  }
  render() {
    return (
      <div className="container">
        <div className="col-lg-2 col-lg-offset-1">
          <img src={this.state.image} />
          {this.state.fullName}
          {this.state.email}
          {this.state.bio}
          {this.state.rating}
          {this.state.state}
          {this.state.city}
        </div>
        <div className="col-lg-3">
          <h2>Add Stuff</h2>
          <h2>Bank</h2>
        </div>
        <div className="col-lg-5">
          <h2>My Stuff</h2>
          <h2>Borrowed</h2>
        </div>
        <h1><span className="fa fa-sign-in" /> Profile</h1>
        <form action="/Profile" method="post">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" className="form-control" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" />
          </div>
          <button type="submit" className="btn btn-warning btn-lg">Profile</button>
        </form>
        <hr />
        <p>Need an account? <a href="/signup">Signup</a></p>
        <p>Or go <a href="/">home</a>.</p>
      </div>

    );
  }
}


module.exports = Profile;
