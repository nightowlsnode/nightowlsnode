// Search Bar Component for Searching for items from the database
const React = require('react');


class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBar: '',
    };
  }

  handleSearchChange(event) {
    this.setState({
      searchBar: event.target.value,
    });
  }

  searchItems() {
    const searchString = this.state.searchBar;
    const queryStringUrl = `/search?item=${searchString}`;
    fetch(queryStringUrl)
      .then(res => res.json()).then((json) => {
        console.log(`response is ${JSON.stringify(json)}`);
      });
  }
  render() {
    return (
      <div>
        <input id="searchBar" placeholder="Search" onChange={this.handleSearchChange.bind(this)} />
        <button id="searchButton" onClick={this.searchItems.bind(this)}>Mr. Button</button>
      </div>
    );
  }
}
module.exports = Search;
