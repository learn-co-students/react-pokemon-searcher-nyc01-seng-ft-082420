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
    .then(console.log)
    .catch(console.log)
  }

  render() {

    return (
      <Container>
        
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm createPokemon={this.createPokemon} />
        <br />
        <Search />
        <br />
        <PokemonCollection pokemon={this.state.pokemon}/>
      </Container>
    )
  }
}

export default PokemonPage
