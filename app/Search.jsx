// Search Bar Component for Searching for items from the database
const React = require('react');
const Results = require('./Results.jsx');

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBar: '',
      searchResults: [],
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    this.setState({
      searchBar: event.target.value,
      searchResults: [],
    });
  }

  searchItems() {
    const searchString = this.state.searchBar;
    const queryStringUrl = `/search?item=${searchString}`;
    fetch(queryStringUrl)
      .then(res => res.json())
      .then(({ items }) => {
        this.setState({ searchResults: items });
      });
  }
  render() {
    const { searchResults } = this.state;
    return (
      <div>
        <div>
          <input
            id="searchBar"
            placeholder="Search"
            onChange={this.handleSearchChange}
          />
          <button id="searchButton" onClick={this.searchItems.bind(this)}>Mr. Button</button>
        </div>
        <Results items={searchResults} />
      </div>
    );
  }
}
module.exports = Search;
