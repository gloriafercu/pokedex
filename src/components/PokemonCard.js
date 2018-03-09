import React from 'react';

class PokemonCard extends React.Component{
	render() {
		return (
			<div className="pokemon__card">
				{/* <p className="pokemon__img">{this.props.picture}</p>
					<p className="pokemon__id">{this.props.number}</p>
				<p className="pokemon__name">{this.props.name}</p> */}
				<p className="pokemon__type">{this.props.type}</p>
			</div>
		);
	}
}

 export default PokemonCard;
