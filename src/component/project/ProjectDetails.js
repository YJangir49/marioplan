import React from 'react'

const ProjectDetails =(props)=>{
    const id=props.match.params.id;
    return(
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Mario Plan- {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate rerum esse qui commodi aliquid nulla eos labore. Voluptate aut, a similique, aspernatur deleniti harum officiis eaque in fugiat doloribus voluptatibus.</p>
                </div>
                <div className="card-action gret lighten-3 grey-text">
                    <div> Posted By Mario</div>
                    <div> 16 Aprail, 3am</div>
                </div>
            </div>
        </div>
    )
}


export default ProjectDetails