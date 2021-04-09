import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Redirect } from "react-router-dom"

class AptEdit extends Component {
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
      this.props.apartment(this.state.form)
      this.setState({ submitted: true })
    }

    
  
  render() {
    return (
        <>
        <Form>
        <FormGroup>
          <Label for="exampleText">Street</Label>
          <Input
            type="string"
            name="street"
            value={ this.state.form.street }
            onChange={ this.handleChange }
            />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">city</Label>
          <Input
            type="string"
            name="city"
            value={ this.state.form.city }
            onChange={ this.handleChange }
            />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">state</Label>
          <Input
            type="string"
            name="state"
            value={ this.state.form.state }
            onChange={ this.handleChange }
            />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">manager</Label>
          <Input
            type="string"
            name="manager"
            value={ this.state.form.manager }
            onChange={ this.handleChange }
            />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">email</Label>
          <Input
            type="string"
            name="email"
            value={ this.state.form.email }
            onChange={ this.handleChange }
            />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">price</Label>
          <Input
            type="sting"
            name="price"
            value={ this.state.form.price }
            onChange={ this.handleChange }
            />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">bedrooms</Label>
          <Input
            type="string"
            name="bedrooms"
            value={ this.state.form.bedrooms }
            onChange={ this.handleChange }
            />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">bathrooms</Label>
          <Input
            type="string"
            name="bathrooms"
            value={ this.state.form.bathrooms }
            onChange={ this.handleChange }
            />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">pets</Label>
          <Input
            type="string"
            name="pets"
            value={ this.state.form.pets }
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
  export default AptEdit