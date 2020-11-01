import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'


class PokemonPage extends React.Component {

  state = {
    pokeApi: [],
    searchValue: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemon => {
      this.setState(() => ({
        pokeApi: pokemon
      }))
    })
  }

  searchHandler = e => {
    let newValue = e.target.value  
    this.setState(() => ({  searchValue: newValue }))
  }

  filteredPokemon = () => {
    return this.state.pokeApi.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.searchValue.toLowerCase()))
  }

  submitHandler = newPokemon => {

    let correctObject = {
      name: newPokemon.name,
      hp:  newPokemon.hp,
      sprites: {
        front: newPokemon.front,
        back: newPokemon.back
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
      .then(pokemon => this.setState({ pokeApi: [pokemon, ...this.state.pokeApi] }))
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submitHandler={this.submitHandler}/>
        <br />
        <Search searchHandler={this.searchHandler} searchValue={this.state.searchValue} />
        <br />
        <PokemonCollection pokemon={this.filteredPokemon()} />
      </Container>
    )
  }
}




export default PokemonPage
