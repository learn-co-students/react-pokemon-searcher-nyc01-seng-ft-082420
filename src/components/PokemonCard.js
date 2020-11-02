import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    front: true
  }

  cardToggle = () => {
    this.setState( (prev) => ({front: !prev.front}))
  }

  render() {
    return (
      <Card>
        <div onClick={this.cardToggle}>
          <div className="image">
            <img alt="oh no!" src={this.state.front ? this.props.poke.sprites.front : this.props.poke.sprites.back}/>
          </div>
          <div className="content">
            <div className="header">{this.props.poke.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.poke.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
