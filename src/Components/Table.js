import React from 'react';
import Row from './Row';

const Table = props => {
  return (
    <Row submissions={props.submissions} onCheck={props.check} onDelete={props.onDelete} />
  );
}

export default Table;