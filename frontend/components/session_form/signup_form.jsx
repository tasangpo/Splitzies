import React from "react";
import { Link } from "react-router-dom";



class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    // remove errors from previous attempts
    componentWillUnmount() {
        this.props.removeSessionErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signup(this.state);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    renderErrors() {
        const { errors } = this.props
        return (
            <div>
                {errors.length > 0 ?
                    <ul>
                        <h3>The following errors occured: </h3>
                        {errors.map(error => <li>{error}</li>)}
                    </ul>
                    : ""}
            </div>

        )
    }

    reveal() {
        document.getElementById('hidden-input').style.height = "auto";
    }

    render() {
        return (
            <div className="signup-container">
                <div className="logo-div">
                    <Link to="/"><img src={window.logo} alt="logo_image" id="logo-img"/></Link>
                </div>
                <div className="signup-form">
                    {this.props.errors ? this.renderErrors() : ''}
                    <h2>INTRODUCE YOURSELF</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label>Hi there! My name is
                            <br />
                            <input type="text" value={this.state.name} onInput={() => setTimeout(() => this.reveal(), 100)} onChange={this.update('name')} />
                            <br />
                            <br />
                        </label>
                        <div id="hidden-input" style={{ height: 0, overflow: 'hidden' }} >
                            <label>Here's my <strong>email address:</strong>
                                <br />
                                <input type="text" value={this.state.email} onChange={this.update('email')} />
                                <br />
                                <br />
                            </label>
                            <label>And here's my <strong>password:</strong>
                                <br />
                                <input type="password" value={this.state.password} onChange={this.update('password')} />
                                <br />
                                <br />
                            </label>
                        </div>
                        <button>Sign me up!</button>
                    </form>  
                </div>

            </div>   
        )
    }
}

export default SignupForm