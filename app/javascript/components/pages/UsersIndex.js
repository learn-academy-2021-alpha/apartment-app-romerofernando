import React, { Component } from 'react'
import { Card, CardTitle, Col, CardImg, CardColumns } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class UsersIndex extends Component {
  render() {
    return (
      <>
         <h2>These are your homes.</h2>
          <CardColumns>
            { this.props.userApartments && this.props.userApartments.map((apartment, index) => {
            return (
            <Card body key={ index }>
              <NavLink
              to={`/aptshow/${apartment.id}`}>
              {<CardImg top width="100%" src={apartment.image_url} alt="Home listing card" />}
              </NavLink>
            <CardTitle>
              <NavLink
              to={`/aptshow/${apartment.id}`}>
              { apartment.street }
              </NavLink>
              <p>{apartment.city }</p>
              <p>{apartment.price }</p>
            </CardTitle>
            </Card>
            )
          })}
        </CardColumns>
      </>
    )
  }
}
export default UsersIndex
