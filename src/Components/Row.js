import React from "react";
// import ReactDOM from "react-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Row = props => {
  return (
    <tr>
      {/* <span>{props.tasks.length}</span> */}
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <ul>
          {props.tasks.map((task, i) => (
            <li className="task-item" key={task.id}>
              <input
                name="done"
                type="checkbox"
                checked={task.done}
                onChange={() => props.onCheck(task)}
              />
              {task.value}
              <button
                key={task.id}
                onClick={() => props.onDelete(task)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </ReactCSSTransitionGroup>
    </tr>
  );
}

export default Row;