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

    this.setPassword = this.setPassword.bind(this)
    this.setEmail = this.setEmail.bind(this)
  }

  // getFormErrors() {
  //   let fields = ['email', 'password', 'submit']
  //   let errors = []
  //   fields.map(field => {
  //     let fieldError = this.state[field].error || ''
  //     if (fieldError.length > 0) {
  //       errors.push(fieldError)
  //     }
  //   })
  //   return errors
  // }

  setEmail(event) {
    let newValue = event.target.value || ''
    // let errorMessage = newVal.length === 0 ? 'Email is required.' : ''
    this.setState({
      email: {
        value: newValue,
        // error: errorMessage
      },
      // submit: {
      //   error: ''
      // }
    })
    console.log(newValue, "newValue")
  }

  setPassword(event) {
    let newValue = event.target.value || ''
    // let errorMessage = newVal.length === 0 ? 'Password is required.' : ''
    this.setState({
      password: {
        value: newValue,
        // error: errorMessage
      },
      // submit: {
      //   error: ''
      // }
    })
    console.log(this.state.password)
  }

  handleClick(event){
    const apiBaseUrl = "http://localhost:3001/";
    // let self = this;
    let data = {
      auth: {
        // email: this.state.email.value,
        // password: this.state.password.value
      }
    }
    axios.post(apiBaseUrl+'auth/login', data)
    .then(function (response) {
    console.log(response);
    if(response.data.code == 200){
    console.log("Login successfull");
    // var uploadScreen=[];
    // uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
    // self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
    }
    // else if(response.data.code == 204){
    // console.log("Username password do not match");
    // alert("username password do not match")
    // }
    // else{
    // console.log("Username does not exists");
    // alert("Username does not exist");
    // }
    })
    .catch(function (error) {
    console.log(error);
    });
  }
    // if (this.getFormErrors().length > 0) {
    //   return false
    // }

    // Api.authenticateUser(this.state.email.value, this.state.password.value).then(jwt => {
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
  // }



  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12">
            <form>
              <label htmlFor="email">Email: </label>
              <br />
                <input name="email" id="email" type="email" onChange={this.setEmail}/>
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
            <br/>
            <button className="newIdeaButton" onClick={this.handleClick}>
                Login
            </button>
          
          </div>
        </div>
      </div>
    );
  }

}

export default LoginScreen