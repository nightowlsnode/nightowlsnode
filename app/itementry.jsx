const React = require('react');

const ItemEntry = ({ item }) => (
  <div className="card col-sm-4 col-md-offset-2" style={{ float: 'none'}}>
    <img className="card-img-top img-thumbnail" src={item.image} alt={item.title}/>
    <div className="card-block">
      <h4 className="card-title">{item.title}</h4>
      <p className="card-text">{item.itemDescription}</p>
      <a href="#" className="btn btn-primary">Borrow</a>
    </div>
  </div>
);

module.exports = ItemEntry;
