import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoryPage from './Pages/CategoryPage/CategoryPage'
import HomePage from './Pages/HomePage/HomePage'
import GalleryPage from './Pages/GalleryPage/GalleryPage'
import AboutPage from './Pages/AboutPage/AboutPage'
import ContactPage from './Pages/ContactPage/ContactPage'
import DetailsPage from './Pages/DetailsPage/DetailsPage'
import CartPage from './Pages/CartPage/CartPage'
import BlogPage from './Pages/BlogPage/BlogPage'
import LoginPage from './Pages/LoginPage/LoginPage'
import NotFound from './Pages/NotFound/NotFound';
import Products from './Pages/Products/Products';
import BlogDetailPage from './Pages/BlogDetailPage/BlogDetailPage';

function App() {
  
  return (
    <>
    <meta name="keywords" content="React, JavaScript, semantic markup, html" />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/category/:sku" element={<DetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogs/:id" element={<BlogDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/:result" element={<Products type="category"/>} />
          <Route path="/search/:result" element={<Products type="search"/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
