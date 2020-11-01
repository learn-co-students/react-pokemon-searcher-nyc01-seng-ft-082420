import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  }

  initialState = this.state
  
  changeHandler = e => {
    e.preventDefault()
    const {name, value} = e.target
    this.setState(() => ({[name]: value}))
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.submitHandler(this.state)
    this.setState(this.initialState)
  } 

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.submitHandler} onChange={this.changeHandler}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name}/>
            <Form.Input fluid label="hp" placeholder="hp" type="number" name="hp" value={this.state.hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} />
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
