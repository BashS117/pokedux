import PokemonCard from "./PokemonCard";

import React from 'react'

const PokemonList = ({pokemons}) => {
  return (
    <div className="PokemonList">
        PokemonList
        {pokemons.map((pokemon)=>{
            return(
                <PokemonCard/>
            )
        })}
        </div>
  )
}
PokemonList.defaultProps={
    pokemons: Array(5).fill("") 
}
export default PokemonList