import React, { Component } from 'react'
import Idea from './Idea'
import IdeaForm from './IdeaForm'
import Notification from './Notification'
import axios from 'axios'
import update from 'immutability-helper'

class IdeasContainer extends Component {
  
    // initialize the state
    constructor(props) {
        super(props)
        this.state = {
          ideas: [],
          editingIdeaId: null,
          notification: '',
          transitionIn: false
        }
    }
  
    componentDidMount() {
        // AJAX call to the API and store the idea in the component state
        axios.get('http://localhost:3001/api/v1/ideas.json')
        .then(response => {
          console.log(response)
          this.setState({ideas: response.data})
        })
        .catch(error => console.log(error))
    }

    // update() make a new copy of this.state.ideas 
    // $splice command insert the new idea in response.data, at the 0 index of this array.
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

    // immutable update of the idea
    // find the index of the edited idea in the array
    // use the $set command to replace the old value with the new one
    updateIdea = (idea) => {
        const ideaIndex = this.state.ideas.findIndex(x => x.id === idea.id)
        const ideas = update(this.state.ideas, {
          [ideaIndex]: { $set: idea }
        })
        this.setState({
            ideas: ideas,
            notification: 'All changes saved !',
            transitionIn: true
        })
    }

    resetNotification = () => {
        this.setState({
            notification: '', 
            transitionIn: false
        })
    }
     
    // Editing an existing idea
    enableEditing = (id) => {
        this.setState({editingIdeaId: id},
            () => { this.title.focus() })
    }

    deleteIdea = (id) => {
        axios.delete(`http://localhost:3001/api/v1/ideas/${id}`)
        .then(response => {
          const ideaIndex = this.state.ideas.findIndex(x => x.id === id)
          const ideas = update(this.state.ideas, { $splice: [[ideaIndex, 1]]})
          this.setState({ideas: ideas})
        })
        .catch(error => console.log(error))
    }
      

    render() {
        return (
            <div className="container">
                <div>
                    <button className="newIdeaButton" onClick={this.addNewIdea}>
                        <i className="fas fa-plus"></i>  NEW IDEA
                    </button>
                    <Notification in={this.state.transitionIn} notification={this.state.notification} />
                </div>
                <div className="ideas_container">
                    {this.state.ideas.map((idea) => {
                        if(this.state.editingIdeaId === idea.id) {
                            return (<IdeaForm idea={idea} key={idea.id} 
                                updateIdea={this.updateIdea}
                                titleRef= {input => this.title = input} 
                                resetNotification={this.resetNotification} />)
                        } else {
                            return (<Idea idea={idea} key={idea.id}
                                onClick={this.enableEditing}
                                onDelete={this.deleteIdea} />)
                        }    
                    })}
                </div>
            </div>
        )
    }
}

export default IdeasContainer