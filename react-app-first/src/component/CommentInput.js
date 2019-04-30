import React, { Component } from 'react'

class CommentInput extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            content: ''
        }
    }
    handleusername(event) {
        this.setState({
            username: event.target.value
        })
    }
    handleContent(event) {
        this.setState({
            content: event.target.value
        })
    }
    handleSubmit() {
        if(this.props.onSubmit){
            const {username,content} = this.state;
            this.props.onSubmit({username,content});
        }
        this.setState({
            username:'',
            content:''
        })
    }
    render() {
        return (
            <div className="form-horizontal">
                <div className="form-group">
                    <label for="username" className="col-sm-2 control-label">用户名</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="username" placeholder="请输入用户名" value={this.state.username} onChange={this.handleusername.bind(this)} />
                    </div>
                </div>
                <div className="form-group">
                    <label for="content" className="col-sm-2 control-label">评论内容</label>
                    <div className="col-sm-10">
                        <textarea id="content" className="form-control" rows="3" placeholder="请输入内容" value={this.state.content} onChange={this.handleContent.bind(this)}></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-default" onClick={this.handleSubmit.bind(this)}>发布</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CommentInput