import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false
  }

  clickHandler = () => {
    this.setState((prevState) => ({clicked: !prevState.clicked}))
  }

  render() {
    const {name, hp, sprites} = this.props.pokemon
    return (
      <Card>
        <div>
          <div className="image" onClick={this.clickHandler}>
            <img alt="oh no!" src={this.state.clicked ? sprites.back : sprites.front}/>
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
  
}

export default PokemonCard
