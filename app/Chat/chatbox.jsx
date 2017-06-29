const React = require('react');

const Chatbox = ({ owner, ownerId, handleMessageSubmit, message, handleChange}) => (
 <div className="card-block col-md-6"> 
    <h4 className="card-title">Chat with {owner}</h4>
    <ul id="messages"></ul>
    <form className="chatform" onSubmit={handleMessageSubmit}>
      <input id="m" autocomplete="off" type="text"  value={message} onChange={handleChange.bind(ownerId, this)} />
      <button type="submit" value="Submit">Send</button>
    </form>
  </div>  
)
module.exports = Chatbox;