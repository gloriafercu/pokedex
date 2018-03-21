import React from 'react';
import App from './../../app/App';
import {Link, Route, Switch} from 'react-router-dom';
import './pokemondetails.css';

class PokemonDetails extends React.Component{
	render() {
		return (
			<section className="pokemon__details">
				<div className="pokemon__details__background">
					<div className="pokemon__details__card">
						<Link className="link btn" to='/'>
							<div className="button--close"><span className="btn-x">X</span></div>
						</Link>
						<Switch>
							<Route exact path="/" component={App} />
						</Switch>

						<div className="info">
							<div className="cover">
								<img className="front_default" src={this.props.imgFrontD} alt={this.props.nameDetails} />
								<span className="details__id">#{this.props.idDetails.toLocaleString('en-US', {minimumIntegerDigits: 2})}</span>
							</div>

							<div className="picture">
								<img className=" back_default" src={this.props.imgBackD} alt={this.props.nameDetails} />
							</div>
							<div className="picture">
								<img className="front_shiny" src={this.props.imgFrontS} alt={this.props.nameDetails} />
							</div>
							<div className="picture">
								<img className="back_shiny" src={this.props.imgBackS} alt={this.props.nameDetails} />
							</div>
							<div className="info__details">
								<p className="pokemon__name__details">{this.props.nameDetails}</p>
								<div className="pokemon__type__details">
									{this.props.attackDetails.map((type, i) =>
										<span className={`box__details box--${this.props.attackDetails[i].type.name.toLowerCase()}`} key={i}> {this.props.attackDetails[i].type.name} </span>
									)}
								</div>
								<div className="info__card">
									<div className="pokemon__abilities">
										<span className="abilities__title">Abilities: </span>
										{this.props.skillsDetails.map((ability, i) =>
											<span className="ability" key={i}>{this.props.skillsDetails[i].ability.name} </span>)}
									</div>
									<div className="pokemon__weight">
										<span className="weight__title">Weight: </span>
										<span className="weight__detail">{this.props.weightDetails/10} kg</span>
									</div>
									<div className="pokemon__height">
										<span className="height__title">Height: </span>
										<span className="height__detail">
											{this.props.heightDetails/10} m
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default PokemonDetails;
