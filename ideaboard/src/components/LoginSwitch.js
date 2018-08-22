import React, { Component } from 'React'
import IdeasContainer from './IdeasContainer'
import LoginScreen from './LoginScreen'

class LoginSwitch extends React.Component {

  render() {
    // return (
    // const props = this.props
    
    if (!props.loggedIn) {
      return (
        <LoginScreen onSubmit={props.handleClick}/> 
      )
    } else {
      return (
        <IdeasContainer />
      )
    }
  }

}

export default LoginSwitch