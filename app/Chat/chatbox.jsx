const React = require('react');

const Chatbox = ({ owner, ownerId, handleMessageSubmit, message, messages, handleChange}) => (
 <div className="card-block col-md-6"> 
    <h4 className="card-title">Chat with {owner}</h4>
    <ul id="messages" className="list-group">
      {(messages.length > 0) && messages.map(message => (
        <li key={message.id} className="list-group-item">
          {message.text}
        </li>
      ))}
    </ul>
    <form className="chatform" onSubmit={handleMessageSubmit}>
      <input id="m" autocomplete="off" type="text"  value={message} onChange={handleChange} />
      <button type="submit" value="Submit">Send</button>
    </form>
  </div>  
)
module.exports = Chatbox;

