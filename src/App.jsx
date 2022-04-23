import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import HowDoSection from './components/HowDoSection';
import OffersSection from './components/OffersSection';
import DepositionsSection from './components/DepositionsSection';
import VideosSection from './components/VideosSection';
import MyCart from './components/MyCart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/como-fazer" element={ <HowDoSection /> } />
        <Route path="/ofertas" element={ <OffersSection /> } />
        <Route path="/depoimentos" element={ <DepositionsSection /> } />
        <Route path="/videos" element={ <VideosSection /> } />
        <Route path="/carrinho" element={ <MyCart /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
