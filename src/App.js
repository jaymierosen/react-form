import React, { Component } from 'react';
import Form from './Components/Form';
import Table from './Components/Table';
import { Title } from './Components/StyledComponents/StyledComponents';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textFieldVal: '',
      vinNumberVal: '',
      vehicleMakeVal: '',
      vehicleModelVal: '',
      vehicleYearVal: '',
      vehicleUseVal: '',
      kmVal: '',
      cityVal: '',
      provinceVal: '',
      postalCodeVal: '',
      submissions: [],
      edit: 'Edit'
    };
    this.handleChangeTextField = this.handleChangeTextField.bind(this);
    this.handleChangeVinNumber = this.handleChangeVinNumber.bind(this);
    this.handleVehicleMake = this.handleVehicleMake.bind(this);
    this.handleVehicleModel = this.handleVehicleModel.bind(this);
    this.handleVehicleYear = this.handleVehicleYear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeTextField(e) {
    this.setState({
      textFieldVal: e.target.value
    });
  }

  handleChangeVinNumber(e) {
    this.setState({
      vinNumberVal: e.target.value
    });
  }

  handleVehicleMake(e) {
    this.setState({
      vehicleMakeVal: e.target.value
    });
  }

  handleVehicleModel(e) {
    this.setState({
      vehicleModelVal: e.target.value
    })
  }

  handleVehicleYear(e) {
    this.setState({
      vehicleYearVal: e.target.value
    })
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
      vinNumberVal: "",
      submissions: [
        ...this.state.submissions,
        {
          textField: this.state.textFieldVal,
          vinNumber: this.state.vinNumberVal,
          done: false,
          id: Math.floor(Math.random() * 10000)
        }
      ]
    });
  }

  onEdit = currentsubmission => {
    this.setState((state, props) => {
      const submission = state.submissions.map((submission) => {
        return submission.textField;
      });
      if(this.state.edit === 'Save'){
        return {
          ...state,
          textFieldVal: submission,
          edit: 'Edit'
        };
      } else {
        return {
          ...state,
          textFieldVal: submission,
          edit: 'Save'
        };
      }
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
            <Form textFieldVal={this.state.textFieldVal} vinNumberVal={this.state.vinNumberVal} handleInputChange={this.handleInputChange} handleChangeTextField={this.handleChangeTextField} handleChangeTextArea={this.handleChangeTextArea} handleChangeSelect={this.handleChangeSelect} handleSubmit={this.handleSubmit} />
          </section>
          <Table edit={this.state.edit} submissions={this.state.submissions} onCheck={this.check} onDelete={this.delete} onEdit={this.onEdit} />
        </div>
      </div>
    );
  }
}

export default App;
