import React, {Component} from 'react';
import {Form, Button} from 'semantic-ui-react'

export default class Signup extends Component {
    state = {
        first_name: '',
        last_name: '',
        bio: '',
        city:'',
        state:'',
        username: '',
        password: '',
        photoimage:'',

    }

    // add confirm password again

    handleChange = (e) => {
      console.log("",e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return (
          <div className="center">
            <div className="login-form">
              <h2>Make an account!</h2>
                <Form onChange={this.handleChange} onSubmit={(e) => this.props.handleSignup(e, this.state)}>
                    <Form.Field>
                        <label>First Name</label>
                        <input name="first_name"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Last Name</label>
                        <input name="last_name"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Little Bio</label>
                        <textarea name="bio"/>
                    </Form.Field>

                    <Form.Field>
                        <label>City</label>
                        <input name="city"/>
                    </Form.Field>
                    <Form.Field>
                        <label>State</label>
                        <input name="state"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Image Url</label>
                        <input name="photoimage"/>
                    </Form.Field>
                        <Button type='submit' className="login-button">Submit</Button>
                </Form>
            </div>
            </div>
        )
    }
}
// <Form.Field>
//     <label>Username</label>
//     <input name="username"/>
// </Form.Field>
// <Form.Field>
//     <label>Password</label>
//     <input type='password' name="password"/>
// </Form.Field>
