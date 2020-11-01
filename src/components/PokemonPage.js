import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state={
    pokemon: [],
    searchPokemon: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(pokemon => this.setState ({
          pokemon: pokemon
        }))
  }


  // searchHandler = (e) => {

  // }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm />
        <br />
        <Search />
        <br />
        <PokemonCollection pokemons={this.state.pokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
