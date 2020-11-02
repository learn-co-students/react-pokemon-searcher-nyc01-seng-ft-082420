import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state={
    pokemons:[],
    find: ""
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(resp=>resp.json())
    .then(data=>{
      this.setState({pokemons:data})
    })
  }

  searchChangeHandler = e =>{
    this.setState({find: e.target.value})
  }

  filteredPokemon = () =>{
    return this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.find))
  }

  createPokemon = pokemon =>{
    this.setState({ pokemons: [...this.state.pokemons, pokemon]})
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createPokemon={this.createPokemon}/>
        <br />
        <Search searchChangeHandler={this.searchChangeHandler}/>
        <br />
        <PokemonCollection pokemons={this.filteredPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage
