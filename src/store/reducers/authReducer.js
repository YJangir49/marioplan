
const initState={
    authError: null
};

const authReducer=(state=initState, action)=>{
    switch(action.type){
        case 'LOGIN_FAILED':
            console.log('Login Error')
            return{
                ...state, authError: 'Login Failed'
            }

        case 'LOGIN_SUCCESS':
            console.log('Login Success')
            return{
                ...state, authError:null
            }

        default:
            return state
        };
}

export default authReducer;