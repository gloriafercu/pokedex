import React from 'react';
import Pokeball from './../../images/pokeball.svg';
import './header.css';

class Header extends React.Component{
	render() {
		return (
			<header className="App-header">
				<h1 className="App-title">Pokédex</h1>
				<img className="pokeball" src={Pokeball} alt="pokédex" />
			</header>
		);
	}
}

export default Header;
