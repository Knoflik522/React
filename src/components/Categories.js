import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state= {
            categories: [
                {
                    key: 'all',
                    name: 'All'
                },
                {
                    key: 'chairs',
                    name: 'Chairs'
                },
                {
                    key: 'tables',
                    name: 'Tables'
                },
                {
                    key: 'beds',
                    name: 'Beds'
                },
                {
                    key: 'sofas',
                    name: 'Sofas'
                },
                {
                    key: 'bookcases',
                    name: 'Bookcases'
                },
                {
                    key: 'loveseats',
                    name: 'Loveseats'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
            {this.state.categories.map(el => (
                <div key={el.key} onClick={() => this.props.chooseCategory(el.key)} >{el.name}</div>
            ))}
         </div>
    )
  }
}

export default Categories