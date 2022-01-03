import React from "react";
import TopNav from "../top_nav/top_nav";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loginDemo = this.loginDemo.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.login(this.state);
    }

    loginDemo(e) {
        e.preventDefault();
        this.props.login({email: "guest_user@demo.com", password: "password"})
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
                <header>
                    <TopNav />
                </header>

                <div className="login-form">
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
                    <br />
                    <button onClick={this.loginDemo}>Demo User</button>
                </div> 

            </div>
        )
    }
}

export default LoginForm;