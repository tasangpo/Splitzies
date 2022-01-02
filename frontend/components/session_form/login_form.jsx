import React from "react";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
    }

    update(field) {
        return e => this.setState({[field] : e.currentTarget.value})
    }

    renderError() {
        return (
            <ul>
                {this.props.errors.map((error, i) => <span key={i}>Whoops! We couldn’t find an account for that email address and password. Maybe you’ve forgotten your password</span>)}
            </ul>
        )
    }

    render() {
        return (
            <div>
                {this.props.errors ? this.renderError() : ''}
                <h1>Log in</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Email address</label>
                        <br />
                            <input type="text" value={this.state.email} onChange={this.update('email')} />
                        <br />
                    <br />
                    <label>Password</label>
                        <br />
                            <input type="password" value={this.state.password} onChange={this.update('password')} />
                        <br />
                    <br />
                    <button>Log in</button>    
                </form>
            </div>
        )
    }
}

export default LoginForm;