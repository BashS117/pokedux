import { Col } from 'antd'
import { useState } from 'react';
import { useEffect } from 'react';
import { getPokemon } from './api';
import './App.css'
import PokemonList from './components/PokemonList'
import Searcher from './components/Searcher'
import logo from "./statics/logo.svg";

function App() {
  const [pokemons,setPokemons]=useState([]);

  useEffect(()=>{
const fetchPokemons =async()=> {
  const pokemonRes = await getPokemon();
  setPokemons(pokemonRes);

};
fetchPokemons();
  },[])

  return (
    <div className='App'>
      <Col span={4} offset={10}>
       <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
      <Searcher />
      </Col>
      <PokemonList pokemons={pokemons}/>
      
    </div>
  )
}

export default App
