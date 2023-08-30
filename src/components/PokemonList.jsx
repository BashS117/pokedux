import PokemonCard from "./PokemonCard";

import React from 'react'
import "./PokemonList.css"

const PokemonList = ({pokemons}) => {
    console.log("pokemonlista", pokemons)
  return (
    <div className="PokemonList">
        PokemonList
        {pokemons.map((pokemon)=>{
            return(
                <PokemonCard
                name={pokemon.name}
                key={pokemon.name}/>
            )
        })}                     
        </div>
  )
}
export default PokemonList