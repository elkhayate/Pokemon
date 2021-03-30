import React, { Component } from 'react'
import Pokedex from "./Pokedex";
import "./Pokegame.css"

class Pokegame extends Component {
    static defaultProps = {
        pokemon : [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]
    };
    render(){
        const props = this.props;
        let hand1 = [];
        let hand2 = [...props.pokemon];
        while(hand1.length < hand2.length) {
            let index = Math.floor(Math.random() * hand2.length);
            let items = hand2.splice(index,1)[0];
            hand1.push(items);
        }
        let exp_numbers1 = [];
        hand1.map((h) => exp_numbers1.push(h.base_experience));
        let exp_numbers2 = [];
        hand2.map((h) => exp_numbers2.push(h.base_experience));
        function myFunc(total, num) {
            return total + num;
        };
        const result1 = exp_numbers1.reduce(myFunc);
        const result2 = exp_numbers2.reduce(myFunc);
        let winner = result1 > result2;
        let big_result = (winner ? `The winner is the player on the top with a score of : ${result1} - ${result2} ` : `The winner is the player on the bottom with a score of : ${result2} - ${result1} `);
        return (
            <div className="Pokegame">
                <div className = "Pokegame-first"><Pokedex className = "Pokegame-first" pokemon={hand1}/></div>
                <div className={winner ? "winner-top" : "winner-bottom"}>{big_result}</div>
                <div className = "Pokegame-second"><Pokedex  pokemon={hand2}/></div>
                
                               
            </div>
        )
    }
}
export default Pokegame;