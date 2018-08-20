import React, { Component } from 'react'

class Idea extends Component {

  handleClick = () => {
    this.props.onClick(this.props.idea.id)
  }

  handleDelete = () => {
    this.props.onDelete(this.props.idea.id)
  }

  render () {
    return(
      <div className="tile">
        <span className="deleteButton" onClick={this.handleDelete}>
          <i className="fas fa-minus-circle"></i>
        </span>
        <h5 className="title" onClick={this.handleClick}>
          {this.props.idea.title}
        </h5>
        <p className="text" onClick={this.handleClick}>
          {this.props.idea.body}
        </p>
      </div>
    )
  }
}

export default Idea