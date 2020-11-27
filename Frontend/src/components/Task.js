import React from 'react';
import apiClient from '../services/api';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks:[],
        };
    }

    

            fetchTasks() {
                if (sessionStorage.getItem('loggedIn')) {
                    apiClient.get('sanctum/csrf-cookie').then(() => apiClient.post('/api/tasks',{milestoneID:this.props.id})
                        .then(response => {
                            const tasks = response.data;
                            this.setState({ tasks: tasks });
                            
                        })
                        .catch(error => console.error(error)
                        ))
        
                }
            }

            componentDidMount(){
             this.fetchTasks();  
            }
handleDeleteTask=(id)=>{
    apiClient.get('sanctum/csrf-cookie')
    .then(() => apiClient.post('/api/deleteTask',{taskId:id}));
                       
          this.fetchTasks();             
        
                
}

    render(){
      
        return(
<div   classsName="row"   >
{this.state.tasks.map((tasks) => {
                                        return (
                                            <div className="col-xl-3 col-md-6 mb-4">
                                                <div className="card border-left-primary shadow h-100 py-2">
                                                <div className="card-body">
                                                        <div className="row no-gutters align-items-center" >
                                                            {/* <div className="col mr-2"> */}
                                                           <div className="col mr-2  m-0 font-weigt-bold text-primary text-uppercase mb-2"> {tasks.taskName}</div>
                                                           <div className="col mr-2  m-0 font-weigt-bold text-primary text-uppercase mb-2"> {tasks.employee.name}</div>
                                                           <div className="col mr-2   m-0 font-weigt-bold text-primary text-uppercase mb-2"> {tasks.percentage}</div>
                                                            <div className="col mr-2">
                                                                <button onClick={() => { this.handleDeleteTask(tasks.id) }}>Delete</button>
                                                        </div>
                                                    </div> </div></div>
                                           </div>
                                              )})}

<button>Add</button>
</div>



        )
    }
}


