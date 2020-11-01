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
    this.fetchPokes()
  }

  fetchPokes = () => {
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
    return this.state.pokemon.filter(poke => poke.name.includes(this.state.searchTerm.toLowerCase())).sort((a, b) => a.id - b.id)
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
    .then(poke => {
      let updatedPoke = [poke, ...this.state.pokemon]
      this.setState(() => ({pokemon: updatedPoke}))
    })
  }

  deleteHandler = delPoke => {
    let updatedPokes = this.state.pokemon.filter(poke => poke !== delPoke)
    console.log(updatedPokes)
    fetch(`http://localhost:3000/pokemon/${delPoke.id}`, {method: "DELETE"})
      .then(resp => resp.json())
      .then(this.setState({pokemon: updatedPokes}))
  }

  editName = updatedPoke => {
    fetch(`http://localhost:3000/pokemon/${updatedPoke.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(updatedPoke)
    })
      .then(resp => resp.json())
      .then(updated => {
        let minusUpdated = this.state.pokemon.filter(poke => poke.id !== updated.id)
        let updatedPokes = [updated, ...minusUpdated]
        this.setState(() => ({pokemon: updatedPokes}))
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
        <PokemonCollection pokemon={this.filteredPokemon()} deleteHandler={this.deleteHandler} updateHandler={this.editName}/>
      </Container>
    )
  }
}

export default PokemonPage


// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png