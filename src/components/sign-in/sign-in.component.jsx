import React , {Component} from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth ,SignInWithGoogle} from '../../firebase/firebase.config'
import './sign-in.styles.scss'
class SignIn extends Component{
    constructor(props){
        super(props)
        this.state = {
            email : '',
            password : ''
        }
    }
    handleSubmit = async (event)=>{
        event.preventDefault()
        const{email,password} = this.state
        try{
            await auth.signInWithEmailAndPassword(email,password)
            this.setState({email : '',password : ''})

        }catch(error){
            console.error(error)
        }

    }
    handleChange = (event)=>{
        const {value,name} = event.target;
        this.setState({[name] : value})
    }
    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign In With Email and Password</span>
                <form onSubmit = {this.handleSubmit}>
                    <FormInput name = "email" type="email" value = {this.state.email} required handleChange = {this.handleChange} label = "email"/>
                    <FormInput name = "password"type="password" value = {this.state.password} required handleChange = {this.handleChange} label = "password"/>
                    <div className="buttons">
                    <CustomButton type="submit" value = "Submit Form">Sign In</CustomButton>
                    <CustomButton onClick = {SignInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn