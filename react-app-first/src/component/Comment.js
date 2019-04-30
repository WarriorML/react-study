import React, { Component } from 'react'

class Comment extends Component {
    render() {
        return (
            <div className='comment'>
                <div className='text-success username'>
                    {this.props.comment.username} : 
                </div>
                <div className="text-primary content">{this.props.comment.content}</div>
            </div>
        )
    }
}

export default Comment