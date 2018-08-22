import React, { Component } from 'react'
import axios from 'axios'

// const Api = require('../lib/Api.js')

class LoginScreen extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username:'',
      password:''
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
    console.log(newValue, "newValue")
  }

  setPassword(event) {
    let newValue = event.target.value || ''
    this.setState({
      password: {
        value: newValue,
      }
    })
    console.log(this.state.password)
  }

  handleClick(event){
    const apiBaseUrl = "http://localhost:3001/";
    let data = {
        email: this.state.email.value,
        password: this.state.password.value
    }
    axios.post(`${apiBaseUrl}auth/login`, data)
      .then(function (response) {
        return response.data.jwt
      })
      // .then(jwt => {
      //   if (jwt) {
      //     this.props.propagateSignIn(jwt, this.props.history)
      //     console.log("here", this.state.email.value)
      //   }
      //   else {
      //     this.setState({
      //       submit: {
      //         error: 'Sorry, we could not log you in with the credentials provided. Please try again.'
      //       }
      //     })
      //   }
      // })
      .catch(function (error) {
        return undefined
      // })
    
    // .then(function (response) {
    // console.log('response:', response);
    // if(response.data.code === 200){
    // console.log("Login successfull");

    // var uploadScreen=[];
    // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
    // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
    // }
    // else if(response.data.code == 204){
    // console.log("Username password do not match");
    // alert("username password do not match")
    // }
    // else{
    // console.log("Username does not exists");
    // alert("Username does not exist");
    // }
    })
    // .catch(function (error) {
    // console.log(error);
    // });
  }
 
  //   Api.authenticateUser(this.state.email.value, this.state.password.value).then(jwt => {
  //     if (jwt) {
  //       this.props.propagateSignIn(jwt, this.props.history)
  //       console.log("here", this.state.email.value)
  //     }
  //     else {
  //       this.setState({
  //         submit: {
  //           error: 'Sorry, we could not log you in with the credentials provided. Please try again.'
  //         }
  //       })
  //     }
  //   })
  // }

  render() {
    return (
      <div className="container">
          <div className="loginContainer">
            <form onSubmit={this.handleSubmit}>
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
            <button className="newIdeaButton" onClick={this.handleClick}>
                Login
            </button>
          
          </div>
      </div>
    );
  }

}

export default LoginScreen