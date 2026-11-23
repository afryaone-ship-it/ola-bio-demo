import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Catalogue from './pages/Catalogue';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Pro from './pages/Pro';
import Customization from './pages/Customization';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/produit/:id" element={<ProductDetail />} />
          <Route path="/panier" element={<Cart />} />
          <Route path="/solutions-professionnelles" element={<Pro />} />
          <Route path="/personnalisation" element={<Customization />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}
