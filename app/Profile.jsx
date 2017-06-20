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
        <div className="col-sm-6 col-sm-offset-3">
          <h1><span className="fa fa-sign-in" /> Profile</h1>
          <form action="/Profile" method="post">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" className="form-control" name="email" />
            </div>
            <div className="form-group">
              <h1>THIS IS THE PROFILE PAGE</h1>
              <h2>Name: {this.state.name}</h2>
              <h2>Email: {this.state.email}</h2>
              {this.state.bio}
              {this.state.rating}
              {this.state.state}
              {this.state.city}
              {this.state.image}
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" name="password" />
            </div>
            <button type="submit" className="btn btn-warning btn-lg">Profile</button>
          </form>
          <hr />
          <p>Need an account? <a href="/signup">Signup</a></p>
          <p>Or go <a href="/">home</a>.</p>
        </div>
      </div>

    );
  }
}


module.exports = Profile;
