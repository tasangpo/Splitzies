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
                    <ul class="err-list"> 
                        <div id="sign-err">
                            <h3>The following errors occured: </h3>
                            {errors.map(error => <li>{error}</li>)}
                        </div>
                        
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
                <div class="sub-container">
                    {this.props.errors ? this.renderErrors() : ''}
                    <div className="signup-form">
                        <h2>INTRODUCE YOURSELF</h2>
                        <form onSubmit={this.handleSubmit}>
                            <label id="hi-there">Hi there! My name is
                                <br />
                                <input className="sign-input" id="name-input" type="text" value={this.state.name} onInput={() => setTimeout(() => this.reveal(), 100)} onChange={this.update('name')} />
                                <br />
                                <br />
                            </label>
                            <div id="hidden-input" style={{ height: 0, overflow: 'hidden' }} >
                                <label>Here's my <strong className="str">email address:</strong>
                                    <br />
                                    <input className="sign-input" type="text" value={this.state.email} onChange={this.update('email')} />
                                    <br />
                                    <br />
                                </label>
                                <label>And here's my <strong className="str">password:</strong>
                                    <br />
                                    <input className="sign-input" type="password" value={this.state.password} onChange={this.update('password')} />
                                    <br />
                                    <br />
                                </label>
                            </div>
                            <button id="orange-btn">Sign me up!</button>
                        </form>
                    </div>
                </div>


            </div>   
        )
    }
}

export default SignupForm