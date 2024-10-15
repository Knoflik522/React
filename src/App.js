import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import ShowFullItem from './components/ShowFullItem';
import LoginModal from './components/LoginModal';  

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: 'Hendrix Velvet Barrel Chair',
          img: 'hendrix-velvet-barrel-chair.webp',
          desc: 'This accent chair features an arched, vertical channel tufted back, smooth circular seat, and shiny gold-toned legs.',
          category: 'chairs',
          price: '5877.9'
        },
        {
          id: 2,
          title: 'Ameire Upholstered Wingback Bed',
          img: 'Ameire+Upholstered+Wingback+Bed.webp',
          desc: 'Enhance your bedroom with this tufted upholstered panel bed to bring your bedroom an elegant and contemporary style.',
          category: 'beds',
          price: '9030.5'
        },
        {
          id: 3,
          title: 'LED High-Gloss Coffee Table',
          img: 'Coffee+Table.webp',
          desc: 'The perfect addition to any living room, thanks to its sleek, high-gloss finish and ample rectangular surface.',
          category: 'table',
          price: '4101.87'
        }
      ],
      showFullItem: false,
      fullItem: {},
      isLoggedIn: false, 
      username: '',      
      isModalOpen: false,
      exchangeRate: 37.5
    };

    this.addToOrder = this.addToOrder.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.toggleModal = this.toggleModal.bind(this); 
    this.convertToUSD = this.convertToUSD.bind(this);
  }

  convertToUSD(priceInUAH) {
    return (priceInUAH / this.state.exchangeRate).toFixed(2);
  }

  render() {
    return (
      <div className="wrapper">
        <Header 
          orders={this.state.orders}
          onDelete={this.deleteOrder}
          isLoggedIn={this.state.isLoggedIn}  
          onLogin={this.toggleModal}  
          onLogout={this.handleLogout} 
          username={this.state.username}  
        />
        <Items 
          items={this.state.items} 
          onShowItem={this.onShowItem} 
          onAdd={this.addToOrder} 
          convertToUSD={this.convertToUSD}
        />
        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onShowItem={this.onShowItem} convertToUSD={this.convertToUSD}/>}
        <Footer />
        
        
        <LoginModal 
          isOpen={this.state.isModalOpen} 
          onClose={this.toggleModal} 
          onLogin={this.handleLogin}  
        />
      </div>
    );
  }

  
  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  
  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) });
  }

  
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }

 
  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  
  handleLogin(username) {
    this.setState({
      isLoggedIn: true,
      username: username  
    });
    this.toggleModal(); 
  }

  
  handleLogout() {
    this.setState({
      isLoggedIn: false,
      username: ''  
    });
  }
}

export default App;
