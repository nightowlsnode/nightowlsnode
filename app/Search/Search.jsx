// Search Bar Component for Searching for items from the database
const React = require('react');
const Results = require('./Results.jsx');
const SearchBar = require('./SearchBar.jsx');
const Map = require('./map.jsx');

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchBar: '',
      searchResults: [],
    };
    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearchInputChange(event) {
    this.setState({
      searchBar: event.target.value,
    });
  }

  handleSearch() {
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
      <div className="container">
        <div className="col-md-8">
          <div className="row">
            <SearchBar
              handleSearchInputChange={this.handleSearchInputChange}
              handleSearch={this.handleSearch}
            />
          </div>
          <div className="row">
            <Results searchResults={searchResults} />
          </div>
        </div>
        <div className="col-md-4">
          <Map searchResults={searchResults} />
        </div>
      </div>
    );
  }
}
module.exports = Search;
