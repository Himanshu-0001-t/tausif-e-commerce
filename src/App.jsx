import SignInForm from './pages/signin'
import LoginForm from './pages/login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header'
import HomePage from './pages/home'
import Footer from './components/footer'
import NotFound from './pages/notFound'
import CheckoutPage from './pages/checkout'
import CartPage from './pages/cart'
import ContactUs from './pages/contact'
import ProductDetail from './pages/product'
import OrderSuccess from './pages/orderSuccess'
import PrivateRoute from './components/protectedRoute';
import ShopPage from './pages/shop'
import { AuthProvider } from './context/AuthContext'
import UserOrders from './pages/orders';


function App() {

  return (
    <>
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignInForm />} />
            <Route
              path="/cart"
              element={
                <PrivateRoute>
                  <CartPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/checkout"
              element={
                <PrivateRoute>
                  <CheckoutPage />
                </PrivateRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <PrivateRoute>
                  <UserOrders />
                </PrivateRoute>
              }
            />
            <Route
              path="/order-placed"
              element={
                <PrivateRoute>
                  <OrderSuccess />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </>
  )
}

export default App
