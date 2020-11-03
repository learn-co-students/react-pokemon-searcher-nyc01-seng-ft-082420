import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemons: [],
    searchBar: "",
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(resp => resp.json())
    .then((responseArray) => {
      this.setState({
        pokemons: responseArray.map((el) => el)
      })
    })
  }

  searchPokemon = (e) => {
    this.setState({searchBar: e.target.value})
  }

 createNewPokemon = (newPokemon) => {
   let pokemonsArrayCopy = [...this.state.pokemons, newPokemon]
   return this.setState({
     pokemons: pokemonsArrayCopy
   })
 }

  render() {
    const desiredPokemon = this.state.pokemons.filter(p =>
          p.name.includes(this.state.searchBar)) 
    // console.log(this.state.pokemons)
    // console.log(this.state.pokemons)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createNewPokemon={this.createNewPokemon}/>
        <br />
        <Search onChange={this.searchPokemon} />
        <br />
        <PokemonCollection pokemons={desiredPokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
