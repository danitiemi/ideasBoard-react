import React from 'react'
import Transition from 'react-transition-group/Transition'
// perform animations when a React component enters or leaves the DOM

const duration = 2000

const defaultStyle = {
  transition: `background ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`,
  opacity: 0,
  padding: '10px'
}

const transitionStyles = {
  entering: { opacity: 0.8, background: '#855cc4' },
  entered:  { opacity: 0 },
}

const Notification = ({ in: inProp, notification }) =>
  <Transition in={inProp} timeout={duration}>
    {(transitionState) => {
      return(
        <span style={{
          ...defaultStyle,
          ...transitionStyles[transitionState]
        }}>
          {notification}
        </span>
      )

    }}
  </Transition>

export default Notification