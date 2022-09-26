import './ProductPage.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import ProductList from '../../components/ProductList/ProductList';
import { Link } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(() => {
    const url = `${API_URL}/products`;
    axios.get(url)
      .then(response => {
        setProducts(response.data)
      })
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  }
  return (
    <section className="products">
      <div className="products__top">
        <h1 className="products__heading">Coffee Products</h1>
        <div className="products__topright">
          <form className="products__form">
            <input
              className="products__search"
              type={'search'}
              placeholder="Search..."
              onChange={handleSearch}
            />
          </form>
          <Link to={`/products/add`} className="products__addbutton">
            + Add Product
          </Link>
        </div>
      </div>
      <div className="products__column">
        <div className="products__firstlist">
          <div className="products__product">
            <h3 className="products__titlename">Product Name</h3>
          </div>
          <div className="products__id">
            <h3 className="products__titleid">Product ID</h3>
          </div>
        </div>
        <div className="products__secondlist">
          <div className="products__stock">
            <h3 className="products__titlestock">Current Stock</h3>
          </div>
          <div className="products__price">
            <h3 className="products__titleprice">Price Per Bag</h3>
          </div>
        </div>
        <div className="products__thirdlist">
          <div className="products__sales">
            <h3 className="products__titlesales">Total Sales</h3>
          </div>
        </div>
        <div className="products__fourthlist">
          <h3 className="products__titleaction">Action</h3>
        </div>
      </div>
      {/* Search functionality */}
      {products.filter((input) => {
        if (search === ""){
          return input
        } else if (
          //search by typing name, id, or price
          input.product_name.toLowerCase().includes(search.toLocaleLowerCase())
          || input.product_id.toLowerCase().includes(search.toLocaleLowerCase())
          || input.price.toLowerCase().includes(search.toLocaleLowerCase())) {
          return input;
          }
        return false;
      })
       .map((product) => {
        return <ProductList product={product} key={uuidv4()} />;
      })}
    </section>
  );
};

export default ProductPage;
