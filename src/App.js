import Home from './Components/Home/Index';

import './App.scss';
import { CartProvider } from './Context/CartContext';

function App() {

  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

export default App;