import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import ShowFullItem from './components/ShowFullItem';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Hendrix Velvet Barrel Chair',
          img: 'hendrix-velvet-barrel-chair.webp',
          desc: 'This accent chair features an arched, vertical channel tufted back, smooth circular seat, and shiny gold-toned legs.',
          category: 'chairs',
          price: '77.9'
        },
        {
          id: 2,
          title: 'Ameire Upholstered Wingback Bed ',
          img: 'Ameire+Upholstered+Wingback+Bed.webp',
          desc: 'Enhance your bedroom with this tufted upholstered panel bed to bring your bedroom an elegant and contemporary style.',
          category: 'beds',
          price: '5030.25'
        },
        {
          id: 3,
          title: 'LED High-Gloss Coffee Table',
          img: 'Coffee+Table.webp',
          desc: 'The perfect addition to any living room, thanks to its sleek, high-gloss finish and ample rectangular surface.',
          category: 'table',
          price: '101.87'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.onShowItem = this.onShowItem.bind(this)
  }
  render(){
  return (
    <div className="wrapper">
        <Header />
        <Items onShowItem={this.onShowItem} items={this.state.items}/>
        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} />}
        <Footer />
    </div>
  );
}
onShowItem(item) {
  this.setState({fullItem: item})
  this.setState({showFullItem: !this.state.showFullItem})
}
}

export default App;
