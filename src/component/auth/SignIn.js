import React, { Component } from 'react';
import {connect} from 'react-redux';
import {signIn} from '../../store/actions/authActions';

class SignIn extends Component {
    state={
        email: '',
        password:''
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.signIn(this.state);
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
        console.log(e);
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Sign In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-3">Sign In</button>
                        <div className="red-text center">
                            {this.props.authError ? <p>Login Failed.</p> : null}
                        </div>
                    </div>
                    
                </form>
                
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log(state);
    return{
        authError: state.auth.authError
    }
}

const mapDispatchToProps =(dispatch)=>{
    return {
        signIn: (creds)=>dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
