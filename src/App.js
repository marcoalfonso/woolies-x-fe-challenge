import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Routes from './Routes'

import 'antd/dist/antd.css'
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="nav-wrapper woolies-green-button">
            <a href="/" class="brand-logo"><img src="https://wooliesxfechallenge.azurewebsites.net/static/logo" alt="woolies-logo" height="64px"/></a>
          </div>
        </header>
        <ToastContainer autoClose={4000} />
        <Routes />
      </div>
    )
  }
}

export default withRouter(App);
