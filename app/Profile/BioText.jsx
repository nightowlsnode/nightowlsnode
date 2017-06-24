/* eslint react/prop-types: 0 */

const React = require('react');

const BioText = ({ fullName, email, bio, rating, city, state, zip }) => (
  <div>
    <p>Name: {fullName}</p>
    <p>Email: {email}</p>
    <p>Bio: {bio}</p>
    <p>Address: {city}, {state}, {zip}</p>
    <p>Rating: {rating}</p>
  </div>
);

module.exports = BioText;
