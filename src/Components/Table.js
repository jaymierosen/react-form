import React from 'react';
import Row from './Row';

const Table = props => {
  return (
    <Row textFieldVal={props.textFieldVal} vinNumberVal={props.vinNumberVal} edit={props.edit} submissions={props.submissions} onCheck={props.check} onEdit={props.onEdit} onDelete={props.onDelete} />
  );
}

export default Table;