import React, { Component } from 'react';
import "./Pokecard.css"

const img_src = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let skoli = (number) => (number <= 999 ? `00${number}`.slice(-3): number);
class Pokecard extends Component {
    render () {
        const props = this.props;
        let real_src = `${img_src}${skoli(props.id)}.png`;
        return(
            <div className = "Pokecard">
                <h1>{props.name}</h1>
                <div className="Pokecard_image">
                <img src = {real_src}/>
                </div>
                <div className="Pokecard_data">Type : {props.type}</div>
                <div className="Pokecard_data">EXP : {props.exp}</div>
            </div>
        )
    }
}

export default Pokecard;