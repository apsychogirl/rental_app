import React, {Component} from 'react';
import Select from '../components/Select';
import './form.css';

const initialState = {
  country: '',
  state: '',
  city: '',
  random: '',
  apt: '',
};

const Fakedata = [
  {
    key: 'john',
    value: 'John Doe',
  },
  {
    key: 'jane',
    value: 'Jane Doe',
  },
  {
    key: 'mary',
    value: 'Mary Phillips',
  },
  {
    key: 'robert',
    value: 'Robert',
  },
  {
    key: 'karius',
    value: 'Karius',
  },
];

class Form extends Component {
  data = Fakedata;
  state = initialState;

  handleChange = ({name, value}) => this.setState ({[name]: value});

  handleClear = () => this.setState (initialState);

  handleSubmit = e => {
    e.preventDefault ();
    alert (JSON.stringify (this.state, null, 4));
    // alert ('Submitted!');
  };

  //geolocation

  componentDidMount () {
    navigator.geolocation.getCurrentPosition (function (position) {
      console.log ('Latitude is :', position.coords.latitude);
      console.log ('Longitude is :', position.coords.longitude);
    });
  }
  render = () => (
    <form onSubmit={this.handleSubmit} className="form-container">
      <h1 style={{textAlign: 'center'}}>Rental App</h1>
      <div className="left">
        <Select
          name="random"
          label="Random"
          placeholder="near me"
          value={this.state.random} //from geolocation
          handleChange={this.handleChange}
          selectOptions={['A', 'P', 'B', 'D', 'F']} //geolocation
          isSearchable
        />
        <Select
          label="Country"
          name="country"
          value={this.state.country} //from geolocation
          placeholder="Type your Country"
          handleChange={this.handleChange}
          selectOptions={['India', 'Nepal', 'Bhutan', 'Bangladesh']}
        />
        <Select
          name="state"
          label="State"
          placeholder="type your State"
          value={this.state.state} //from geolocation
          handleChange={this.handleChange}
          selectOptions={['Delhi', 'Maharashtra', 'Karnataka']}
          isSearchable
        />

        <Select
          name="city"
          label="City"
          placeholder="type your city"
          value={this.state.city} //from geolocation
          handleChange={this.handleChange}
          selectOptions={['New Delhi', 'CP', 'Geeta Colony']}
          isSearchable
        />

      </div>
      <Select
        name="apt"
        label="Apartment"
        placeholder="Apartments near me"
        value={this.state.apt} //from geolocation
        handleChange={this.handleChange}
        selectOptions={['A1', 'A2', 'A3', 'A4', 'A5']} //geolocation
        isSearchable
      />
      {/* 
      <Select
        name="saves"
        placeholder="(not searchable, no label, no icon)"
        value={this.state.saves}
        handleChange={this.handleChange}
        selectOptions={['Save Percentage', 'Save Frequency', 'Total Saves']}
        showIcon={false}
      /> */}

      <div className="button-container">
        <button type="submit" className="btn submit">
          Submit
        </button>
        <button type="button" onClick={this.handleClear} className=" btn clear">
          Clear
        </button>
      </div>
    </form>
  );
}

export default Form;
