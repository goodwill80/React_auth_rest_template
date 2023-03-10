import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layouts/Layout';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ProductsPage from './Pages/ProductsPage';
import SignupPage from './Pages/SignupPage';
import AccountPage from './Pages/AccountPage';
import AddProductPage from './Pages/AddProductPage';
import EditProductPage from './Pages/EditProductPage';
import SingleProductPage from './Pages/SingleProductPage';
import CartSummaryPage from './Pages/CartSummaryPage';
import ProtectedRoute from './Auth/ProtectedRoutes';

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<SingleProductPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/cart" element={<CartSummaryPage />} />
            <Route
              path="/newproduct"
              element={
                <ProtectedRoute>
                  <AddProductPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/product/edit/:id"
              element={
                <ProtectedRoute>
                  <EditProductPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <AccountPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
