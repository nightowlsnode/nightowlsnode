const React = require('react');
const ItemEntry = require('./itementry.jsx');

const Results = props => (
  <div className="sub-component">
    <div className="row">
      <div className="col-md-offset-3">
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
      <div>
        {(props.searchResults.length > 0) && props.searchResults.map((item, idx) => (<div style={{ padding: '0px 10px' }}>
          <section className="spacer" />
          <ItemEntry
            item={item}
            key={idx}
          />
        </div>))}
      </div>
    </div>
  </div>
);

module.exports = Results;
