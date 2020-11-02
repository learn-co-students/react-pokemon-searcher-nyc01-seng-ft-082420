import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  render() {
    let renderPokemons = this.props.pokemons.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon} />)
    return (
      <Card.Group itemsPerRow={6}>
        <h1>{renderPokemons}</h1>
      </Card.Group>
    )
  }
}

export default PokemonCollection
