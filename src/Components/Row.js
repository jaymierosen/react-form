import React from "react";

const Row = props => {
  return (
    <div className="flex-1 w-3/5 flex-1 list-reset">
      <ul className="list-reset">
        {props.submissions.map((submission, i) => (
          <li className="submission-item rounded overflow-hidden border border-zensurance-green px-10 py-12 mx-3" key={submission.id}>
            {/* <input
              name="done"
              type="checkbox"
              checked={submission.done}
              onChange={() => props.onCheck(submission)}
            /> */}
            <div className="block text-left uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Type of Business</div>
            <p className="block text-left tracking-wide text-zensurance-green text-xs mb-2">{submission.value}</p>
            <div className="block text-left uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">VIN Number</div>
            <div className="block text-left uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Vehicle Make</div>
            <div className="block text-left uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Vehicle Model</div>
            <div className="block text-left uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Vehicle Year</div>
            <div className="block text-left uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Vehicle Use</div>
            <div className="block text-left uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">City</div>
            <div className="block text-left uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Province</div>
            <div className="block text-left uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Postal Code</div>
            <button
              className="bg-zensurance-green text-white appearance-none block w-full text-grey-darker border rounded py-3 px-4 leading-tight"
              key={submission.id}
              onClick={() => props.onDelete(submission)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Row;