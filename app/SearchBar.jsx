const React = require('react');

const SearchBar = ({ handleSearchInputChange, handleSearch }) => (

  <div className="row">
    <div className="input-group col-md-5">
      <input
        type="text"
        className="form-control"
        placeholder="Search for item..."
        onChange={handleSearchInputChange}
      />
    </div>
    <div className="input-group col-md-2">
      <input
        type="text"
        className="form-control"
        placeholder="Zip Code"
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

