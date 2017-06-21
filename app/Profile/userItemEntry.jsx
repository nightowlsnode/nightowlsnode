/* eslint react/prop-types: 0 */

const React = require('react');

const userItemEntry = ({ image, title, description }) => (
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
      <a className="star">
        <i className="glyphicon glyphicon-star pull-right" />
      </a>
    </td>
  </tr>
);

module.exports = userItemEntry;
