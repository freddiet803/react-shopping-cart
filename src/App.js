import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext.js';

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = item => {
    // add the given item to the cart
    setCart([...cart, item]);
    // setCart(prevState => {
    //   return item;
    // });
    console.log(cart);
  };

  const removeItem = itemId => {
    //     setCart([
    //       ...cart,
    //       cart.every(item => {
    //         if (item.id !== itemId) {
    //           return item;
    //         }
    //         return item;
    //       })
    //     ]);
    //   };
    const cartItems = cart.filter(item => {
      if (item.id !== itemId) {
        return item;
      }
    });
    console.log(cart);
    setCart(prevState => {
      return cartItems;
    });
  };

  return (
    <div className='App'>
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{ cart, removeItem }}>
          <Navigation cart={cart} />

          {/* Routes */}
          {/* <Route
        exact
        path='/'
        render={() => <Products products={products} addItem={addItem} />}
      /> */}
          <Route exact path='/' component={Products} />

          <Route path='/cart' render={() => <ShoppingCart cart={cart} />} />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
