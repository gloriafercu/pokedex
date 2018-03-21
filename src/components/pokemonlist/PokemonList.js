import React from 'react';
import PokemonCard from '../pokemoncard/PokemonCard';
import './pokemonlist.css';

class PokemonList extends React.Component{
	render() {
		return (
			<section className="pokedex">
				<ul className="pokemon__list">
					{ this.props.monster.map((list, index) =>
						<li className="pokemon__list--li" key={index}>
							<PokemonCard
								namePokemon = {list.name}
								idPokemon = {list.id}
								picture1 = {list.sprites.front_default}
								picture2 = {list.sprites.back_default}
								picture3 = {list.sprites.front_shiny}
								picture4 = {list.sprites.back_shiny}
								attack = {list.types}
								weightPokemon = {list.weight}
								heightPokemon = {list.height}
								skills = {list.abilities}
								evolutionPokemon= {list.evolutionName}
							/>
						</li>)
					}
				</ul>
			</section>
		);
	}
}

export default PokemonList;