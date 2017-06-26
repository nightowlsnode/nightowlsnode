const React = require('react');
const controller = require('../server/controller.js');
const Item = require('../db/models/items.js');

const ItemEntry = ({ item }) => (
  <div className="card col-md-4 col-md-offset-2" style={{ float: 'none' }}>
    <img className="card-img-top img-thumbnail" src={item.image} alt={item.title} />
    <div className="card-block">
      <h4 className="card-title">{item.title}</h4>
      <p className="card-text">{item.itemDescription}</p>
      <button
        className="btn btn-primary"
        onClick={(e) => { controller.borrow(e); controller.updateBorrow(e); }}
      >Borrow</button>
    </div>
  </div>
);

module.exports = ItemEntry;
