import React from 'react';
import PokemonsList from './components/PokemonsList';
import './main.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemons: []
		};
	}

	componentDidMount() {
		fetch('https://pokeapi.co/api/v2/pokemon/25/')
		.then(response => response.json())
		.then(json => {
			this.setState({
				pokemons: json
			});
			console.log(json);
		});
	}

	printPokemons() {
		const listPokemons = this.state.pokemons;
		// const listRepos = this.state.repositories.filter(item => item.language.toLowerCase().includes(this.state.select));
		// const listReposRefilter = listRepos.filter(item => item.name.toLowerCase().includes(this.state.input));

		return (
			<PokemonsList group = {listPokemons} />

		);
	}

	render() {
		return (<div className="App">
			<header className="App-header">
				<h1 className="App-title">Pokémon Pokédex</h1>
			</header>
			<div className="input__search">
				<input type="text" className="input__name" placeholder="Search pokémons by name"/>
			</div>

			{ this.printPokemons () }

		</div>);
	}
}

export default App;
