import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state={
    frontOrBack: this.props.pokemon.sprites.front,
    clicked: false
  }

  clickHandler = () => {
    this.setState({clicked: !this.state.clicked})
    this.state.clicked? this.setState({frontOrBack: this.props.pokemon.sprites.front}) :this.setState({frontOrBack: this.props.pokemon.sprites.back})
  }

  render() {
    const pokemon = this.props.pokemon
    return (
      <Card onClick={this.clickHandler}>
        <div>
          <div className="image">
            <img src={this.state.frontOrBack} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{pokemon.id}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
