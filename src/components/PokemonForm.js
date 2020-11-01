import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  
  state = {
    name: "",
    hp: "",
    front: "",
    back: ""
    
  }
  
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  formSubmitHandler = e => {
    e.preventDefault()
    this.props.submitHandler(this.state)
  }
  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png
  // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.formSubmitHandler}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name='name' value={this.state.name} onChange={this.changeHandler}/>
            <Form.Input fluid label="hp" placeholder="hp" name='hp' value={this.state.hp} onChange={this.changeHandler}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name='front' value={this.state.front} onChange={this.changeHandler}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name='back' value={this.state.back} onChange={this.changeHandler}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
