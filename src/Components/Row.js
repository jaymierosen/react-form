import React from "react";

const Row = props => {
  return (
    <div className="flex-1 w-3/5 flex-1 list-reset">
      <ul className="list-reset">
        {props.submissions.map((submission, i) => (
          <li className="submission-item rounded overflow-hidden border border-zensurance-green mb-6 px-6 py-12 mx-3" key={submission.id}>
            {/* <input
              name="done"
              type="checkbox"
              checked={submission.done}
              onChange={() => props.onCheck(submission)}
            /> */}
            <div className="block text-left uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Type of Business</div>
            <p className="block text-left tracking-wide text-zensurance-green text-xs mb-2">{submission.textField}</p>
            <div className="block text-left uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">VIN Number</div>
            <p className="block text-left tracking-wide text-zensurance-green text-xs mb-2">{submission.vinNumber}</p>
            <div className="block text-left uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Vehicle Make</div>
            <p className="block text-left tracking-wide text-zensurance-green text-xs mb-2">{submission.vehicleMake}</p>
            <div className="block text-left uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Vehicle Model</div>
            <p className="block text-left tracking-wide text-zensurance-green text-xs mb-2">{submission.vehicleModel}</p>
            <div className="block text-left uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Vehicle Year</div>
            <p className="block text-left tracking-wide text-zensurance-green text-xs mb-2">{submission.vehicleYear}</p>
            <div className="block text-left uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Vehicle Use</div>
            <p className="block text-left tracking-wide text-zensurance-green text-xs mb-2">{submission.vehicleUse}</p>
            <div className="block text-left uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Kilometeres</div>
            <p className="block text-left tracking-wide text-zensurance-green text-xs mb-2">{submission.km}</p>
            <div className="block text-left uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">City</div>
            <p className="block text-left tracking-wide text-zensurance-green text-xs mb-2">{submission.city}</p>
            <div className="block text-left uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Province</div>
            <p className="block text-left tracking-wide text-zensurance-green text-xs mb-2">{submission.province}</p>
            <div className="block text-left uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">Postal Code</div>
            <p className="block text-left tracking-wide text-zensurance-green text-xs mb-2">{submission.postalCode}</p>
            <div key={`buttons-${i}`} className="flex">
              <button
                className="bg-zensurance-green text-white appearance-none block w-1\/2 text-grey-darker border rounded py-3 px-4 leading-tight"
                key={`submission.id-1`}
                onClick={() => props.onEdit()}
              >
                {props.edit}
              </button>
              <button
                className="bg-zensurance-green text-white appearance-none block w-1\/2 text-grey-darker border rounded py-3 px-4 leading-tight"
                key={`submission.id-2`}
                onClick={() => props.onDelete(submission)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Row;