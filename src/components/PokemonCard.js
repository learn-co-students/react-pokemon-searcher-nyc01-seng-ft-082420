import React from 'react'
import { Card, Button, Icon, Form } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    clicked: false,
    edit: false,
    name: ""
  }

  initialState = this.state

  flipCard = () => {
    this.setState((prevState) => ({clicked: !prevState.clicked}))
  }

  delCard = () => {
    this.props.deleteHandler(this.props.pokemon)
  }

  editCard = () => {
    this.setState((prevState) => (
      {
        edit: !prevState.edit,
        name: this.props.pokemon.name
      }
    ))
  }

  changeHandler = e => {
    e.preventDefault()
    const {name, value} = e.target
    this.setState(() => ({[name]: value}))
  }

  updateName = e => {
    e.preventDefault()
    let updatedPoke = {...this.props.pokemon, name: this.state.name}
    this.props.updateHandler(updatedPoke)
    this.setState(this.initialState)
  }

  render() {
    const {name, hp, sprites} = this.props.pokemon
    return (
      <Card>
        <div>
            <div className="image" onClick={this.flipCard}>
              <img alt="oh no!" src={this.state.clicked ? sprites.back : sprites.front}/>
            </div>
          <div className="content" >
            <div className="header">
              {this.state.edit ?
                <Form onChange={this.changeHandler} onSubmit={this.updateName}>
                  <Form.Input fluid name="name" value={this.state.name}icon={<Icon name='save' inverted circular />}/>
                </Form>
                : name
              }
            </div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp}
            </span>
          </div>
        </div>
        <Card.Content extra>
          <Button animated inverted color='blue' onClick={this.editCard}>
            <Button.Content visible>
                <Icon name='pencil' />
            </Button.Content>
            <Button.Content hidden>
                Edit
            </Button.Content>
          </Button>
          <Button animated inverted color='red' onClick={this.delCard}>
            <Button.Content visible>
              <Icon name='delete' />
            </Button.Content>
            <Button.Content hidden>
              Delete
            </Button.Content>
          </Button>
        </Card.Content>
        
      </Card>
    )
  }
  
}

export default PokemonCard
