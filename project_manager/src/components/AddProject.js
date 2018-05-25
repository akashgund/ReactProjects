import React, { Component } from 'react';

import uuid from'uuid';
import PropTypes from 'prop-types';

class AddProject extends Component {

  constructor(){
    super();
    newProject:{

    }
  }

  static defaultProps={
    business:[
     'Web Design', 'Desktop app dev','Mobile app dev'
    ]
  }


  handleSubmit(e)
  {
    e.preventDefault();
   if(this.refs.title.value === '')
   {

  alert("Title is empty")
   }
   else
   {
     this.setState({newProject:{
       id:uuid.v4(),
       title:this.refs.title.value,
       business:this.refs.business.value
     }}, function(){
       this.props.addProject(this.state.newProject);
       
     });
   }
  }
  render() {
    //console.log(this.props);
      let businessOptions = this.props.business.map(businessName =>{
        return <option key={businessName} value={businessName}>{businessName}</option>
      });



    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label> Title</label><br />
            <input type='text' ref="title" />
            </div>
            <div>
              <label>Business Category</label><br/>
                <select ref="business"> 

                  {businessOptions}

                  </select>


              </div>
              <br/>
              <input type="submit" value="Submit"/>
            </form>

      </div>
    );
  }
}


AddProject.propTypes ={
  business:PropTypes.array,
  addProject:PropTypes.func
}


export default AddProject;

