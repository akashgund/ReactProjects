import React, { Component } from 'react';
//import PropTypes from 'prop-types';


class ProjectItems extends Component {


    deleteProject(id)
    {
        this.props.onDelete(id);
    }
  render() {
    return (
      <li className="Project">
      {this.props.project.id}
      <strong> {this.props.project.title}</strong>: {this.props.project.business}<a href="#" onClick={this.deleteProject.bind(this,this.props.project.id)}>Delete Proj</a>
    
      </li>
    );
  }
}
/*
ProjectItems.propTypes={
    project:PropTypes.object,
    ondelete:React.PropTypes.func
}
*/

export default ProjectItems;
