import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state={
    pokemon: [],
    searchPokemon: [],
    searchValue: ""
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(pokemon => this.setState ({
          pokemon: pokemon
        }))
  }

  searchHandler = (e) => {
    this.setState({searchValue: e.target.value})
  }

  filteredPokemon = () => {
    return this.state.pokemon.filter(pokemon => pokemon.name.toUpperCase().includes(this.state.searchValue.toUpperCase()))
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search searchValue={this.state.searchValue} searchHandler={this.searchHandler} filter={this.filteredPokemon}/>
        <br />
        <PokemonCollection pokemons={this.filteredPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage
