import React, { Component } from 'react'
import axios from 'axios'

class IdeaForm extends Component {
    // initialize the state values from the Idea prop that it receives from IdeasContainer:
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.idea.title,
            body: this.props.idea.body
        }
    }

    handleInput = (e) => {
        this.props.resetNotification()
        this.setState({[e.target.name]: e.target.value})
    }

    handleBlur = () => {
        const idea = {
          title: this.state.title,
          body: this.state.body
        }
        let config = { headers: {}}
        let jwt = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjo0LCJleHAiOjE1MzUwNDgwMTF9.Rkg1ImiIER-QO5p4-jD6bv6X1tYbidfiOo-ki5OeJmw'

        config['headers']['Authorization'] = 'Bearer ' + jwt
        axios.put(
          `http://localhost:3001/api/v1/ideas/${this.props.idea.id}`, config,
          {
            idea: idea
          })
        .then(response => {
          console.log(response)
          this.props.updateIdea(response.data)
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <div className="tile">
                <form onBlur={this.handleBlur} >
                    <input className='input' type="text"
                        name="title" placeholder='New Idea' 
                        value={this.state.title} onChange={this.handleInput}
                        ref={this.props.titleRef} />
                    <textarea className='input' name="body"
                        placeholder='A few details'
                        value={this.state.body} onChange={this.handleInput}>
                    </textarea>
                </form>
            </div>
        );
    }
}

export default IdeaForm