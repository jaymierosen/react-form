import React from 'react';

const Form = props => {
  return (
    <form className="py-12" onSubmit={props.handleSubmit}>
      <div>
        <label>
          Name:
          <input className="block" type="text" value={props.textFieldVal} onChange={props.handleChangeTextField} />
        </label>
      </div>
      <div>
        <label>
          Text area:
          <textarea className="block" value={props.textAreaVal} onChange={props.handleChangeTextArea} />
        </label>
      </div>
      <div>
        <label>
          Select an option:
          <select className="block" value={props.selectVal} onChange={props.handleChangeSelect}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
      </div>
      <div>
        <label>
        Is going:
        <input
          className="block"
          name="isGoing"
          type="checkbox"
          checked={props.isGoing}
          onChange={props.handleInputChange} />
        </label>
      </div>
      <div>
        <label>
          Number of guests:
          <input
            className="block"
            name="numberOfGuests"
            type="number"
            value={props.numberOfGuests}
            onChange={props.handleInputChange} />
        </label>
      </div>
      <div>
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default Form;