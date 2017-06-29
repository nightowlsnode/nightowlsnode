// Conditionally rendering items based on availablility
// holds and displays the user rating attached to each item
// Item .distance is in meters. Converted to miles in line on this component;
const React = require('react');
const Rating = require('react-rating');
const Chatbox = require('../Chat/chatbox.jsx')

const ItemEntry = ({ item, handleBorrow, socket, messages, message, handleMessageSubmit, handleChange }) => (
 <div> 
  <div className="row">
    <div className="col-md-3">
      <img className="img-responsive" src={item.image} alt={item.title} />
    </div>
    <div className="card-block col-md-6">
      <h4 className="card-title">{item.title}</h4>
      <p className="card-text">{item.itemDescription}</p>
      {(item.distance) && <p className="card-text">
        <em>About {(item.distance * 0.0006214).toFixed(1)} miles from your location</em></p>}
      {(!item.borrower_id)
        ? <button className="btn btn-primary" onClick={() => handleBorrow(item.id)}>Borrow</button>
        : <button className="btn btn-primary disabled">Unavailable</button>
      } 
    </div>
  </div>
  <div className="row">
      <div className="col-md-3">
         <img
            className="img-responsive"
            src={item.owner.image}
            alt=""
          />
      </div>
        <Chatbox
          owner={item.owner.firstName}
          ownerID={item.owner.id}
          handleMessageSubmit= {handleMessageSubmit}
          message= {message}
          messages={messages}
          handleChange={handleChange}
         />
      <div>
        <Rating
          initialRate={item.owner.rating}
          readonly
          empty={<img src="assets/star-grey.png" className="icon" alt="C'mon Son" />}
          full={<img src="assets/star-yellow.png" className="icon" alt="C'mon Son" />}
        />
      </div>

  </div>


  </div>
);

module.exports = ItemEntry;
