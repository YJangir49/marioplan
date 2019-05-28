import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createProject} from '../../store/actions/projectActions'

class CreateProject  extends Component {
    state={
        title: '',
        content:''
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.createProject(this.state);
       // console.log(this.state);
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
                    <h5 className="grey-text text-darken-3">Create New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea  id="content" className="materialize-textarea" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-3">Create</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

const mapStateToProps=(dispatch)=>{
        return({
            createProject: (project)=>dispatch(createProject(project))
        })
}

export default connect(null,mapStateToProps)(CreateProject)
