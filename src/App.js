import React, { Component } from 'react';
import Form from './Components/Form';
import Table from './Components/Table';
import { Title } from './Components/StyledComponents/StyledComponents';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textFieldVal: '',
      submissions: []
    };
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleChangeTextField = this.handleChangeTextField.bind(this);
    this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
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

  // handleInputChange(event) {
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;
  //   this.setState({
  //     [name]: value
  //   });
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      textFieldVal: "",
      submissions: [
        ...this.state.submissions,
        {
          value: this.state.textFieldVal,
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

  delete = currentsubmission => {
    //removes the last submission added in the submissions array
    //     this.state.submissions.splice(submission, 1);
    //     this.setState({
    //       submissions: [...this.state.submissions]
    //     });

    // the above code affects this.state.submissions directly
    // we never want to mutate state without this.setState.
    // Instead, consider filtering out the given submission from the array
    // and set the new filtered array to this.state.submissions
    this.setState((state, props) => {
      const newsubmissionsArr = this.state.submissions.filter(
        submission => submission.id !== currentsubmission.id
      );
      // return state with the newsubmissions array
      // set to submissions.
      return {
        ...state,
        submissions: newsubmissionsArr
      };
    });
  };
  
  // check = currentsubmission => {
  //   this.setState((state) => {
  //     const newsubmissions = state.submissions.map(submission => {
  //       return submission.value === currentsubmission.value
  //         ? { ...submission, done: !submission.done }
  //         : submission;
  //     });
  //     return {
  //       ...state,
  //       submissions: newsubmissions
  //     };
  //   });
  // };

  render() {
    return (
      <div>
        <div className="flex container mx-auto px-4">
        <Title className="flex flex-wrap mx-3 mb-6 py-6 px-3">React Form</Title>
        </div>
        <div className="flex container mx-auto px-4">
          <section className="w-3/5 flex-1 rounded overflow-hidden border border-zensurance-green py-6 mx-3">
            <Form handleInputChange={this.handleInputChange} handleChangeTextField={this.handleChangeTextField} handleChangeTextArea={this.handleChangeTextArea} handleChangeSelect={this.handleChangeSelect} handleSubmit={this.handleSubmit} />
          </section>
          <Table submissions={this.state.submissions} onCheck={this.check} onDelete={this.delete} />
        </div>
      </div>
    );
  }
}

export default App;
