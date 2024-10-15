import React, { Component } from 'react'

export class Item extends Component {
  render() {
    const priceInUSD = this.props.convertToUSD(this.props.item.price);
    return (
      <div className='item'>
        <img src={"./img/"+this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price} UAH / {priceInUSD} USD</b> 
        <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)} >+</div>
      </div>
    )
  }
}

export default Item