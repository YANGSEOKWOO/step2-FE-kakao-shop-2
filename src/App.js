import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React, { Suspense } from 'react';
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
import OrderCompletePage from './pages/OrderCompletePage';

const staticServerUrl = process.env.REACT_APP_PATH || '';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path={staticServerUrl + '/login'} element={<LoginPage />} />
            <Route
              path={staticServerUrl + '/signup'}
              element={<RegisterPage />}
            />
            <Route path={staticServerUrl + '/*'} element={<ErrorPage />} />
            <Route path={staticServerUrl + '/error'} element={<ErrorPage />} />

            <Route element={<MainLayout />}>
              <Route path={staticServerUrl + '/'} element={<NewHomePage />} />
              <Route
                path={staticServerUrl + '/product/:id'}
                element={<ProductDetailPage />}
              />
            </Route>

            <Route element={<RequiredAuthLayout />}>
              <Route
                path={staticServerUrl + '/order'}
                element={<OrderPage />}
              />
              <Route
                path={staticServerUrl + '/orders/complete/:id'}
                element={<OrderCompletePage />}
              />
              <Route path={staticServerUrl + '/cart'} element={<CartPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
