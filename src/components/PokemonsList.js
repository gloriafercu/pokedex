import React from 'react';
import PokemonCard from './PokemonCard';

class PokemonsList extends React.Component{
	render() {
		return (
			<ul className="pokemon__list">
				{ this.props.group.map((list, index)=>
					<li className="pokemon__list--li" key = {index}>
						<PokemonCard

							type = {list.types[1].name}
						/>
					</li>)
				}
			</ul>
		);
	}
}

export default PokemonsList;
