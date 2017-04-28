import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class WeatherList extends React.Component {
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp)

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Sparklines data={temps} width={180} height={120} margin={5}>
            <SparklinesLine color="purple" />
          </Sparklines>
        </td>
      </tr>

    );
  }

  render(){
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}


function mapStateToProps({ weather }){
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
