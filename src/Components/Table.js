import React from 'react';
import Row from './Row';

const Table = props => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Text Area</th>
          <th>Email</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
      <Row tasks={props.tasks} onCheck={props.check} onDelete={props.delete} />
      </tbody>
    </table>
  );
}

export default Table;