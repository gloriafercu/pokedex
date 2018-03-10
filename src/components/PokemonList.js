import React from 'react';
import PokemonCard from './PokemonCard';

class PokemonList extends React.Component{
	render() {
		return (

			<ul className="pokemon__list">
				{ this.props.monster.map((list, index) =>
					<li className="pokemon__list--li" key = {index}>
						<PokemonCard
							namePokemon = {list.name}
							idPokemon = {list.id}
							picture = {list.sprites.front_default}
							attack = {list.types}
						/>

					</li>)
				}
			</ul>
		);
	}
}

export default PokemonList;
