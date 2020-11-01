import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchPoke: [],
    searchValue: ''
  }

  componentDidMount(){
    fetch('http://localhost:3000/pokemon')
    .then(resp => resp.json())
    .then(pokemons => this.setState({pokemons: pokemons, searchPoke: pokemons}))
  }

  addNewPokemon = (obj) => {
    const options = {
      method: 'POST',
      headers:{
        'content-type':'application/json',
        accepts: 'application/json'
      },
      body: JSON.stringify(obj)
    }

    fetch('http://localhost:3000/pokemon', options)
    .then(resp => resp.json())
    .then(pokemon => this.setState(prevState => {
      return {pokemons: [...prevState.pokemons, pokemon]}
    }))
  }

  searchHandler = (e) => {
    console.log(e.target.value);
    let search = this.state.pokemons.filter(poke => poke.name.toLowerCase().includes(e.target.value.toLowerCase()))
    this.setState({searchPoke: search, searchValue: e.target.value})
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNewPokemon={this.addNewPokemon}/>
        <br />
        <Search searchValue={this.state.searchValue} searchHandler={this.searchHandler}/>
        <br />
        <PokemonCollection pokemons={this.state.searchPoke}/>
      </Container>
    )
  }
}

export default PokemonPage
