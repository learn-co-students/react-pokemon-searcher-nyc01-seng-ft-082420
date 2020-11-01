import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state={
    pokemon: [],
    searchValue: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(pokemon => {
        this.setState (() => ({
          pokemon: pokemon
        }))
  })}

  searchHandler = (e) => {
    this.setState({searchValue: e.target.value})
  }

  filteredPokemon = () => {
    return this.state.pokemon.filter(pokemon => pokemon.name.includes(this.state.searchValue.toLowerCase()))
  }

  submitHandler = newPokemon => {
    let newPokeCard = {
      name: newPokemon.name.toLowerCase(),
      hp: Number(newPokemon.hp),
      sprites: {
        front: newPokemon.frontUrl,
        back: newPokemon.backUrl
      }
    }
    this.createPokemon(newPokeCard)
  }

  createPokemon = pokemon =>{
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json"
      },
      body: JSON.stringify(pokemon)
    })
      .then(resp => resp.json())
      .then(pokemon => {
        let newPokemonArr = [...this.state.pokemon, pokemon]
        this.setState (() => ({
        pokemon: newPokemonArr
      }))
  })}

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submitHandler={this.submitHandler} />
        <br />
        <Search searchValue={this.state.searchValue} searchHandler={this.searchHandler}/>
        <br />
        <PokemonCollection pokemons={this.filteredPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage
