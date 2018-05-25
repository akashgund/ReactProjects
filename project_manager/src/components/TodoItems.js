import React, { Component } from 'react';
//import PropTypes from 'prop-types';


class TodoItems extends Component {


   
  render() {
    return (
      <li className="Todo">
      {this.props.todo.id}
      <strong> {this.props.todo.title}</strong>: {this.props.todo.completed}
    
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

export default TodoItems;
