import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
// import HomePage from './pages/Homepage'
import NewHomePage from './pages/NewHomePage';
import MainLayout from './layouts/MainLayout';
import ProductDetailPage from './pages/ProductDetailPage';
import Loader from './components/atoms/Loader';
import { ErrorPage } from './pages/ErrorPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import RequiredAuthLayout from './layouts/RequiredAuthLayout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/error" element={<ErrorPage />} />

          <Route element={<MainLayout />}>
            <Route path="/" element={<NewHomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Route>

          <Route element={<RequiredAuthLayout />}>
            <Route path="/order" element={<OrderPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
