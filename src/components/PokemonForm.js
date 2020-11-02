import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state={
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  }

  localChangeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

/* grabs the information from the form */
  localSubmitHandler = e => {
    e.preventDefault()
    this.props.submitHandler(this.state)
    this.setState(()=> ({
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: ""
    }))
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.localSubmitHandler}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.localChangeHandler}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.localChangeHandler}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.localChangeHandler}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.localChangeHandler}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm


/* Bulbasaur front: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
Back: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png */