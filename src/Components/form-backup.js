<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={props.handleSubmit}>
      <div className="flex-col">
        <div className="mb-4">
          <label>
            Name:
            <Input className="block" type="text" value={props.textFieldVal} onChange={props.handleChangeTextField} />
          </label>
        </div>
        <div className="mb-4">
          <label>
            Text area:
            <TextArea className="block" value={props.textAreaVal} onChange={props.handleChangeTextArea} />
          </label>
        </div>
      </div>
      <div className="flex-col">
        <div className="mb-4">
          <label>
            Select an option:
            <Select className="block" value={props.selectVal} onChange={props.handleChangeSelect}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </Select>
          </label>
        </div>
        <div className="mb-4">
          <label className="py-1">
          Is going:
          <Input
            className="block"
            name="isGoing"
            type="checkbox"
            checked={props.isGoing}
            onChange={props.handleInputChange} />
          </label>
        </div>
        <div className="mb-4">
          <label>
            Number of guests:
            <Input
              className="block"
              name="numberOfGuests"
              type="number"
              value={props.numberOfGuests}
              onChange={props.handleInputChange} />
          </label>
        </div>
        <div className="mb-4">
          <Input type="submit" value="Submit" />
        </div>
      </div>
    </form>