import {shallow} from 'enzyme'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import configureMockStore from 'redux-mock-store'
import AppContainer from '../src/content/App/AppContainer'
import fetchMock from 'fetch-mock';
import { expect } from 'chai'
const mapboxgl = require('mapbox-gl');


const jsdom = require("jsdom");
const { JSDOM } = jsdom;
 global.window.document = new JSDOM(``, {
  url: "https://example.org/",
  referrer: "https://example.com/",
  contentType: "text/html",
  userAgent: "Mellblomenator/9000",
  includeNodeLocations: true
});

describe('App', () => {

  it('should be able to render', () => {

    const fakeStore = configureMockStore({})
    const wrapper = shallow(<AppContainer />)
  })

})
