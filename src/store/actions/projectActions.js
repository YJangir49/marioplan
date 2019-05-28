
 export  const createProject = (project) => {

     return(dispatch, getState, {getFirebase, getFirestore})=>{
                 //Async code to database
                 const firestore= getFirestore();
                 firestore.collection('projects').add({
                     ...project,
                     authorFirstname: 'Yogender',
                     authorLastname: 'Jangir',
                     authorId: 49,
                     createdAt: new Date()
                 }) .then(()=>{dispatch({type: 'CREATE_PROJECT', payload:project})})
                    .catch((err)=>{dispatch({type: 'CREATE_PROJECT_ERROR', payload:err})})
                 
     }

}