import React from 'react'
import './main.css';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			pokemonArray: [],
			pokemonId: [],
			pokemonImg: [],
			pokemonName: [],
			pokemonType: []
		};
	}

	const paco = (id ) => {
		let pokemonArray = [];

	  for (let i = 1; i <= 3; i++) {
	    let url = `https://pokeapi.co/api/v2/pokemon/${id}`

	    fetch(url)
	      .then(res => res.json())
	      .then(json =>
					const pokemonObject = json;
					pokemonArray.push(pokemonObject);
					console.log('Este es' + pokemonObject);

					this.setState({
						pokemonArray: pokemonArray,
						pokemonId: json.id,
						pokemonImg: json.sprites.front_default,
						pokemonName: json.name,
						pokemonType: json.types[0].type.name
					});
				};
			}



// 	getPokemons(i) {
// 		fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
// 		.then(response => response.json())
// 		.then(json => {
// 			let pokemonArray = [];
// 			for (let i=1; i<= 3 ; i++) {
// 			const pokemonObject = json;
// 			pokemonArray.push(pokemonObject);
// 			console.log('Este es' + pokemonObject);
//
// 			this.setState({
// 				pokemonArray: pokemonArray,
// 				pokemonId: json.id,
// 				pokemonImg: json.sprites.front_default,
// 				pokemonName: json.name,
// 				pokemonType: json.types[0].type.name
// 			});
// 		});
// 	};
// }


	// componentDidMount() {
	// 	let pokemonArray = [];
	// 	for (let i=1; i<= 3 ; i++) {
	// 		fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
	// 		.then(response => response.json())
	// 		.then(json => {
	//
	// 			const pokemonObject = json;
	// 			pokemonArray.push(pokemonObject);
	// 			console.log(pokemonArray);
	//
	//
	//
	// 			this.setState({
	// 				pokemonArray: pokemonArray,
	// 				pokemonId: json.id,
	// 				pokemonImg: json.sprites.front_default,
	// 				pokemonName: json.name,
	// 				pokemonType: json.types[0].type.name
	// 			});
	// 		});
	// 	};
	// }





	printPokemons() {
		return (
			<ul className="pokemon__list">

				<li className="pokemon__list--li">
					<div className="pokemon__card">
						<p className="pokemon__name">{this.state.pokemonName}</p>
						<p className="pokemon__id">{this.state.pokemonId}</p>
						<img src={this.state.pokemonImg} alt="pokemon"/>
						<p className="pokemon__type">{this.state.pokemonType}</p>
					</div>
				</li>
			</ul>
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

			{ this.printPokemons() }

		</div>);
	}
}

export default App;
