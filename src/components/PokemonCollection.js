import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  renderCards = () => {
    return this.props.pokemon.map(poke => <PokemonCard key={poke.id} pokemon={poke} deleteHandler={this.props.deleteHandler} updateHandler={this.props.updateHandler}/>)
  }

  render() {
    return (
      <Card.Group itemsPerRow={6}>
        {this.renderCards()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
