import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Items from './components/Items';
import ShowFullItem from './components/ShowFullItem';
import LoginModal from './components/LoginModal';  
import Categories from './components/Categories';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
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
          category: 'tables',
          price: '4101.87'
        },
        {
          id: 4,
          title: 'Minimalist modern luxury sofa',
          img: 'sofa.webp',
          desc: 'The sofa is crafted with soft faux leather fabric, providing a comfortable hand feel. It is highly durable and wear-resistant. Moreover, it is waterproof and stain-resistant, making it easy to clean.',
          category: 'sofas',
          price: '4101.87'
        },
        {
          id: 5,
          title: 'Metro Tall Wide Bookcase',
          img: 'bookcase.jpg',
          desc: 'This bookcase has a tall and wide design so that it provides lots of room to show off your favourite novels and autobiographies. It is also great for displaying ornaments, pictures, plants and so much more!',
          category: 'bookcases',
          price: '4101.87'
        },
        {
          id: 6,
          title: 'Jayden creation loveseat',
          img: 'grey-jayden-creation-loveseats-sfm0140-grey-e1_600.jpg',
          desc: 'Not 1 to be outshone when it comes to both comfort and aesthetics, this mid-century modern 2-seater sofa will most certainly give anybody current arrangement a run for it. The medium density foam filling with a solid and manufactured wood frame provides comfort.',
          category: 'loveseats',
          price: '4101.87'
        },
        {
          id: 7,
          title: 'Slate Midnight Blue Sofa',
          img: 'Sectionals.webp',
          desc: 'The Slate Collection is a testament to comfort, style, and timeless design. Each piece in this collection is meticulously crafted to transform your living space into a haven of relaxation and sophistication.',
          category: 'sofas',
          price: '4101.87'
        },
        {
          id: 8,
          title: 'Desmond Chair',
          img: 'desmond-chair.jpg',
          desc: 'The Desmond Chair offers comfort and style with its curved arms and tight seat back design. It pairs perfectly with the Desmond Sofa for a complete living room set. Relax and unwind in this expertly crafted piece of furniture.',
          category: 'chairs',
          price: '4101.87'
        },
        {
          id: 9,
          title: 'Eula Modern Accent Dining Chair',
          img: 'Chairs.webp',
          desc: 'Modern design accent armchair, elegantly curved silhouette provides maximum comfort, is perfect for decorating your living room bedroom dining room office.',
          category: 'chairs',
          price: '4101.87'
        },
        {
          id: 10,
          title: 'Wakefit Coffee Table',
          img: 'table3.jpg',
          desc: 'This Coffee Table comes in a Dark Walnut colour that looks good in any solid colour background or a funky wallpaper living room setting',
          category: 'tables',
          price: '4101.87'
        },
        {
          id: 11,
          title: 'Dallas Sofa',
          img: 'sofa1.jpg',
          desc: 'Our Lilium collection blends a classic, clean silhouette with simple, modern styling for a tailored look.This design ensures that the cushions maintain their shape over time. ',
          category: 'sofas',
          price: '4101.87'
        },
        {
          id: 12,
          title: 'Tea Table With Drawers',
          img: 'table.webp',
          desc: 'Good moisture resistance, white and clean. The second layer is decorative paper. The material is wood grain paper. Mainly for decoration.',
          category: 'tables',
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

    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.toggleModal = this.toggleModal.bind(this); 
    this.convertToUSD = this.convertToUSD.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
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
        <Categories chooseCategory={this.chooseCategory} />
        <Items 
          items={this.state.currentItems} 
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

  chooseCategory(category) {
if(category === 'all') {
  this.setState({currentItems: this.state.items})
  return
}

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
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
