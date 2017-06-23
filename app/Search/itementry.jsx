const React = require('react');

const ItemEntry = ({ item }) => (
  <div className="row">
    <img className="img-responsive col-md-3" src={item.image} alt={item.title} />
    <div className="card-block">
      <h4 className="card-title">{item.title}</h4>
      <p className="card-text">{item.itemDescription}</p>
      {(item.distance) && <p className="card-text">
        <em>About {(item.distance * 0.0006214).toFixed(1)} miles from your location</em></p>}
      {(!item.borrower_id) ? <button className="btn btn-primary">Borrow</button>
        : <button className="btn btn-primary disabled">Unavailable</button>}
    </div>
  </div>
);

module.exports = ItemEntry;
