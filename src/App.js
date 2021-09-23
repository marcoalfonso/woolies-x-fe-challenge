import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { Badge, Avatar, Tooltip } from 'antd'
import Routes from './Routes'

import 'antd/dist/antd.css'
import './App.css';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <div className="nav-wrapper woolies-green-button">
          <Link to="/">
            <img src="https://wooliesxfechallenge.azurewebsites.net/static/logo" alt="woolies-logo" height="64px"/>
          </Link>
          </div>
          <span className="counter">
            <Tooltip placement="bottomRight" title="Go to Checkout">
              <Link to="/checkout">
                <Badge count={this.props.cart.length}>
                  <Avatar shape="square" icon="shopping-cart" style={{background: 'green'}} />
                </Badge>
              </Link>
            </Tooltip>
          </span>
        </header>
        <ToastContainer autoClose={4000} />
        <Routes />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.app.cart
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
