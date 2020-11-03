import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    pokemon: this.props.pokemon,
    imageFront: true
  }

  clcikHandler = () => {
    this.setState(prevState => ({
      imageFront: !prevState.imageFront
    }))
  }

  render() {
    // console.log(this.props.pokemon)
    return (
      <Card>
        <div>
          <div className="image" onClick={this.clcikHandler}>
            <img src={this.state.imageFront 
                      ? this.state.pokemon.sprites.front 
                      : this.state.pokemon.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.state.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.state.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
