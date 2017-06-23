/* eslint react/prop-types: 0 */

import { withRouter } from 'react-router';

const React = require('react');

class BorrowedItemEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changeRoute = () => {
      this.props.history.push(`/profile/${this.props.ownerId}/`);
      this.props.populateProfile(this.props.ownerId);
    };
  }
  render() {
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
            <button onClick={this.changeRoute} className="pull-right">
              <p className="owner">  Owner: {this.props.owner}</p>
            </button>
          </div>
        </td>
      </tr>
    );
  }
}
const BorrowedItemEntryWithRouter = withRouter(BorrowedItemEntry);
exports.BorrowedItemEntry = BorrowedItemEntry;
exports.BorrowedItemEntryWithRouter = BorrowedItemEntryWithRouter;
