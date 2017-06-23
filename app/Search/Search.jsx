// Search Bar Component for Searching for items from the database
const React = require('react');
const Results = require('./Results.jsx');
const SearchBar = require('./SearchBar.jsx');
const Map = require('./map.jsx');

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      zip: '',
      searchResults: [],
      searchResultsFiltered: [],
      location: null,
    };

    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleSearchInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleButtonClick(evt) {
    // Will sort the results list & map depending on button click
  }

  handleSearch() {
    const searchString = this.state.search;
    const zipString = this.state.zip;
    const queryStringUrl = `/search?item=${searchString}&zip=${zipString}`;
    fetch(queryStringUrl)
      .then(res => res.json())
      .then(({ location, items }) => {
        if (location) {
          items.sort((item1, item2) => item1.distance - item2.distance);
          this.setState({ location });
        }
        this.setState({ searchResults: items, searchResultsFiltered: items });
      });
  }
  render() {
    const { searchResultsFiltered, location } = this.state;
    return (
      <div className="container">
        <SearchBar
          handleSearchInputChange={this.handleSearchInputChange}
          handleSearch={this.handleSearch}
        />
        <section className="spacer" />
        <div className="col-md-8">
          <div className="row" />
          <div className="row">
            <Results
              searchResults={searchResultsFiltered}
              handleButtonClick={this.handleButtonClick}
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="row" />
          <Map searchResults={searchResultsFiltered} location={location} />
        </div>
      </div>
    );
  }
}
module.exports = Search;
