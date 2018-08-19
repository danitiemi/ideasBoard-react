import React, { Component } from 'react'
import Idea from './Idea'
import axios from 'axios'
import update from 'immutability-helper'

class IdeasContainer extends Component {
  
    // initialize the state
    constructor(props) {
        super(props)
        this.state = {
          ideas: [],
          editingIdeaId: null
        }
    }
  
    componentDidMount() {
        axios.get('http://localhost:3001/api/v1/ideas.json')
        .then(response => {
          console.log(response)
          this.setState({ideas: response.data})
        })
        .catch(error => console.log(error))
    }

    //  make a new copy of this.state.ideas and 
    // $splice command insert the new idea in response.data, at the 0th index of this array.
    addNewIdea = () => {
        axios.post(
          'http://localhost:3001/api/v1/ideas',
          { idea:
            {
              title: '',
              body: ''
            }
          }
        )
        .then(response => {
            console.log(response)
            const ideas = update(this.state.ideas, {
                $splice: [[0, 0, response.data]]
            })
            this.setState({
                ideas: ideas,
                editingIdeaId: response.data.id
            })
        })
        .catch(error => console.log(error))
    }
  
    render() {
    return (
      <div>
        <div>
          <button className="newIdeaButton"
            onClick={this.addNewIdea}>
            New Idea
          </button>
        </div>
        {this.state.ideas.map((idea) => {
            return(
                <Idea idea={idea} key={idea.id} />
            )       
        })}
      </div>
    )
  }
}

export default IdeasContainer