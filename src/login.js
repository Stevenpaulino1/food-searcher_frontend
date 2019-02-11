import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return (
            <div className="login-form">
                <Form onSubmit={(e) => this.props.handleSubmit(e, this.state)} onChange={this.handleChange}>
                    <Form.Field>
                        <label>Username</label>
                        <input placeholder='Username' name="username" />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input placeholder='Password' name='password'type="password"/>
                    </Form.Field>
                        <Button type='submit' className="login-button">Submit</Button>
                </Form>
            </div>
        )
    }
}

export default Login
