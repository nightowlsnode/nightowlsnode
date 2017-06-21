// Profile Item List Page
// Has Tabs for UserItems and Borrowed Items.
// Before it mounts it fetches Items table and adds user and
// borrowed items to state.
// TODO: create components for itemListEntries

/*  global fetch:false  */
/* eslint react/prop-types: 0 */

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const React = require('react');

class ProfileItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userItems: null,
      borrowedItems: null,
    };
  }

  componentWillMount() {
    this.fetchUserItems();
    this.fetchBorrowedItems();
  }
  fetchUserItems() {
    fetch(`http://localhost:3000/api/userItems/${this.props.userId}`)
      .then(items => items.json())
      .then(json => this.setState({
        userItems: json,
      }));
  }
  fetchBorrowedItems() {
    fetch(`http://localhost:3000/api/borrowedItems/${this.props.userId}`)
      .then(items => items.json())
      .then(json => this.setState({
        borrowedItems: json,
      }));
  }
  render() {
    return (
      <Tabs>
        <TabList>
          <Tab>My Stuff</Tab>
          <Tab>Borrowed</Tab>
        </TabList>
        <TabPanel>
          {this.state.userItems && this.state.userItems.map(item =>
            (<div>
              <p>{item.title}</p>
              <p>{item.description}</p>
            </div>),
          )}
        </TabPanel>
        <TabPanel>
          {this.state.borrowedItems && this.state.borrowedItems.map(item =>
            (<div>
              <p>{item.title}</p>
              <p>{item.description}</p>
            </div>),
          )}
        </TabPanel>
      </Tabs>
    );
  }
}

module.exports = ProfileItemList;
