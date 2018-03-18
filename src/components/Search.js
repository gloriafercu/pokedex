import React from 'react';

class Search extends React.Component {
	render() {
		return (
			<div className="input__search">
				<input type="text" className="input__name" placeholder="Search pokémons by name" onChange = { this.props.changeInput }/>
			</div>
		);
	}
}

export default Search;
