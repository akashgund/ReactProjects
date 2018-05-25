import React, { Component } from 'react';
import ProjectItem from './ProjectItems';
import PropTypes from 'prop-types';


class Projects extends Component {

    deleteProject(id)
    {
        this.props.onDelete(id);
    }
    
  render() {
      //console.log(this.props);
    let projectItems;
    //console.log("here"+this.props.projects);
    if(this.props.projects)
    {
        projectItems= this.props.projects.map(project =>{
            return(
                <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project}/>
            );
        });
    }
    
    return (
      <div className="Projects">
      
       <h3>Latest Projects</h3>
    {projectItems}
      </div>
    );
  }
}

Projects.propTypes={
    projectItems:PropTypes.array,
    onDelete: PropTypes.func
}


export default Projects;
