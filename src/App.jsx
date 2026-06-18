import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import LeadershipSection from './components/LeadershipSection';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="bg-white min-h-screen font-sans antialiased">
      <Header />
      <HeroSection />
      <ProductsSection onProductClick={setSelectedProduct} />
      <LeadershipSection />
      <Footer onProductClick={setSelectedProduct} />
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}

export default App;