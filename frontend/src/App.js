import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/NavBar';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SignupScreen from './screens/SignupScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import CatScreen from './screens/CatScreen';
import CategoryScreen from './screens/CategoryScreen';
import AllProdScreen from './screens/AllProdScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import './App.css';
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <ToastContainer position="bottom-center" limit={1} />
        <header>
          <Navbar />
        </header>

        <main>

            {/* <Container className="mt-3"> */}
          <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/product/:slug" element={<ProductScreen />} />
              <Route path="/cart" element={<CartScreen />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
              <Route path="/placeorder" element={<PlaceOrderScreen />} />
              <Route path="/order/:id" element={<OrderScreen />} />
              <Route path="/shipping" element={<ShippingAddressScreen />} />
              <Route path="/payment" element={<PaymentMethodScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/categories/*" element={<CatScreen />}>
                <Route path=":category" element={<CategoryScreen />} />
                <Route path="all-products" element={<AllProdScreen />} />
              </Route>
              <Route path="/orderhistory" element={<OrderHistoryScreen />} />
          </Routes>
            {/* </Container> */}

        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter >
  );
}

export default App;
