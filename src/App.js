import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Hello,react
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

class CommentInput extends Component {
    constructor() {
        super();
        this.state = {
            username: '1',
            comment: '2'
        }
    }

    handleUsername = function (event) {
        this.setState({
            username: event.target.value
        })
    }

    handleComment = function (event) {
        this.setState({
            comment: event.target.value
        })
    }

    handleSubmit() {
        if (this.props.onSubmit) {
            const {username, comment} = this.state;
            this.props.onSubmit({username, comment})
            this.setState({
                username: '',
                comment: ''
            })
        }
    }

    componentDidMount() {
        console.log(this.textarea)
        this.textarea.focus()
    }

    render() {
        return (<div style={{marginBottom: '40px'}}>
            <div>
                <label className="input-label" htmlFor="username">用户名：</label>
                <input className="username-input" value={this.state.username} onChange={this.handleUsername.bind(this)}
                       type="text" id="username"/>
            </div>
            <div className="comment-input">
                <label className="input-label" style={{verticalAlign: "top"}} htmlFor="comment">评论内容：</label>
                <textarea value={this.state.comment} onChange={this.handleComment.bind(this)} id="comment" cols="40"
                          rows="10" ref={textarea => this.textarea = textarea}></textarea>
            </div>
            <div className="confirm-btn" onClick={this.handleSubmit.bind(this)}>发布</div>
        </div>)
    }
}

class CommentApp extends Component {
    constructor() {
        super();
        this.state = {
            commentArr: [],
        }
    }


    onsubmit(value) {
        if (!value.username || !value.comment) {
            return;
        }
        this.state.commentArr.push(value)
        this.setState({
            commentArr: this.state.commentArr
        })
    }

    render() {
        console.log(this.state.commentArr)
        return (
            <div className={'app-container'}>
                <CommentInput
                    onSubmit={this.onsubmit.bind(this)}
                ></CommentInput>
                <p dangerouslySetInnerHTML={{__html: `<code>console.log</code>`}}></p>
                {this.state.commentArr.map((comment, index) => {
                    return <CommentContent key={index} comment={comment}></CommentContent>
                })}
            </div>
        )
    }
}

class CommentContent extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={"comment-content-container"}>
                <span className="username-container">{this.props.comment.username}</span>
                ；
                <span>{this.props.comment.comment}</span>
            </div>
        )
    }
}

class Clock extends Component {

    constructor() {
        super();
        this.state = {
            date: new Date(),
            name: '1'
        }
        console.log(this.state.date)
    }

    componentWillMount() {
        this.timer = setInterval(() => {
            this.setState({date: new Date()})
        },1000)
    }

    render() {
        return (
            <div>
                <h1>现在的时间是</h1>
                {this.state.date.toLocaleTimeString()}
            </div>
        )
    }
}

// export default Clock;

export default CommentApp;

