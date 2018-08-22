import React, { Component } from 'react'
import axios from 'axios'
import IdeasContainer from './IdeasContainer';
// import { BrowserRouter, Route, Link } from 'react-router-dom'

class LoginScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username:'',
      password:'',
      loggedIn: false,
      ideasScreen: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.setPassword = this.setPassword.bind(this)
    this.setEmail = this.setEmail.bind(this)
  }

  setEmail(event) {
    let newValue = event.target.value || ''
    this.setState({
      email: {
        value: newValue,
      }
    })
  }

  setPassword(event) {
    let newValue = event.target.value || ''
    this.setState({
      password: {
        value: newValue,
      }
    })
  }

  handleClick(event){
    const apiBaseUrl = "http://localhost:3001/";
    let data = {
        email: this.state.email.value,
        password: this.state.password.value
    }
    axios.post(`${apiBaseUrl}auth/login`, data)
      .then(response => {
        // console.log(response.data.access_token)
        return response.data.access_token
      })
      .then(response => {
        let config = {
          headers: {}
        }
        config['headers']['Authorization'] = 'Bearer ' + response
        return axios.get(`${apiBaseUrl}api/v1/ideas`, config)          
      })
      .then(response => { 
        
        this.setState ({
          loggedIn: true,
        })
        // console.log(this.state.loggedIn)
        if (this.state.loggedIn && this.state.ideasScreen) {
          return (
            <IdeasContainer />
          )
        }
      })
      .catch(function (error) {
        return undefined
      })
  
  }
 
  render() {
    const props = this.props

    if (!props.loggedIn) {
      return (
        <div className="container">
          <div className="loginContainer">
            <form >
              <label htmlFor="email">Email: </label>
              <br />
              <input name="email" type="email" id="email" onChange={this.setEmail}/>
              <br /><br />
              <label htmlFor="password">Password:</label>
              <br />
              <input
                name="password"
                id="password"
                type="password"
                onChange={this.setPassword}
              />
            </form>
            <br />
            <button className="newIdeaButton" onClick={this.handleClick} loggedIn={this.props.loggedIn}>
                Login
            </button>
          
          </div>
        </div>
      )
    } else {
      return (
        <IdeasContainer loggedIn={this.props.loggedIn} />
      )
    }
  }
}

export default LoginScreen