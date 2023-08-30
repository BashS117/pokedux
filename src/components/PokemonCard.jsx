import { Card } from "antd";
import Meta from "antd/es/card/Meta";

import React from 'react'

const PokemonCard = () => {
  return (
    <Card 
    style={{width: 250}}
    title="Ditto"
    cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt="Ditto"/>}
    >
        <Meta description="fire,magic,normal"/>
        </Card 
    
    >
  )
}

export default PokemonCard