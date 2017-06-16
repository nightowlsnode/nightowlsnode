var React = require('react');

class Search extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			searchBar: ''
		}
	}

	handleSearchChange(event) {
   this.setState({
     searchBar: event.target.value
    })
  }

  searchItems() {
  	// console.log('Searching for items');
  	var searchString = this.state.searchBar;

  	console.log('searchString in search.js is: ' + searchString)
  	fetch('/items', {
  		method: "POST",
  		headers: {
  			"Content-type": "application/json"
  		},
  		// body: {string: searchString}
  		body: JSON.stringify({string: searchString})

  	})
  	.then(function(res){
  		// console.log(res.json())
  		return res.json()
  	}).then(function(json) {
  		console.log('response is ' + JSON.stringify(json))
  	})	
  }
	render() {
		// console.log('state in search is: ' + this.state.searchBar)
  	return (
  		<div>
  			<input id="searchBar" placeholder="Search" onChange={this.handleSearchChange.bind(this)}/>
  			<button id="searchButton" onClick={this.searchItems.bind(this)}>Mr. Button</button>
  		</div>
  	)
	}
}
module.exports = Search