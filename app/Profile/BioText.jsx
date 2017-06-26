/* eslint react/prop-types: 0 */

const React = require('react');
const Rating = require('react-rating');

const BioText = ({ fullName, email, bio, rating, city, state, zip }) => (
  <div>
    <p>Name: {fullName}</p>
    <p>Email: {email}</p>
    <p>Bio: {bio}</p>
    <p>Address: {city}, {state}, {zip}</p>
    <div> Rating: {<Rating
      initialRate={rating}
      readonly
      empty={<img src="assets/star-grey.png" className="icon" alt="" />}
      full={<img src="assets/star-yellow.png" className="icon" alt="" />}
    />}
    </div>
  </div>
);

module.exports = BioText;
