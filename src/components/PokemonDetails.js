import React from 'react';
import App from './../App';
import {Link, Route, Switch} from 'react-router-dom';

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
						<p className="pokemon__id">#{this.props.idDetails.toLocaleString('en-US', {minimumIntegerDigits: 2})}</p>
						<div className="pictures">
							<img className="picture front_default" src={this.props.imgFrontD} alt={this.props.nameDetails} />
							<img className="picture back_default" src={this.props.imgBackD} alt={this.props.nameDetails} />
							<img className="picture front_shiny" src={this.props.imgFrontS} alt={this.props.nameDetails} />
							<img className="picture back_shiny" src={this.props.imgBackS} alt={this.props.nameDetails} />
						</div>
						<p className="pokemon__name">{this.props.nameDetails}</p>
						<div className="pokemon__type">
							{this.props.attackDetails.map((type, i) =>
								<span className={`box box--${this.props.attackDetails[i].type.name.toLowerCase()}`} key={i}> {this.props.attackDetails[i].type.name} </span>
							)}
						</div>
						<div className="pokemon__abilities">
							<span className="abilities__title">Abilities:</span>
							{this.props.skillsDetails.map((ability, i) =>
								<span className="ability" key={i}>{this.props.skillsDetails[i].ability.name} </span>)}
						</div>
						<div className="pokemon__weight">
							<span className="weight__title">Weight:</span>
							<span className="height__detail">{this.props.weightDetails/10}</span>
							<span className="height__kg">kg</span>
						</div>
						<div className="pokemon__height">
							<span className="height__title">Height:</span>
							<span className="height__detail">{this.props.heightDetails/10}</span>
							<span className="height__m">m</span>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default PokemonDetails;
