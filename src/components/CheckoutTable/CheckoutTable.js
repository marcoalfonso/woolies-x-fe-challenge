import React, { Component } from 'react'
import { Table, Button } from 'antd'

import styles from './CheckoutTable.module.css'

export default class CheckoutTable extends Component {
  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: 'Price ($AUD)',
        dataIndex: 'audPrice',
        key: 'audPrice',
      }
    ]

    return (
      <div>
        <Table 
          dataSource={this.props.cart}
          columns={columns}
          bordered
          pagination={false}
          footer={() => {
            return (
              <div className={styles.footer}>
                <span className={styles.total}>{`Total: $ ${this.props.cart && this.props.cart.reduce((n, {audPrice}) => n + audPrice, 0)}`}</span>
                <span>
                  <Button onClick={e => this.props.checkout(this.props.cart)}>Checkout</Button>
                </span>
              </div>
            )
          }}
          locale={{
            emptyText: <div>
              No Products Added To Cart.
            </div>
          }}
        />
      </div>
    )
  }
}
