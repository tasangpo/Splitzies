import React from "react";
import TopNav from "../navs/top_nav";

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

    componentDidMount() {
        this.props.removeSessionErrors();
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
                {this.props.errors.map((error, i) => <span id="log-err" key={i}>Whoops! We couldn't find an account for that email address and password. Maybe you’ve forgotten your password</span>)}
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
                    
                    <form id="login-form-container"onSubmit={this.handleSubmit}>
                        <h1 id="login-header">Log in</h1>
                        <br />
                        <label>Email address</label>
                        <input type="text" value={this.state.email} onChange={this.update('email')} />
                        <br />
                        <br />
                        <label>Password</label>
                        <input type="password" value={this.state.password} onChange={this.update('password')} />
                        <br />
                        <br />
                        <button id="log-btn">Log in</button>
                        <br />
                        <button id="demo-btn"onClick={this.loginDemo}>Log in as Demo User</button>
                    </form>
                    <br />
                    
                </div> 

            </div>
        )
    }
}

export default LoginForm;