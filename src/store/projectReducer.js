
const initState={
    projects: [
        {id:'1' , title:'Roger That', content:'This is a CS GO CounternTerrerists Command' },
        {id:'2' , title:'Help me!', content:'This is a Quick Chat in PUBG mobile Game' },
        {id:'3' , title:'Divine', content:'This is a Divine move in Candy Crush Saga' }
    ]
};

const projectReducer=(state=initState, action)=>{
    return state;
}

export default projectReducer;