const React = require('react');
const ItemEntry = require('./itementry.jsx');

const Results = (props) => (
  <div className="col-md-8 col-md-offset-2">
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="pull-right">
          <div className="btn-group">
            <button type="button" className="btn btn-success" data-target="all">Show All</button>
            <button type="button" className="btn btn-default" data-target="available">Show Available</button>
          </div>
        </div>
      </div>
    </div>
    <div className="table-container">
      <table className="table">
        <tbody>
          {(props.items.length > 0) ? props.items.map((item, idx) => <ItemEntry item={item} key={idx} />) 
            : null }
        </tbody>
      </table>
    </div>
  </div>
);

module.exports = Results;
