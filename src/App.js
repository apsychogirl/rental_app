import React, {Component} from 'react';
import './App.css';
import ReactSearchBox from 'react-search-box';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

export default class App extends Component {
  constructor (props) {
    super (props);
    this.state = {};
  }
  data = [
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

  componentDidMount () {
    navigator.geolocation.getCurrentPosition (function (position) {
      console.log ('Latitude is :', position.coords.latitude);
      console.log ('Longitude is :', position.coords.longitude);
    });
  }

  render () {
    const country = ['India', 'Nepal', 'Bhutan'];
    const state = ['Delhi', 'Bangalore', 'Mumbai'];
    const city = ['New Delhi', 'Cannaught Place', 'Mehrauli'];
    const apt = ['Sobha square', 'Prestige Lake Ridge', 'Provident Woodfield'];

    return (
      <div>
        <div style={{color: 'red'}}>
          <Dropdown
            options={country}
            onChange={this._onSelect}
            value={country[0]}
            placeholder="Select a Country"
          />

          <Dropdown
            options={state}
            onChange={this._onSelect}
            value={state[0]}
            placeholder="Select a state"
          />

          <Dropdown
            options={city}
            onChange={this._onSelect}
            value={city[0]}
            placeholder="Select a city"
          />
        </div>

        <ReactSearchBox
          placeholder="Random Search"
          value="Doe"
          data={this.data}
          callback={record => console.log (record)}
        />

        <Dropdown
          options={apt}
          onChange={this._onSelect}
          value={apt[0]}
          placeholder="Select an apartment"
        />
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}
