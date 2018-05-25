import React, { Component } from 'react';

import Projects from './components/projects';
import $ from 'jquery';
import Todos from './components/Todo';
import AddProject from './components/AddProject';
import uuid from 'uuid';
import Todo from './components/Todo';
class App extends Component {


  constructor(){
    super();
    this.state={
      projectList:[
        
      ],
      todos:[]
    }
  }

  getToDos()
  {
    $.ajax({
      url:'https://jsonplaceholder.typicode.com/todos',
      dataType:'json',
      cache:false,
      success:function(data){
          this.setState({todos:data},function(){
            console.log(this.state);
          })
      }.bind(this),
      error: function(xhr,ststus,err){
        console.log(err);
      }
    });

  }
getProjects()
{
  this.setState({projectList:[
    {
      id:uuid.v4(),
      title:'web dev',
      business:'dev websites'

    },

    {
      id:uuid.v4(),
      title:'IOS',
      business:'mobile app dev'

    },

    {
      id:uuid.v4(),
      title:'desktop application sys',
      business:'desktop applications dev'

    }
  ]});

}
  componentWillMount(){
    this.getProjects();
       this.getToDos();
       

  }


  componentDidMount()
  {
this.getToDos();

  }


  handleAddProject(project){
    let projectList = this.state.projectList;
    projectList.push(project);
    this.setState({projects:projectList});
  }

  handleDeleteProject(id){
    let projectList = this.state.projectList;
    let index = projectList.findIndex(x=>x.id===id);
    projectList.splice(index,1);
    this.setState({projects:projectList});
  }
  render() {
    return (
      <div className="App">
      
       <AddProject  addProject={this.handleAddProject.bind(this)} />
       <Projects projects={this.state.projectList} onDelete={this.handleDeleteProject.bind(this)}/>
        <hr/>
        <Todo todos={this.state.todos}/>
      
      </div>
    );
  }
}

export default App;
