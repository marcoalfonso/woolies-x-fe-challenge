import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getProducts, addToCart } from '../../actions/appActions'
import ProductTable from '../../components/ProductTable/ProductTable'

import styles from './Homepage.module.css'

export class Homepage extends Component {
  componentDidMount() {
    this.props.getProducts()
  }

  render() {
    return (
      <div className={styles.productTable}>
        <ProductTable 
          products={this.props.products}
          addToCart={record => this.props.addToCart(record)}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: state.app.products
})

const mapDispatchToProps = dispatch => ({
  getProducts: () => dispatch(getProducts()),
  addToCart: (product) => dispatch(addToCart(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Homepage))
