import React from 'react'
// import { instanceOf } from 'prop-types'
// import { withCookies, Cookies } from 'react-cookie'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import NavBar from './NavBar.js'
import LoginScreen from './LoginScreen.js'
import AuthSignOut from './AuthSignOut.js'
import HomePage from './HomePage.js'
import IdeasContainer from './IdeasContainer.js'

const Api = require('../lib/Api.js')

class TokenAuthComponent extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.defaultState()

    // this.propagateSignIn = this.propagateSignIn.bind(this)
    // this.propagateSignOut = this.propagateSignOut.bind(this)
  }

  componentDidMount() {
    this.getUser()
    // this.getPages()
  }

  defaultState() {
    return {
      // cookieName: 'rails-react-token-auth-jwt',
      email: undefined,
      jwt: undefined,
      user_id: undefined,
      ideas: []
    }
  }

  render() {
    return (
      <Router>
        <div>

          <NavBar appState={this.state} />

          <Route exact path="/" component={HomePage} />

          <Route
            exact path='/ideas'
            render={(routeProps) => (
              <Page {...routeProps} appState={this.state} />
            )}
          />

          {/* {!this.state.jwt && */}
            <Route
              exact path="/login"
              render={(routeProps) => (
                <LoginScreen {...routeProps}  />
              )}
            />
          {/* } */}

          {/* {this.state.jwt && */}
            <Route
              exact path="/logout"
              render={(routeProps) => (
                <Logout {...routeProps}  />
              )}
            />
          {/* } */}

        </div>
      </Router>
    )
  }


  // propagateSignIn(jwt, history = undefined) {
  //   const { cookies } = this.props
  //   cookies.set(this.state.cookieName, jwt, { path: '/' })
  //   this.getUser(history)
  // }

  // propagateSignOut(history = undefined) {
  //   const { cookies } = this.props
  //   cookies.remove(this.state.cookieName)
  //   this.setState({
  //     email: undefined,
  //     user_id: undefined,
  //     jwt: undefined
  //   })
  //   if (history) history.push('/')
  // }

  getPages() {
    Api.getPages().then(response => {
      this.setState({
        pages: response
      })
    })
  }

  getUser(history = undefined) {
    // const { cookies } = this.props
    // let jwt = cookies.get(this.state.cookieName)
    // if (!jwt) return null

    Api.getCurrentUser(jwt).then(response => {
      if (response !== undefined) {
        this.setState({
          email: response.email,
          user_id: response.id,
          jwt: jwt
        })
        if (history) history.push('/')
      }
      else {
        // user has cookie but cannot load current user
        // cookies.remove(this.state.cookieName)
        this.setState({
          email: undefined,
          user_id: undefined,
          jwt: undefined
        })
      }
    })
  }

}

export default TokenAuthComponent
