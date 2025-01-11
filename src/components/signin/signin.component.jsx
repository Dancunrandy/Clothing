import React from "react";
import './signin.styles.scss';  

import CustomButton from "../custom-button/button.component";

import FormInput from "../form-input/forminput.component";

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            password:'',
            email:''
        }
    }
    
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'',password:''})

    }
    
    handleChange = event => {
        const {value, name} = event.target
        this.setState({[name]:value})
    }
    
    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account </h2>
                <span>Sign in with an email</span>
                <form onClick={this.handleSubmit}>
                    <FormInput
                    name="email" 
                    type="email" 
                    handleChange={this.handleChange}
                    value={this.state.email}
                    label='email'
                    required/>
                    <FormInput
                    name="password" 
                    type="password"
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    label='password'
                    required />
                    <CustomButton type= "submit">Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn