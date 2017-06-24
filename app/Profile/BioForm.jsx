/* eslint react/prop-types: 0 */

const React = require('react');

const BioForm = ({ firstName, lastName, email, bio, city, state, zip, userId }) => (
  <div className="sub-component">
    <h2>Update Profile</h2>
    <form action="/api/updateUser" method="POST" >
      <label htmlFor="title">First Name</label>
      <input
        constentEditable="true"
        type="text"
        className="form-control"
        name="firstName"
        defaultValue={firstName}
        ref={(input) => { this.firstName = input; }}
      />
      <label htmlFor="title">Last Name</label>
      <input
        type="text"
        className="form-control"
        name="lastName"
        defaultValue={lastName}
        ref={(input) => { this.lastName = input; }}
      />
      <label htmlFor="title">email</label>
      <input
        type="text"
        className="form-control"
        name="email"
        defaultValue={email}
        ref={(input) => { this.email = input; }}
      />
      <label htmlFor="title">Bio</label>
      <input
        type="text"
        className="form-control"
        name="bio"
        defaultValue={bio}
        ref={(input) => { this.bio = input; }}
      />
      <label htmlFor="title">City</label>
      <input
        type="text"
        className="form-control"
        name="city"
        defaultValue={city}
        ref={(input) => { this.city = input; }}
      />
      <label htmlFor="title">State</label>
      <input
        type="text"
        className="form-control"
        name="state"
        defaultValue={state}
        ref={(input) => { this.state = input; }}
      />
      <label htmlFor="title">Zip Code</label>
      <input
        type="text"
        className="form-control"
        name="zip"
        defaultValue={zip}
        ref={(input) => { this.zip = input; }}
      />
      {userId && <input type="hidden" className="form-control" value={userId} name="user_id" />}
      <button type="submit" className="btn btn-warning btn-md">Update Profile</button>
    </form>
  </div>
);

module.exports = BioForm;
