const React = require('react');

const ItemEntry = ({ item }) => (
  <div className="row">
    <img className="img-responsive col-md-3" src={item.image} alt={item.title}/>
    <div className="card-block">
      <h4 className="card-title">{item.title}</h4>
      <p className="card-text">{item.itemDescription}</p>
      <a href="#" className="btn btn-primary">Borrow</a>
    </div>
  </div>
);

module.exports = ItemEntry;
