import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  state={
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  }

  handleChange = e =>{
    this.setState({[e.target.name]: e.target.value})
  }

  submitHandler = e =>{
    e.preventDefault()
    const options= {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify({
      name: this.state.name,
      hp: this.state.hp,
      sprites:{
        front: this.state.frontUrl,
        back: this.state.backUrl
      }
    })}

    fetch('http://localhost:3000/pokemon',options)
    .then(resp=>resp.json())
    .then(pokemon => this.props.createPokemon(pokemon))
    this.setState({name:"",hp:"",frontUrl:"",backUrl:""})
  }

  render(){
    return(
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.submitHandler}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={this.handleChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl} onChange={this.handleChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} onChange={this.handleChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
