import React from 'react';
import Row from './Row';

const Table = props => {
  return (
    <Row edit={props.edit} submissions={props.submissions} onCheck={props.check} onEdit={props.onEdit} onDelete={props.onDelete} />
  );
}

export default Table;