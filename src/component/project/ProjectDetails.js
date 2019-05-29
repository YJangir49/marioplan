import React from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

const ProjectDetails =(props)=>{
    if(props.project){
        return(
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{props.project.title}</span>
                        <p>{props.project.content}</p>
                    </div>
                    <div className="card-action gret lighten-3 grey-text">
                        <div> Posted By {props.project.authorFirstname} {props.project.authorLastname}</div>
                        <div> 16 Aprail, 3am</div>
                    </div>
                </div>
            </div>
        )    
    }
    else{

        return(
            <div className="container center">
                <p>Loading....</p>
            </div>
        )
    }
}

const mapStateToProps=(state,ownProps)=>{
    const id = ownProps.match.params.id;
    const projects = state.firestore.data.projects;
    const project = projects ? projects[id] : null ;
    
    return{
        project: project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects'}])
)(ProjectDetails)