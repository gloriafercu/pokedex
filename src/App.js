import React from 'react';
import PokemonList from './components/PokemonList';
import Search from './components/Search';
import Pokeball from './images/pokeball.svg';
import './main.css';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleOnChange = this.handleOnChange.bind(this);
		this.state = {
			pokemonArray: [],
			evolutionArray: [],
			valueInput: ''
		};
	}
	componentDidMount() {
		let totalPokemon = [];
		let evolutionPokemon = [];

		for (let i=2; i<= 3; i++) {
			fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
			.then(response => response.json())
			.then(json => {
				const pokemonObject = json;
				totalPokemon.push(pokemonObject);
				console.log('pokemonObject: ', pokemonObject);
				this.setState({
					pokemonArray: totalPokemon
				});
			});
			fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}/`)
			.then(response => response.json())
			.then(json => {
				const evolutionObject = json;
				evolutionPokemon.push(evolutionObject);
				console.log('evolutionObject: ', evolutionObject);
				this.setState({
					evolutionArray: evolutionPokemon.sort((a,b) => a.id-b.id)
				});
			})
		};
		console.log('pokemonArray: ', totalPokemon);
		console.log('evolutionArray: ', evolutionPokemon);
	}


	handleOnChange(e) {
		const valueToShow = e.target.value.toLowerCase();
		this.setState({
			valueInput: valueToShow
		});
	}



	printPokemons() {
		const listPokemons = this.state.pokemonArray.filter(item => item.name.toLowerCase().includes(this.state.valueInput)).sort((a,b) => a.id-b.id);
		const listEvolutions = this.state.evolutionArray.map(elem=>elem.evolves_from_species.name);

		console.log('listEvolutions', listEvolutions);

		return (
			<div>
				<PokemonList
					monster = {listPokemons}
					evolutions = {listEvolutions}
				/>

			</div>
		);
	}

	render() {
		return (
			<div className="App">

				<header className="App-header">
					<h1 className="App-title">Pokédex</h1>
					<img className="pokeball" src={Pokeball} alt="pokédex" />
				</header>

				<main className="wrapper">
					<Search changeInput = {this.handleOnChange}/>
					{ this.printPokemons() }
				</main>

			</div>
		);
	}
}

export default App;
