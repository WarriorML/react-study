import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    constructor(){
        super();
        this.state = {
            comments:[]
        }
    }
    submitComment(comment) {
        this.setState({
            comments:this.state.comments.concat(comment)
        })
    }
    render() {
        return (
            <div className="wrapper">
                <CommentInput onSubmit={this.submitComment.bind(this)}/>
                <CommentList comments={this.state.comments} />
            </div>
        )
    }
}

export default CommentApp