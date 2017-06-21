const React = require('react');
const ItemEntry = require('./itementry.jsx');

const Results = props => (
  <div className="row">
    <div className="col-lg-8">
      <div className="pull-right">
        <div className="btn-group">
          <button type="button" className="btn btn-success" data-target="all">Show All</button>
          <button
            type="button"
            className="btn btn-default"
            data-target="available"
          >Show Available
          </button>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-8">
        {(props.searchResults.length > 0) && props.searchResults.map((item, idx) => (<ItemEntry
          item={item}
          key={idx}
        />))}
      </div>
    </div>
  </div>
);

module.exports = Results;
