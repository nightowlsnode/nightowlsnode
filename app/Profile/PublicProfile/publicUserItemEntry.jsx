/* eslint react/prop-types: 0 */


const React = require('react');

class PublicUserItemEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('borrower is ', this.props.borrowed);
    return (
      <tr>
        <td>
          <div className="media">
            <a href="#" className="pull-left">
              <img
                src={this.props.image}
                alt={this.props.title}
                className="media-photo img-thumbnail"
                height="50"
                width="50"
              />
            </a>
            <div className="media-body">
              <h4 className="title">{this.props.title}</h4>
              <p className="summary">{this.props.description}</p>
            </div>
          </div>
        </td>
        <td>
          <div>
            {this.props.borrowed ? <div>Borrowed</div> : <div>Available</div>}
          </div>
        </td>
      </tr>
    );
  }
}

module.exports = PublicUserItemEntry;
