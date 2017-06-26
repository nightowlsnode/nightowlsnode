/* eslint react/prop-types: 0 */

import { withRouter } from 'react-router';
import ReviewSplash from './reviewSplash.jsx';

const React = require('react');

class userItemEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showReviewSplash: false };
    this.changeRoute = () => {
      this.props.history.push(`/profile/${this.props.borrowerId}/`);
      this.props.populateProfile(this.props.borrowerId);
      this.props.fetchUserItems();
      this.props.fetchBorrowedItems();
    };
    this.returnItem = this.returnItem.bind(this);
    this.toggleReviewSplash = this.toggleReviewSplash.bind(this);
    this.handleRatingClick = this.handleRatingClick.bind(this);
  }
  returnItem() {
    fetch(`/api/items/${this.props.itemId}`, {
      credentials: 'same-origin',
      method: 'PUT',
    })
      .then(() => this.props.fetchUserItems(this.props.ownerId))
      .catch(() => alert('Sorry, there was a problem fulfillng your request. Please try again'));
  }
  toggleReviewSplash() {
    const { showReviewSplash } = this.state;
    this.setState({ showReviewSplash: !showReviewSplash });
  }

  handleRatingClick(rating) {
    this.toggleReviewSplash();
    const data = { id: this.props.borrowerId, rating };
    fetch('/api/ratings/', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      credentials: 'same-origin',
      body: JSON.stringify(data),
    })
      . then(() => this.returnItem())
      .catch(err => console.log('error updating rating', err));
  }
  render() {
    const { showReviewSplash } = this.state;
    return (
      <tr>
        <td>
          <ReviewSplash
            showReviewSplash={showReviewSplash}
            handleRatingClick={this.handleRatingClick}
          />
        </td>
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
              <div>
                <p>Borrower: </p>
                <button onClick={this.changeRoute} className="btn-link">
                  {this.props.borrower}
                </button>
                <button className="btn btn-primary" onClick={this.toggleReviewSplash}>
                  Item Returned?
                </button>
              </div>
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
