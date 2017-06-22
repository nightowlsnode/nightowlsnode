/* eslint react/prop-types: 0 */

import { withRouter } from 'react-router';

const React = require('react');

class userItemEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changeRoute = () => {
      this.props.history.push(`/profile/${this.props.borrowerId}/`);
      this.props.populateProfile(this.props.borrowerId);
      this.props.fetchUserItems();
      this.props.fetchBorrowedItems();
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
            { this.props.borrower &&
              <button onClick={this.changeRoute} className="pull-right">
                <p className="owner">  Borrower: {this.props.borrower}</p>
              </button>
            }
          </div>
        </td>
      </tr>
    );
  }
}
const userItemEntryWithRouter = withRouter(userItemEntry);
exports.userItemEntry = userItemEntry;
exports.userItemEntryWithRouter = userItemEntryWithRouter;

