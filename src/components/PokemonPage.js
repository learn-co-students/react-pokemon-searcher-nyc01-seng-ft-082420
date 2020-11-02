import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
    .then(res => res.json())
    .then(res => {
      this.setState( () => ({pokemon:res}))
    })
  }

  createPokemon = (newPoke) => {
    const configObj = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json"
      }, 
      body: JSON.stringify(newPoke)
    }
    fetch('http://localhost:3000/pokemon', configObj)
    .then(res=>res.json())
    .then(res => this.setState( (prev) => ({pokemon: [...prev.pokemon, res]})))
    .catch(console.log)
  }

  addFilter = (search) => {
    this.setState({filter: search})
  }

  render() {

    return (
      <Container>
        
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createPokemon={this.createPokemon} />
        <br />
        <Search filter={this.addFilter}/>
        <br />
        <PokemonCollection pokemon={this.state.filter ? this.state.pokemon.filter( poke => poke.name.toLowerCase().includes(this.state.filter.toLowerCase())) : this.state.pokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
