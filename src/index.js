import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import { configureStore } from './configStore'
import App from './content/App/AppContainer'
import './styles/main.css';

const store = configureStore()

ReactDOM.render(
  <Provider store= { store }>
    <App/>
  </Provider>  ,
  document.getElementById('root')
)
