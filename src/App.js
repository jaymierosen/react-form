import React, { Component } from 'react';
import Form from './Components/Form';
import Table from './Components/Table';
import { Title } from './Components/StyledComponents/StyledComponents';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textFieldVal: '',
      textAreaVal: '',
      selectVal: 'coconut',
      isGoing: true,
      numberOfGuests: 2,
      tasks: []
    };
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleChangeTextField = this.handleChangeTextField.bind(this);
    this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTextField(e) {
    this.setState({
      textFieldVal: e.target.value
    });
  }
  
  handleChangeTextArea(e) {
    this.setState({
      textAreaVal: e.target.value
    });
  }

  handleChangeSelect(e) {
    this.setState({
      selectVal: e.target.value
    });
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          value: this.state.input,
          done: false,
          id: Math.floor(Math.random() * 10000)
        }
      ]
    });
  }

  validate = () => {
    // Checks data is valid at form level
    // To pass this check neither field can be empty and they must pass field level validation
    const person = this.state.fields;    
    const fieldErrors = this.state.fieldErrors;
    const errMessages = Object.keys(fieldErrors).filter(k => fieldErrors[k]);
    if (!person.name) return true;
    if (!person.email) return true;
    if (!person.course) return true;
    if (!person.department) return true;
    if (errMessages.length) return true;
    return false;
  };

  delete = currentTask => {
    //removes the last task added in the tasks array
    //     this.state.tasks.splice(task, 1);
    //     this.setState({
    //       tasks: [...this.state.tasks]
    //     });

    // the above code affects this.state.tasks directly
    // we never want to mutate state without this.setState.
    // Instead, consider filtering out the given task from the array
    // and set the new filtered array to this.state.tasks
    this.setState((state) => {
      const newTasksArr = this.state.tasks.filter(
        task => task.id !== currentTask.id
      );
      // return state with the newTasks array
      // set to tasks.
      return {
        ...state,
        tasks: newTasksArr
      };
    });
  };
  
  check = currentTask => {
    this.setState((state) => {
      const newTasks = state.tasks.map(task => {
        return task.value === currentTask.value
          ? { ...task, done: !task.done }
          : task;
      });
      return {
        ...state,
        tasks: newTasks
      };
    });
  };

  render() {
    return (
      <div className="container p-12">
        <Title>React Form</Title>
        <Form handleInputChange={this.handleInputChange} handleChangeTextField={this.handleChangeTextField} handleChangeTextArea={this.handleChangeTextArea} handleChangeSelect={this.handleChangeSelect} handleSubmit={this.handleSubmit} />
        <Table tasks={this.state.tasks} onCheck={this.check} onDelete={this.delete} />
      </div>
    );
  }
}

export default App;
