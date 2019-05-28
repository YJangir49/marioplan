
 export  const createProject = (project) => {

     return(dispatch)=>{
                 //Async code to database
                 dispatch({type: 'CREATE_PROJECT', payload:project});
     }

}