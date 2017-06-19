const React = require('react');

const ItemEntry = ({ item }) => (
  <tr>
    <td>
      <div className="media">
        <a href="#" className="pull-left">
          <img src={item.image} alt={item.title} className="media-photo img-thumbnail" height="50" width="50" />
        </a>
        <div className="media-body">
          <h4 className="title">{item.title}</h4>
          <p className="summary">{item.itemDescription}</p>
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

module.exports = ItemEntry;
