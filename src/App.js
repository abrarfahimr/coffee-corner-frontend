import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import { useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import SalesPage from './pages/SalesPage/SalesPage';
import ProductPage from './pages/ProductPage/ProductPage';
import TransactionPage from './pages/TransactionPage/TransactionPage';
import CustomerPage from './pages/CustomerPage/CustomerPage';
import MarketingPage from './pages/MarketingPage/MarketingPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ProductDetails from './components/ProductDetails/ProductDetails';
import AddProduct from './components/AddProduct/AddProduct';
import EditProduct from './components/EditProduct/EditProduct';
import NavBar from './components/NavBar/NavBar';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/Login/Login';


function App() {
  const [sideBar, setSideBar] = useState(false);

  const toggleSideBar = () => {
    setSideBar((prevState) => !prevState);
  };
  // destructuring elements from "useAuth0" component from auth0 library
  const { isLoading, isAuthenticated, error, user, logout } =
    useAuth0();
  //This is show when data is being fetched
  if (isLoading) {
    return <div>Loading...</div>;
  }
  //Error message when login fails
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  //when autheticated the webpage is shown if not logged in user goes to the login page.
  if (isAuthenticated) {
    return (
      <div className="App">
        <BrowserRouter>
          <Header toggleSideBar={toggleSideBar} sideBar={sideBar} user={user} />
          <NavBar sideBar={sideBar} logout={logout} />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/sales" element={<SalesPage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/products/:id/edit" element={<EditProduct />} />
            <Route path="/products/add" element={<AddProduct />} />
            <Route path="/marketing" element={<MarketingPage />} />
            <Route path="/transaction" element={<TransactionPage />} />
            <Route path="/customer" element={<CustomerPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  } else {
    return <LoginButton/>;
  }
}

export default App;
