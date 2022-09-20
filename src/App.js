import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import SalesPage from './pages/SalesPage/SalesPage';
import ProductPage from './pages/ProductPage/ProductPage';
import TransactionPage from './pages/TransactionPage/TransactionPage';

import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/sales" element={<SalesPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/transaction" element={<TransactionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
