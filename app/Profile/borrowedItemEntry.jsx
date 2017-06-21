/* eslint react/prop-types: 0 */

const React = require('react');

const history = require('../App.jsx');

const goTo = (path) => {
  console.log('clicked')
  history.history.push(path);
  console.log(history.history);
};

const BorrowedItemEntry = ({ image, title, description, owner, ownerId }) => (
  <tr>
    <td>
      <div className="media">
        <a href="#" className="pull-left">
          <img
            src={image}
            alt={title}
            className="media-photo img-thumbnail"
            height="50"
            width="50"
          />
        </a>
        <div className="media-body">
          <h4 className="title">{title}</h4>
          <p className="summary">{description}</p>
        </div>
      </div>
    </td>
    <td>
      <div>
        <button onClick={()=> goTo(`/profile/${ownerId}`)} className="pull-right">
          <p className="owner">  Owner: {owner}</p>
        </button>
      </div>
    </td>
  </tr>
);

module.exports = BorrowedItemEntry;
