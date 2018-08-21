import React, { Component } from 'React'
import IdeasContainer from './IdeasContainer'
import LoginScreen from './LoginScreen'

class LoginSwitch extends React.Component {

  render() {
    const props = this.props
    
    if (!props.loggedIn) {
      return (
        <LoginScreen loginHandler={props.loginHandler}/> 
      )
    } else {
      return (
        <IdeasContainer />
      )
    }
  }
}

export default LoginSwitch