import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import ShowFullItem from './components/ShowFullItem';
import LoginModal from './components/LoginModal';  // Додано імпорт модального вікна

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
          price: '77.9'
        },
        {
          id: 2,
          title: 'Ameire Upholstered Wingback Bed',
          img: 'Ameire+Upholstered+Wingback+Bed.webp',
          desc: 'Enhance your bedroom with this tufted upholstered panel bed to bring your bedroom an elegant and contemporary style.',
          category: 'beds',
          price: '5030.5'
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
      fullItem: {},
      isLoggedIn: false, // Стан для входу
      username: '',      // Ім'я користувача
      isModalOpen: false // Стан для відображення модального вікна
    };

    this.addToOrder = this.addToOrder.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.toggleModal = this.toggleModal.bind(this); // Для управління модальним вікном
  }

  render() {
    return (
      <div className="wrapper">
        <Header 
          orders={this.state.orders}
          onDelete={this.deleteOrder}
          isLoggedIn={this.state.isLoggedIn}  // Передаємо стан входу
          onLogin={this.toggleModal}  // Відкриваємо модальне вікно для логіну
          onLogout={this.handleLogout} // Передаємо функцію виходу
          username={this.state.username}  // Передаємо ім'я користувача
        />
        <Items 
          items={this.state.items} 
          onShowItem={this.onShowItem} 
          onAdd={this.addToOrder} 
        />
        {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} />}
        <Footer />
        
        {/* Модальне вікно для логіну */}
        <LoginModal 
          isOpen={this.state.isModalOpen} 
          onClose={this.toggleModal} 
          onLogin={this.handleLogin}  // Передаємо функцію логіну
        />
      </div>
    );
  }

  // Логіка модального вікна
  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  // Видаляємо товар з кошика
  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) });
  }

  // Додаємо товар до кошика
  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id) isInArray = true;
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }

  // Показуємо повну інформацію про товар
  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }

  // Логіка входу
  handleLogin(username) {
    this.setState({
      isLoggedIn: true,
      username: username  // Зберігаємо ім'я користувача
    });
    this.toggleModal(); // Закриваємо модальне вікно після входу
  }

  // Логіка виходу
  handleLogout() {
    this.setState({
      isLoggedIn: false,
      username: ''  // Очищаємо ім'я користувача
    });
  }
}

export default App;
