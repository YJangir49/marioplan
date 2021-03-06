import React from 'react'

const ProjectSummary=({project})=>{
    return(
        <div className="card zz-depth-1 project-summary">    
            <div className="card-content grey-text text-darken-3">
                <span className="card-title"> {project.title}</span>
                <p> Posted by Mario</p>
                <p className="grey-text">Sep 3, 2am</p>
            </div>
        </div>
    )
}

export default  ProjectSummary