import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchValue: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemon => {
      this.setState(() => ({ pokemons: pokemon }))
    })
  }

  searchHandler = (e) => {
    let searchStuff = e.target.value
    this.setState(() => ({
      searchValue: searchStuff
    }))
  }

  displayPokemon = () => {
    let filteredBySearch = [...this.state.pokemons]
    
    if (this.state.searchValue !== "") {
      return filteredBySearch.filter(el => el.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    }
    
    return filteredBySearch
  }

  submitHandler = newPokemon => {
    let correctObject = {
      name: newPokemon.name,
      hp: newPokemon.hp,
      sprites: {
        front: newPokemon.frontUrl,
        back: newPokemon.backUrl
      }
    }
    
    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accepts: "application/json"
      },
      body: JSON.stringify(correctObject)
    })
    .then(resp => resp.json())
    .then(pokemon => {
      this.setState({ pokemons: [pokemon, ...this.state.pokemons] })
    })
  }

  render() {
    
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submitHandler={this.submitHandler}/>
        <br />
        <Search searchHandler={this.searchHandler} searchValue={this.state.searchValue}/>
        <br />
        <PokemonCollection pokemon={this.displayPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage