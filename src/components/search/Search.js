import React from 'react';
import './search.css';

class Search extends React.Component{
	render() {
		return (
			<section className="input__search">
				<input type="text" className="input__name" placeholder="Search pokémons by name" onChange = { this.props.changeInput }/>
			</section>
		);
	}
}

export default Search;
