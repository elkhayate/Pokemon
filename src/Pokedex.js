import React, { Component } from 'react';
import Pokecard from "./Pokecard";
import "./Pokedex.css"

class Pokedex extends Component {
    
    render() {
        const props = this.props;
        let title;
        if(props.iswinner) {
            title = <h1 className = "result_winner">This is the winner</h1>
        } else {
            title = <h1 className = "result_loser">This is the loser</h1>
        }
        return(
            <div>
                {title}
                <h4>Total EXP : {props.exp}</h4>
                
            <div className="Pokedex">
                {props.pokemon.map((p) => 
                <Pokecard id = {p.id} name = {p.name} type = {p.type} exp = {p.base_experience}/>
                )}
            </div>
            </div>
        )
    }
}

export default Pokedex;