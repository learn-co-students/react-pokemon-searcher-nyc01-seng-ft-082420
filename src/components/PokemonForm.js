import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {

  state = {
    name: "",
    hp: "",
    frontUrl : "",
    backUrl: "" 
  }

  formSubmit = (e) => {
    e.preventDefault()
    const newPoke = {
      name: this.state.name,
      hp: this.state.hp,
      sprites: {
        front: this.state.frontUrl,
        back: this.state.backUrl
      }
    }
    this.props.createPokemon(newPoke)
    this.setState( () => ({
      name: "",
      hp: "",
      frontUrl : "",
      backUrl: "" 
    }))
  }

  formEdit = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.formSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.formEdit} fluid label="Name" placeholder="Name" name="name" value={this.state.name} />
            <Form.Input onChange={this.formEdit} fluid label="hp" placeholder="hp" name="hp" value={this.state.hp}/>
            <Form.Input onChange={this.formEdit} fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} />
            <Form.Input onChange={this.formEdit} fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
