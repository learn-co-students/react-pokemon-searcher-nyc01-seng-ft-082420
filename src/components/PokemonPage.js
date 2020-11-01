import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(resp => resp.json())
      .then(pokemon => this.setState({pokemon}))
  }

  searchHandler = e => {
    // e.persist()
    const search = e.target.value
    this.setState(() => (
      {searchTerm: search }
    ))
  }

  filteredPokemon = () => {
    return this.state.pokemon.filter(poke => poke.name.includes(this.state.searchTerm.toLowerCase()))
  }

  submitHandler = newPoke => {
    let formattedPoke = {
      name: newPoke.name.toLowerCase(),
      hp: parseInt(newPoke.hp),
      sprites: {
        front: newPoke.frontUrl,
        back: newPoke.backUrl
      }
    }
    this.createPokemon(formattedPoke)
  }

  createPokemon = pokeObj => {
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(pokeObj)
    })
    .then(resp => resp.json())
    .then(newPoke => {
      let updatedPoke = [newPoke, ...this.state.pokemon]
      this.setState(() => ({pokemon: updatedPoke}))
    })
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submitHandler={this.submitHandler}/>
        <br />
        <Search searchHandler={this.searchHandler} searchTerm={this.state.searchTerm}/>
        <br />
        <PokemonCollection pokemon={this.filteredPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage


// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png