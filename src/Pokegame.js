import React, { Component } from 'react';
import Pokedex from "./Pokedex";
class Pokegame extends Component {
    static defaultProps = {
        pokemon :  [
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
    render () {
        const props = this.props;
        let hand1 = [];
        let hand2 = [...props.pokemon];
        while (hand2.length > hand1.length){
            let inddx = Math.floor(Math.random() * hand2.length);
            let items = hand2.splice(inddx,1)[0];
            hand1.push(items);
        }
        let result_hand1 = 0;
        hand1.map((p) => result_hand1 += p.base_experience);
        let result_hand2 = 0;
        hand2.map((p) => result_hand2 += p.base_experience);        
        return (
            <div className = "Pokegame">
                <Pokedex pokemon = {hand1} exp = {result_hand1} iswinner = {result_hand2<result_hand1}/>
                <Pokedex pokemon = {hand2} exp = {result_hand2} iswinner = {result_hand2>result_hand1}/>
            </div>
        )
    }
}

export default Pokegame;