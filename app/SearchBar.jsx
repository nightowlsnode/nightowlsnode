const React = require('react');

const SearchBar = ({ handleSearchInputChange, handleSearch }) => (

  <div className="row">
    <div className="input-group col-md-5">
      <input
        type="text"
        name="search"
        className="form-control"
        placeholder="Search for item..."
        onChange={handleSearchInputChange}
      />
    </div>
    <div className="input-group col-md-2">
      <input
        type="text"
        name="zip"
        className="form-control"
        placeholder="Zip Code"
        onChange={handleSearchInputChange}
      />
    </div>
    <span className="input-group-btn">
      <button
        className="btn btn-danger"
        type="button"
        onClick={handleSearch}
      >Mr.Button
      </button>
    </span>
  </div>


);

module.exports = SearchBar;

