import React from 'react';
import Row from './Row';

const Table = props => {
  return (
    <Row 
      textFieldVal={props.textFieldVal}
      vinNumberVal={props.vinNumberVal} 
      vehicleMakeVal={props.vehicleMakeVal}
      vehicleModelVal={props.vehicleModelVal}
      vehicleYearVal={props.vehicleYearVal}
      vehicleUseVal={props.vehicleUseVal}
      kmVal={props.kmVal}
      cityVal={props.cityVal}
      provinceVal={props.provinceVal}
      postalCodeVal={props.postalCodeVal} 
      edit={props.edit}
      submissions={props.submissions}
      onCheck={props.check}
      onEdit={props.onEdit}
      onDelete={props.onDelete} 
    />
  );
}

export default Table;