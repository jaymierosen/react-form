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
    this.handleVehicleUse = this.handleVehicleUse.bind(this);
    this.handleKm = this.handleKm.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleProvince = this.handleProvince.bind(this);
    this.handlePostalCode = this.handlePostalCode.bind(this);
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

  handleVehicleUse(e) {
    this.setState({
      vehicleUseVal: e.target.value
    })
  }

  handleKm(e) {
    this.setState({
      kmVal: e.target.value
    })
  }

  handleCity(e) {
    this.setState({
      cityVal: e.target.value
    })
  }

  handleProvince(e) {
    this.setState({
      provinceVal: e.target.value
    })
  }

  handlePostalCode(e) {
    this.setState({
      postalCodeVal: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
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
      submissions: [
        ...this.state.submissions,
        {
          textField: this.state.textFieldVal,
          vinNumber: this.state.vinNumberVal,
          vehicleMake: this.state.vehicleMakeVal,
          vehicleModel: this.state.vehicleModelVal,
          vehicleYear: this.state.vehicleYearVal,
          vehicleUse: this.state.vehicleUseVal,
          km: this.state.kmVal,
          city: this.state.cityVal,
          province: this.state.provinceVal,
          postalCode: this.state.postalCodeVal,
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
            <Form 
              textFieldVal={this.state.textFieldVal}
              vinNumberVal={this.state.vinNumberVal} 
              vehicleMakeVal={this.state.vehicleMakeVal}
              vehicleModelVal={this.state.vehicleModelVal}
              vehicleYearVal={this.state.vehicleYearVal}
              vehicleUseVal={this.state.vehicleUseVal}
              kmVal={this.state.kmVal}
              cityVal={this.state.cityVal}
              provinceVal={this.state.provinceVal}
              postalCodeVal={this.state.postalCodeVal}
              handleChangeTextField={this.handleChangeTextField}
              handleChangeVinNumber={this.handleChangeVinNumber}
              handleVehicleMake={this.handleVehicleMake}
              handleVehicleModel={this.handleVehicleModel}
              handleVehicleYear={this.handleVehicleYear}
              handleVehicleUse={this.handleVehicleUse}
              handleKm={this.handleKm}
              handleCity={this.handleCity}
              handleProvince={this.handleProvince}
              handlePostalCode={this.handlePostalCode}
              handleSubmit={this.handleSubmit}
            />
          </section>
          <Table 
            edit={this.state.edit}
            submissions={this.state.submissions}
            onCheck={this.check}
            onDelete={this.delete}
            onEdit={this.onEdit}
          />
        </div>
      </div>
    );
  }
}

export default App;
