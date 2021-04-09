import React, { Component } from "react"
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import AptIndex from './pages/AptIndex'
import AptShow from './pages/AptShow'
import AptNew from './pages/AptNew'
import AptEdit from './pages/AptEdit'
import Home from './pages/Home'
import NotFound from './pages/NotFound'


import mockApts from './mockApts.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount(){
    this.aptIndex()
  }

  aptIndex = () => {
    fetch("http://127.0.0.1:3000/apartments")
    .then(response => {
      return response.json()
    })
    .then(aptsArray => {
      this.setState({ apartments: aptsArray })
    })
    .catch(errors => {
      console.log("index errors:", errors)
    })
  }
  createNewApt = (newApt) => {
    console.log(newApt)
    let newAptList = { apartments: newApt }
    console.log(newAptList)
    return fetch("http://127.0.0.1:3000/apartments", {
      body: JSON.stringify(newAptList),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then(response => {
      if(response.status === 422){
        alert("Please check your submission.")
      }
      return response.json()
    })
    .then(payload => {
      this.aptIndex()
    })
    .catch(errors => {
      console.log("create errors:", errors)
    })
  }

  updateApt = (apartment, id) => {

    return fetch(`http://localhost:3000/apartments/${id}`, {
      body: JSON.stringify(apartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => {
      if(response.status === 422){
        alert("Please check your submission.")
      }
      return response.json()
    })
    .then(payload => {
      this.aptIndex()
    })
    .catch(errors => {
      console.log("update errors:", errors)
    })
  }




  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <> 
      <Router>
        <Header logged_in={ logged_in }
          sign_in_route={ sign_in_route }
          sign_out_route={ sign_out_route }
          new_user_route={ new_user_route }
          />
          <Switch>   
            <Route exact path="/" component={ Home } />
            <Route path="/aptindex" render = {(props) => <AptIndex apartments={this.state.apartments}/> } />
            <Route path="/usersindex" render={ (props) => {
                  const userApartments = this.state.apartments.filter(apartment => {
                    return apartment.user_id === current_user.id
                  })
                  return <UsersIndex userApartments={userApartments} />
              }}
            />
            <Route path="/aptshow/:id" render = {(props) => {
            const id = +props.match.params.id
            const apartment = this.state.apartments.find(apartment => apartment.id === id)
            return (<AptShow apartment={apartment}/>)}
            } />
            <Route path="/aptnew/:id" render={(props) => {
            return <AptNew createNewApt={ this.createNewApt } /> 
            }}
            />
            <Route exact path={"/aptedit/:id"} render={ (props) => {
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment => apartment.id === parseInt(id))
            return(
            <AptEdit updateApt={ this.updateApt } apartment={ apartment }
            />)}
            }/>
            <Route component = { NotFound } />
        </Switch>
        <Footer />
        </Router>
      </>
    )
  }
}

export default App
