import React, { Component } from 'react';
import "./Pokecard.css";

const imgg = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number);
class Pokecard extends Component {
    render() {
        const props = this.props;
        let src_img = `${imgg}${padToThree(props.id)}.png`
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{props.name}</h1>
                <img src ={src_img}/>
                <div className="Pokecard-data">Type : {props.type}</div>
                <div className="Pokecard-data">Exp : {props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;