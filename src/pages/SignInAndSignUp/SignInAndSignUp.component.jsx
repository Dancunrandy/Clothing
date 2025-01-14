import React from "react";

import SignIn from "../../components/signin/signin.component";
import './SignInAndSignUp.styles.scss';
import Signup from "../../components/signup/signup.component";

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn/>
        <Signup/>
    </div>
)

export default SignInAndSignUpPage;