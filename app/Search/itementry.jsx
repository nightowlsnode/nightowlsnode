// Conditionally rendering items based on availablility
// holds and displays the user rating attached to each item
// Item .distance is in meters. Converted to miles in line on this component;
const React = require('react');
const Rating = require('react-rating');
const Chatbox = require('../Chat/chatbox.jsx')

class ItemEntry extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      message: '',
      messages: [],
      ownerId: this.props.item.owner.id
    }
  this.handleMessageSubmit = this.props.handleMessageSubmit.bind(this);
  this.handleChange = this.props.handleChange.bind(this);
  }

  componentDidMount() {
    return fetch(`/messages/${this.props.userId}/${this.state.ownerId}`)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("responseJson ", responseJson);
        this.setState({messages: responseJson});
      })
      .catch((error) => {
        console.error(error);
      });

    socket.on(`server:event`, message => {
      fetch('/messages')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("responseJson ", responseJson);
        this.setState({messages: responseJson});
      })
      .catch((error) => {
        console.error(error);
      })
    })
  }  
  
  render(){
   return ( 
    <div> 
      <div className="row">
        <div className="col-md-3">
          <img className="img-responsive" src={this.props.item.image} alt={this.props.item.title} />
        </div>
        <div className="card-block col-md-6">
          <h4 className="card-title">{this.props.item.title}</h4>
          <p className="card-text">{this.props.item.itemDescription}</p>
          {(this.props.item.distance) && <p className="card-text">
            <em>About {(this.props.item.distance * 0.0006214).toFixed(1)} miles from your location</em></p>}
          {(!this.props.item.borrower_id)
            ? <button className="btn btn-primary" onClick={() => handleBorrow(this.props.item.id)}>Borrow</button>
            : <button className="btn btn-primary disabled">Unavailable</button>
          } 
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
           <img
              className="img-responsive"
              src={this.props.item.owner.image}
              alt=""
            />
        </div>
        <Chatbox
          owner={this.props.item.owner.firstName}
          ownerId={this.props.item.owner.id}
          handleMessageSubmit= {this.handleMessageSubmit}
          message= {this.state.message}
          messages={this.state.messages}
          handleChange={this.handleChange}
        />
        <div>
          <Rating
            initialRate={this.props.item.owner.rating}
            readonly
            empty={<img src="assets/star-grey.png" className="icon" alt="C'mon Son" />}
            full={<img src="assets/star-yellow.png" className="icon" alt="C'mon Son" />}
          />
        </div>
      </div>
    </div>
   ) 
  }
}  


module.exports = ItemEntry;
