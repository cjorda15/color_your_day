import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = MAP_API_KEY;

class WeatherMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lat: 40.016457,
      lng: -105.285884,
      zoom: 10
    }
  };

  componentDidMount() {
    const { lat, lng, zoom } = this.state
    let map = new mapboxgl.Map({
      container: this.refs.map,
      style: 'mapbox://styles/mapbox/light-v9',
      center: [lng, lat],
      zoom
    });

    map.addControl(new mapboxgl.NavigationControl());
    map.addControl(new MapboxGeocoder({
        accessToken: mapboxgl.accessToken
    }));

    map.on('move', () => {
      const { lat, lng } = map.getCenter();

      this.setState({
        lat: lat.toFixed(3),
        lng: lng.toFixed(3),
        zoom: map.getZoom().toFixed(1)
      });
    });

    map.on('click', (e) => {
      const {lat,lng} = e.lngLat
      this.props.handleApiCall(lat,lng)
      map.flyTo({center: e.lngLat, zoom: 10})
    });
  };

  render() {
    return (
      <section className="weather-map-container">
        <div id="map-tip"> click on map to get local forecast</div>
        <div ref='map' className='Map-wrapper'></div>
      </section>
    )
  };
};

export default WeatherMap
