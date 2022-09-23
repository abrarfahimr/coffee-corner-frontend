import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import { useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import SalesPage from './pages/SalesPage/SalesPage';
import ProductPage from './pages/ProductPage/ProductPage';
import TransactionPage from './pages/TransactionPage/TransactionPage';
import CustomerPage from './pages/CustomerPage/CustomerPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ProductDetails from './components/ProductDetails/ProductDetails';
import EditProduct from './components/EditProduct/EditProduct';
import NavBar from './components/NavBar/NavBar';

function App() {
    const [sideBar, setSideBar] = useState(false);

    const toggleSideBar = () => {
      setSideBar((prevState) => !prevState);
    };
  return (
    <div className="App">
      <BrowserRouter>
        <Header
          toggleSideBar={toggleSideBar}
          sideBar={sideBar}
        />
        <NavBar sideBar={sideBar}/>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Navigate to="/home"/>} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<ProductDetails/>}/>
          <Route path='/products/:id/edit' element={<EditProduct/>}/>
          <Route path="/transaction" element={<TransactionPage />} />
          <Route path="/customer" element={<CustomerPage/> }/>
          <Route path='*' element={<ErrorPage/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
