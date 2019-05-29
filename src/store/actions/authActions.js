
export const signIn =(crendentials)=>{
    return(dispatch, getState, {getFirebase}) =>{
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            crendentials.email,
            crendentials.password
        ) .then(()=>{
            dispatch({type: 'LOGIN_SUCCESS'});
        }).catch((err)=>{
            dispatch({type: 'LOGIN_FAILED', payload: err});
        });
    }
} 

export const signOut =()=>{
    return(dispatch, getState, {getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=>{
            dispatch({type: 'SIGNOUT_SUCCESS'});
        })
    }
}