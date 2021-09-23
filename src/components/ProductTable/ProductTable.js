import React, { Component } from 'react'
import { Table, Button } from 'antd'

export default class ProductTable extends Component {
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
        title: 'Price (AUD)',
        dataIndex: 'audPrice',
        key: 'audPrice',
      },
      {
        title: '',
        dataIndex: 'addToCart',
        key: 'addToCart',
        width: '75px',
        render: (text, record, index) => {
          return (
            <Button onClick={e => this.props.addToCart(record)}>Add To Cart</Button>
          )
        }
      }
    ]

    return (
      <div>
        <Table 
          dataSource={this.props.products} 
          columns={columns} 
          bordered
          locale={{
            emptyText: <div>
              No Products Available.
            </div>
          }}
        />
      </div>
    )
  }
}
