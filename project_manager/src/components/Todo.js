import React, { Component } from 'react';
import TodoItem from './TodoItems';
import PropTypes from 'prop-types';


class Todos extends Component {

   
    
  render() {
      //console.log(this.props);
    let todoItems;
    //console.log("here"+this.props.projects);
    if(this.props.todos)
    {
       todoItems= this.props.todos.map(todo =>{
            return(
                <TodoItem key={todo.title} todo={todo}/>
            );
        });
    }
    
    return (
      <div className="Todos">
      
       <h3>Todo List</h3>
    {todoItems}
      </div>
    );
  }
}

Todos.propTypes={
    todoItems:PropTypes.array,
   
}


export default Todos;
