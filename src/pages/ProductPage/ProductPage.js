import './ProductPage.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import ProductList from '../../components/ProductList/ProductList';

const API_URL = process.env.REACT_APP_API_URL;
console.log(API_URL);

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `${API_URL}/products`;
    axios.get(url)
      .then(response => {
        setProducts(response.data)
      })
  }, []);

  return (
    <section className="products">
      <h1 className="products__heading">Coffee Products</h1>
      <form className="products__form">
        <input
          className="products__search"
          type={'search'}
          placeholder="Search..."
        />
      </form>
      <button className='products__addbutton'>+ Add Product</button>
      {
        products.map((product) => {
          return(<ProductList product={product} key={uuidv4()} />)
        })
      }
    </section>
  );
};

export default ProductPage;
