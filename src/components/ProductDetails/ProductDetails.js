import './ProductDetails.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import editIcon from '../../assets/icons/edit.svg';
import deleteIcon from '../../assets/icons/delete.svg';
import arrowLeftIcon from '../../assets/icons/arrow-left.svg';
import ProductModal from '../Modal/ProductModal';

const API_URL = process.env.REACT_APP_API_URL;

const ProductDetails = () => {
  //set state for all product list
  const [product, setProduct] = useState([]);

  //setting state for modal 
  const [openModal, setOpenModal] = useState(false);
  const showModal = () => {
    setOpenModal(prev => !prev);
  };
  //set variable for useNavigate 
  const navigate = useNavigate();
  //set variable for params
  let { id } = useParams();

  //make get request with axios for product list
  let currentId = id;
  useEffect(() => {
    axios
      .get(`${API_URL}/products/${currentId}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => console.log(err));
  }, [currentId]);

  //return back when you cancel edit inventory
  const returnBack = () => {
    navigate(-1);
  };

  return (
    <div className="details__wrapper">
      <div className="details">
        <div className="details__imagecontainer">
          <img
            src={arrowLeftIcon}
            alt="left arrow"
            onClick={returnBack}
            className="editproduct__navicon"
          />
          <img
            className="details__image"
            src={product.image}
            alt="coffee bag"
          />
        </div>
        <div className="details__info">
          <div className="details__text">
            <h1 className="details__title">{product.product_name}</h1>
            <p className="details__description">{product.description}</p>
          </div>
          <div className="details__stats">
            <div className="details__statcontainer">
              <p className="details__key">Roast</p>
              <p className="details__value">{product.roast}</p>
            </div>
            <div className="details__statcontainer">
              <p className="details__key">Type</p>
              <p className="details__value">{product.type}</p>
            </div>
            <div className="details__statcontainer">
              <p className="details__key">Body</p>
              <p className="details__value">{product.body}</p>
            </div>
            <div className="details__statcontainer">
              <p className="details__key">Acidity</p>
              <p className="details__value">{product.acidity}</p>
            </div>
          </div>
          <div className="details__stockinfo">
            <div className="details__topinfo">
              <div className="details__id">
                <p className="details__key">Product ID</p>
                <p className="details__value--bold">{product.product_id}</p>
              </div>
              <div className="details__stock">
                <p className="details__key">Current Stock</p>
                <p className="details__value--bold">{product.stock}</p>
              </div>
            </div>
            <div className="details__bottominfo">
              <div className="details__price">
                <p className="details__key">Price per item</p>
                <p className="details__value--bold">${product.price}</p>
              </div>
              <div className="details__sales">
                <p className="details__key">Total Sales</p>
                <p className="details__value--bold">{product.sales}</p>
              </div>
            </div>
          </div>
          <div className="details__buttons">
            <ProductModal
              openModal={openModal}
              setOpenModal={setOpenModal}
              productId={product.id}
              productName={product.product_name}
            />
            <Link
              to={`/products/${currentId}/edit`}
              className="details__button"
            >
              <img src={editIcon} alt="edit icon" className="details__icon" />{' '}
              Edit
            </Link>
            <button className="details__delete" onClick={showModal}>
              <img
                src={deleteIcon}
                alt="delete icon"
                className="details__icon"
              />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;