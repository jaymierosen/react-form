import React from 'react';
// import { Input, TextArea, Select } from './StyledComponents/StyledComponents';

const Form = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="flex flex-wrap mx-6 my-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-password">
            Type of Business:
          </label>
          <input value={props.textFieldVal} onChange={props.handleChangeTextField} className="appearance-none block w-full text-grey-darker border rounded py-3 px-4 leading-tight focus:bg-white focus:border-zensurance-green" id="grid-type-business" type="text" placeholder="Enter Text..." />
        </div>
      </div>
      <div className="flex flex-wrap mx-6 my-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-password">
            VIN Number:
          </label>
          <input value={props.vinNumberVal} onChange={props.handleChangeVinNumber} className="appearance-none block w-full text-grey-darker border rounded py-3 px-4 leading-tight focus:bg-white focus:border-zensurance-green" id="grid-vin" type="text" placeholder="VIN" />
        </div>
      </div>
      <div className="flex flex-wrap mx-6 my-6">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-city">
            Vehicle Make:
          </label>
          <input value={props.vehicleMakeVal} onChange={props.handleVehicleMake} className="appearance-none block w-full text-grey-darker border rounded py-3 px-4 leading-tight focus:bg-white focus:border-zensurance-green" id="grid-make" type="text" placeholder="Make" />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-city">
            Vehicle Model:
          </label>
          <input value={props.vehicleModelVal} onChange={props.handleVehicleModel} className="appearance-none block w-full text-grey-darker border rounded py-3 px-4 leading-tight focus:bg-white focus:border-zensurance-green" id="grid-model" type="text" placeholder="Model" />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-zip">
            Vehicle Year:
          </label>
          <input value={props.vehicleYearVal} onChange={props.handleVehicleYear} className="appearance-none block w-full text-grey-darker border rounded py-3 px-4 leading-tight focus:bg-white focus:border-zensurance-green" id="grid-year" type="text" placeholder="Year" />
        </div>
      </div>
      <div className="flex flex-wrap mx-6 my-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-password">
            What is the vehicle used for?
          </label>
          <input value={props.vehicleUseVal} onChange={props.handleVehicleUse} className="appearance-none block w-full text-grey-darker border rounded py-3 px-4 leading-tight focus:bg-white focus:border-zensurance-green" id="grid-type-business" type="text" placeholder="Enter Text..." />
        </div>
      </div>
      <div className="flex flex-wrap mx-6 my-6">
        <div className="w-full px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-state">
            Approximate number of kilometers driven per year:
          </label>
          <div className="relative">
            <select value={props.kmVal} onChange={props.handleKm} className="block appearance-none w-full border bg-white text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:bg-white focus:border-zensurance-green" id="grid-km">
              <option>0</option>
              <option>10,000</option>
              <option>20,000</option>
              <option>30,000</option>
              <option>40,000</option>
              <option>50,000+</option>
            </select>
            {/* <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div> */}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mx-6 my-6">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-city">
            City:
          </label>
          <input value={props.cityVal} onChange={props.handleCity} className="appearance-none block w-full text-grey-darker border rounded py-3 px-4 leading-tight focus:bg-white focus:border-zensurance-green" id="grid-city" type="text" placeholder="City" />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-province">
            Province:
          </label>
          <select value={props.provinceVal} onChange={props.handleProvince} className="block appearance-none w-full border bg-white text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:bg-white focus:border-zensurance-green" id="grid-province">
            <option>AB</option>
            <option>BC</option>
            <option>ON</option>
            <option>QC</option>
          </select>
          {/* <div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
          </div> */}
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-zip">
            Postal Code:
          </label>
          <input value={props.postalCodeVal} onChange={props.handlePostalCode} className="appearance-none block w-full text-grey-darker border rounded py-3 px-4 leading-tight focus:bg-white focus:border-zensurance-green" id="grid-zip" type="text" placeholder="Postal Code" />
        </div>
        <div className="w-full md:w-1/3 px-3 my-6 mb-6 md:mb-0">
          <input className="bg-zensurance-green text-white appearance-none block w-full text-grey-darker border rounded py-3 px-4 leading-tight focus:border-grey" type="submit" />
        </div>
      </div>
    </form>
  );
}

export default Form;