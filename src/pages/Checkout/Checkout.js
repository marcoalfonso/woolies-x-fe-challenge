import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { checkout } from '../../actions/appActions'
import CheckoutTable from '../../components/CheckoutTable/CheckoutTable'

import styles from './Checkout.module.css'

export class Checkout extends Component {
  render() {
    return (
      <div className={styles.checkoutTable}>
        <CheckoutTable 
          cart={this.props.cart}
          checkout={cart => this.props.checkout(cart)}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.app.cart
})

const mapDispatchToProps = (dispatch) => ({
  checkout: (cart) => dispatch(checkout(cart))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Checkout))
