import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import { Button } from "reactstrap"

class AptShow extends Component {
  render() {
    const apartment = this.props.apartment;
    console.log(apartment)
    return (
      <>
        <div className = "center"> 
        <h1>{apartment.street}</h1>
        <br></br>
        <img src= {apartment.image_url} alt="Apartment Image" width="25%" height="25%"></img> 
        <div>Address: {apartment.street}</div>
        <div>City: {apartment.city}</div>
        <div>Manager: {apartment.manager}</div>
        <div>email: {apartment.email}</div>
        <div>Price: {apartment.price}</div>
        <div>Bedrooms: {apartment.bedrooms}</div>
        <div>Bathrooms: {apartment.bathrooms}</div>
        <div>Pets Allowed: {apartment.pets}</div>
        <NavLink
          to={`/aptedit/${this.props.apartment.id}`}  
        >
        <Button color="secondary">
          Edit Apts
        </Button>
        </NavLink>
        </div>
       
      </>
    )
  }
}
export default AptShow