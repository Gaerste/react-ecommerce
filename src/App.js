import Home from './Components/Home/Index';
import Header from './Components/Header/Index'
import Slideshow from './Components/Slideshow/Index';

import { CartProvider } from './Context/CartContext';

import img_surf_1 from './Data/img/cedric-frixon.jpg'
import img_surf_2 from './Data/img/jeremy-bishop.jpg'
import img_surf_3 from './Data/img/linus-nylund.jpg'
import img_surf_4 from './Data/img/nico-bhlr.jpg'

import './App.scss';

function App() {

  return (
    <CartProvider>
      <Header />
      <Slideshow>
        <img src={img_surf_1} alt="cedric-frixon"/>
        <img src={img_surf_2} alt="jeremy-bishop"/>
        <img src={img_surf_3} alt="linus-nylund"/>
        <img src={img_surf_4} alt="nico-bhlr"/>
      </Slideshow>
      <p className='frase'>"No te preocupes, hay millones de olas ahí afuera. Tómate tu tiempo y tu ola llegará."</p>
      <Home />
    </CartProvider>
  );
}

export default App;