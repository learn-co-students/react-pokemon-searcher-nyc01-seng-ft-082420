import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state={
    facing: true
  }

  clickHandler = e =>{
    this.setState({facing: !this.state.facing})
  }
  render() {
    return (
      <Card onClick={()=>this.clickHandler()}>
        <div>
          <div className="image">
            <img src={this.state.facing? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              <p>{this.props.pokemon.hp} hp</p>
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
