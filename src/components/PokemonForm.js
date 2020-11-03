import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: "",    
  }

  changHandler = (e) => {
    return this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/pokemon/", {
    method: "POST",
    headers: {
        "content-type": "application/json",
        accepts: "application/json"
    },
    body: JSON.stringify({
      name: this.state.name,
      hp: this.state.hp,
      sprites: {
        fron: this.state.frontUrl,
        back: this.state.backUrl,
      },
    })
})
   .then(resp => resp.json())
   .then(newPokemon => {
     this.props.createNewPokemon(newPokemon)
   })
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.submitHandler}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.changHandler}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.changHandler}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.changHandler}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.changHandler}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
