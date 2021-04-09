import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Redirect } from "react-router-dom"



class AptNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        street:"",
        city:"",
        state:"",
        manager:"",
        email:"",
        price:"",
        bedrooms:"",
        bathrooms:"",
        pets:"",
        image_url:""
      },
      submitted: false
    }
  }
    handleChange = (e) => {
      let { form } = this.state
      form[e.target.name] = e.target.value
      this.setState({ form: form })
    }
  
    handleSubmit = () => {
      this.props.createNewApt(this.state.form)
      this.setState({ submitted: true })
    }
  
  render() {
    return (
      <>
      <Form>
      <FormGroup>
        <Label for="exampleText">Name</Label>
        <Input
          type="string"
          name="name"
          value={ this.state.form.name }
          onChange={ this.handleChange }
          />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Location</Label>
        <Input
          type="string"
          name="location"
          value={ this.state.form.location }
          onChange={ this.handleChange }
          />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Asking</Label>
        <Input
          type="sting"
          name="asking"
          value={ this.state.form.asking }
          onChange={ this.handleChange }
          />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Image URL</Label>
        <Input
          type="string"
          name="image_url"
          value={ this.state.form.image_url }
          onChange={ this.handleChange }
          />
      </FormGroup>
      <Button
            onClick={ this.handleSubmit }>
              Submit
      </Button>
    </Form>
       { this.state.submitted && <Redirect to="/aptindex" /> }
    </>
    )
  }
}
export default AptNew