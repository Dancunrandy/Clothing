import React from "react";
import './signin.styles.scss';  

import CustomButton from "../custom-button/button.component";
import {auth, signInWithGoogle } from "../../firebase/firebase.utils";

import FormInput from "../form-input/forminput.component";

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            password:'',
            email:''
        }
    }
    
    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state
        
            try {
              await  auth.signInWithEmailAndPassword(email,password);
              this.setState({email:'',password:''});
            } catch (error){
                 console.log(error);
            }
        

    }
    
    handleChange = event => {
        const {value, name} = event.target
        this.setState({[name]:value})
    }
    
    render() {
        return(
            <div className="sign-in">
                <h2>I already have an Account </h2>
                <span>Sign in with an email</span>
                <form onClick={this.handleSubmit}>
                    <FormInput
                    name="email" 
                    type="email" 
                    handleChange={this.handleChange}
                    value={this.state.email}
                    label='Email'
                    required/>
                    <FormInput
                    name="password" 
                    type="password"
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label='Password'
                    required />
                    <div className="buttons">
                    <CustomButton type= "submit">Sign In</CustomButton>
                    
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                             use Gmail
                    </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn