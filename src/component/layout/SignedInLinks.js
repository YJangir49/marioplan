import React from 'react';
import {NavLink} from 'react-router-dom';
import {signOut} from '../../store/actions/authActions';
import {connect} from 'react-redux';
 
const SignedInLinks =(props)=>{
       return(
           <ul className="right">
                <li> <NavLink to='/create'> New Project</NavLink></li>
                <li> <a onClick={props.signOut}> Log Out</a></li>
                <li> <NavLink to='/' className="btn btn-floating purple lighten-1">MP</NavLink></li>
           </ul>
       )
}

const mapDispatchToProps=(dispatch) =>{
    return{
        signOut: ()=>dispatch(signOut())
    }

}

export default connect(null, mapDispatchToProps)(SignedInLinks);