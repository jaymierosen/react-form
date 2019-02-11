import React, { Component } from 'react';
import Form from './Components/Form';
import Table from './Components/Table';
import { Title } from './Components/StyledComponents/StyledComponents';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textFieldVal: '',
      vinNumber: '',
      vehicleMake: '',
      vehicleModel: '',
      vehicleYear: '',
      vehicleUse: '',
      km: '',
      city: '',
      province: '',
      postalCode: '',
      submissions: [],
      edit: 'Edit'
    };
    this.handleChangeTextField = this.handleChangeTextField.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTextField(e) {
    this.setState({
      textFieldVal: e.target.value,
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
          textField: this.state.textFieldVal,
          done: false,
          id: Math.floor(Math.random() * 10000)
        }
      ]
    });
  }

  onEdit = currentSubmission => {
    this.setState((state, props) => {
      const submission = state.submissions.map(submission => {
        return submission.textField
      });
      return {
        ...state,
        textFieldVal: submission,
        edit: 'Save'
      };
    });
  }

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

  render() {
    return (
      <div>
        <div className="container mx-auto my-4 px-4">
        <Title className="text-center">React Form</Title>
        </div>
        <div className="flex container mx-auto px-4">
          <section className="w-3/5 flex-1 rounded overflow-hidden border border-zensurance-green py-6 mx-3">
            <Form textFieldVal={this.state.textFieldVal} handleInputChange={this.handleInputChange} handleChangeTextField={this.handleChangeTextField} handleChangeTextArea={this.handleChangeTextArea} handleChangeSelect={this.handleChangeSelect} handleSubmit={this.handleSubmit} />
          </section>
          <Table edit={this.state.edit} submissions={this.state.submissions} onCheck={this.check} onDelete={this.delete} onEdit={this.onEdit} />
        </div>
      </div>
    );
  }
}

export default App;
