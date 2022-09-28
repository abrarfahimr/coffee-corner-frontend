import './AddProduct.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import arrowLeftIcon from '../../assets/icons/arrow-left.svg';
import errorIcon from '../../assets/icons/x-circle.svg';


const API_URL = process.env.REACT_APP_API_URL;

const AddProduct = () => {
  const navigate = useNavigate();

  //setting states for individual inputs
  const [name, setName] = useState('');
  const [productId, setProductId] = useState('');
  const [description, setDescription] = useState('');
  const [roast, setRoast] = useState('');
  const [type, setType] = useState('');
  const [body, setBody] = useState('');
  const [acidity, setAcidity] = useState('');
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  // const [upload, setUpload] = useState('');

  //validating errors of all forms
  const [nameError, setNameError] = useState(false);
  const [idError, setIdError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [roastError, setRoastError] = useState(false);
  const [typeError, setTypeError] = useState(false);
  const [bodyError, setBodyError] = useState(false);
  const [acidityError, setAcidityError] = useState(false);
  const [stockError, setStockError] = useState(false);
  const [priceError, setPriceError] = useState(false);

  //handle change for product name
  const handleChangeName = (event) => {
    setName(event.target.value);
    if (event.target.value < 1) {
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  //handle change for product id
  const handleChangeId = (event) => {
    setProductId(event.target.value);
    if (event.target.value < 1) {
      setIdError(true);
    } else {
      setIdError(false);
    }
  };

  //handle change for description
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
    if (event.target.value < 1) {
      setDescriptionError(true);
    } else {
      setDescriptionError(false);
    }
  };

  //handle change for roast
  const handleChangeRoast = (event) => {
    setRoast(event.target.value);
    if (event.target.value === '') {
      setRoastError(true);
    } else {
      setRoastError(false);
    }
  };

  //handle change for type
  const handleChangeType = (event) => {
    setType(event.target.value);
    if (event.target.value === '') {
      setTypeError(true);
    } else {
      setTypeError(false);
    }
  };

  //handle change for body
  const handleChangeBody = (event) => {
    setBody(event.target.value);
    if (event.target.value === '') {
      setBodyError(true);
    } else {
      setBodyError(false);
    }
  };

  //handle change for acidity
  const handleChangeAcidity = (event) => {
    setAcidity(event.target.value);
    if (event.target.value === '') {
      setAcidityError(true);
    } else {
      setAcidityError(false);
    }
  };

  //handle change for stock
  const handleChangeStock = (event) => {
    setStock(event.target.value);
    if (event.target.value === '') {
      setStockError(true);
    } else {
      setStockError(false);
    }
  };

  //handle change for price
  const handleChangePrice = (event) => {
    setPrice(event.target.value);
    if (event.target.value === '' || event.target.value === '0') {
      setPriceError(true);
    } else {
      setPriceError(false);
    }
  };

  //Checking to see if inputs are valid
  const isNameValid = () => {
    if (name.length < 1) {
      return false;
    }
    return true;
  };

  //Checking to see if inputs are valid
  const isIdValid = () => {
    if (productId === '') {
      return false;
    }
    return true;
  };

  const isDescriptionValid = () => {
    if (description.length < 1) {
      return false;
    }
    return true;
  };

  const isRoastValid = () => {
    if (roast === '') {
      return false;
    }
    return true;
  };

  const isTypeValid = () => {
    if (type === '') {
      return false;
    }
    return true;
  };

  const isBodyValid = () => {
    if (body === '') {
      return false;
    }
    return true;
  };

  const isAcidityValid = () => {
    if (acidity === '') {
      return false;
    }
    return true;
  };

  const isStockValid = () => {
    if (stock === '') {
      return false;
    }
    return true;
  };

  const isPriceValid = () => {
    if (price === '' || price === 0) {
      return false;
    }
    return true;
  };

  //check to see if all forms are valid
  const isFormValid = () => {
    //Check if the fields are all filled
    if (
      !name ||
      !productId ||
      !description ||
      !roast ||
      !type ||
      !body ||
      !acidity ||
      !price ||
      !stock
    ) {
      return false;
    }
    return true;
  };

  //submit form and change page but inputs must be filled
  const submitForm = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      axios
        .post(`${API_URL}/products`, {
          product_name: name,
          product_id: productId,
          description: description,
          roast: roast,
          type: type,
          body: body,
          acidity: acidity,
          stock: stock,
          sales: '0',
          price: price,
          image: `https://coffee-corner-backend.herokuapp.com/image11.png`,
        })
        .then((response) => console.log(response.data))
        .catch((err) => console.log(err.response.data));
      alert('New Product Added!');
      navigate(`/products`);
    } else {
      if (!isNameValid()) {
        setNameError(true);
      }
      if (!isIdValid()) {
        setIdError(true);
      }
      if (!isDescriptionValid()) {
        setDescriptionError(true);
      }
      if (!isRoastValid()) {
        setRoastError(true);
      }
      if (!isBodyValid()) {
        setBodyError(true);
      }
      if (!isTypeValid()) {
        setTypeError(true);
      }
      if (!isAcidityValid()) {
        setAcidityError(true);
      }
      if (!isStockValid()) {
        setStockError(true);
      }
      if (!isPriceValid()) {
        setPriceError(true);
      }
      alert('Please fill up all inputs');
    }
  };

  //return back when you cancel edit inventory
  const returnBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="addproduct">
        <div className="addproduct__headingcontainer">
          <img
            src={arrowLeftIcon}
            alt="left arrow"
            onClick={returnBack}
            className="addproduct__navicon"
          />
          <h1 className="addproduct__header">Add Product</h1>
        </div>
        <form
          className="addproduct__form"
          onSubmit={submitForm}
          encType="multipart/form-data"
        >
          <div className="addproduct__formcontainer">
            <div className="addproduct__topform">
              <h2 className="addproduct__subheading">Product Details</h2>
              {/* Name */}
              <label htmlFor="productName" className="addproduct__label">
                Product Name
              </label>
              <input
                type="text"
                name="productName"
                className={`addproduct__name ${
                  nameError === false ? '' : ' addproduct__name--error'
                }`}
                placeholder="Product Name"
                value={name}
                onChange={handleChangeName}
              ></input>
              <p
                className={`validation ${
                  nameError === false ? '' : ' validation--active'
                }`}
              >
                <img
                  src={errorIcon}
                  alt="error icon"
                  className="validation__icon"
                ></img>
                This field is required
              </p>

              {/* Description */}
              <label htmlFor="productDescription" className="addproduct__label">
                Description
              </label>
              <textarea
                type="text"
                name="productDescription"
                className={`addproduct__description ${
                  descriptionError === false
                    ? ''
                    : ' addproduct__description--error'
                }`}
                placeholder="Please enter a brief product description..."
                value={description}
                onChange={handleChangeDescription}
              ></textarea>
              <p
                className={`validation ${
                  descriptionError === false ? '' : ' validation--active'
                }`}
              >
                <img
                  src={errorIcon}
                  alt="error icon"
                  className="validation__icon"
                ></img>
                This field is required
              </p>

              {/* Roast */}
              <div className="addproduct__container">
                <label htmlFor="productRoast" className="addproduct__label">
                  Roast
                </label>
                <select
                  name="productRoast"
                  className={`addproduct__roast ${
                    roastError === false ? '' : ' addproduct__roast--error'
                  }`}
                  value={roast}
                  onChange={handleChangeRoast}
                >
                  <option value="">Please select an option</option>
                  <option value="Light">Light</option>
                  <option value="Medium">Medium</option>
                  <option value="Dark">Dark</option>
                </select>
                <span className="addproduct__downarrow"></span>
                <p
                  className={`validation ${
                    roastError === false ? '' : ' validation--active'
                  }`}
                >
                  <img
                    src={errorIcon}
                    alt="error icon"
                    className="validation__icon"
                  ></img>
                  This field is required
                </p>
              </div>

              {/* Type */}
              <div className="addproduct__container">
                <label htmlFor="productType" className="addproduct__label">
                  Type
                </label>
                <select
                  name="productType"
                  className={`addproduct__type ${
                    typeError === false ? '' : ' addproduct__type--error'
                  }`}
                  value={type}
                  onChange={handleChangeType}
                >
                  <option value="">Please select an option</option>
                  <option value="Liberica">Liberica</option>
                  <option value="Arabica">Arabica</option>
                  <option value="Robusta">Robusta</option>
                </select>
                <span className="addproduct__downarrow"></span>
                <p
                  className={`validation ${
                    typeError === false ? '' : ' validation--active'
                  }`}
                >
                  <img
                    src={errorIcon}
                    alt="error icon"
                    className="validation__icon"
                  ></img>
                  This field is required
                </p>
              </div>

              {/* body */}
              <div className="addproduct__container">
                <label htmlFor="productBody" className="addproduct__label">
                  Body
                </label>
                <select
                  name="productBody"
                  className={`addproduct__body ${
                    bodyError === false ? '' : ' addproduct__body--error'
                  }`}
                  value={body}
                  onChange={handleChangeBody}
                >
                  <option value="">Please select an option</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <span className="addproduct__downarrow"></span>
                <p
                  className={`validation ${
                    bodyError === false ? '' : ' validation--active'
                  }`}
                >
                  <img
                    src={errorIcon}
                    alt="error icon"
                    className="validation__icon"
                  ></img>
                  This field is required
                </p>
              </div>

              {/* Acidity */}
              <div className="addproduct__container">
                <label htmlFor="productAcidity" className="addproduct__label">
                  Acidity
                </label>
                <select
                  name="productAcidity"
                  className={`addproduct__acidity ${
                    acidityError === false ? '' : ' addproduct__acidity--error'
                  }`}
                  value={acidity}
                  onChange={handleChangeAcidity}
                >
                  <option value="">Please select an option</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <span className="addproduct__downarrow"></span>
                <p
                  className={`validation ${
                    acidityError === false ? '' : ' validation--active'
                  }`}
                >
                  <img
                    src={errorIcon}
                    alt="error icon"
                    className="validation__icon"
                  ></img>
                  This field is required
                </p>
              </div>
            </div>
            <div className="addproduct__bottomform">
              {/* Product Id */}
              <div className="addproduct__container">
                <label htmlFor="productId" className="addproduct__label">
                  Product ID
                </label>
                <input
                  className={`addproduct__id ${
                    idError === false ? '' : ' addproduct__id--error'
                  }`}
                  name="productId"
                  type="number"
                  placeholder="Set an Id for this product"
                  value={productId}
                  onChange={handleChangeId}
                ></input>
                <p
                  className={`validation ${
                    idError === false ? '' : ' validation--active'
                  }`}
                >
                  <img
                    src={errorIcon}
                    alt="error icon"
                    className="validation__icon"
                  ></img>
                  This field is required
                </p>
              </div>

              {/* Stock */}
              <div className="addproduct__container">
                <label htmlFor="productStock" className="addproduct__label">
                  Stock
                </label>
                <input
                  className={`addproduct__stock ${
                    stockError === false ? '' : ' addproduct__stock--error'
                  }`}
                  name="productStock"
                  type="number"
                  placeholder="Type a number"
                  value={stock}
                  onChange={handleChangeStock}
                ></input>
                <p
                  className={`validation ${
                    stockError === false ? '' : ' validation--active'
                  }`}
                >
                  <img
                    src={errorIcon}
                    alt="error icon"
                    className="validation__icon"
                  ></img>
                  This field is required
                </p>
              </div>

              {/* Price */}
              <div className="addproduct__container">
                <label htmlFor="productPrice" className="addproduct__label">
                  Price
                </label>
                <input
                  className={`addproduct__price ${
                    priceError === false ? '' : ' addproduct__price--error'
                  }`}
                  name="productPrice"
                  type="number"
                  placeholder="Type a price"
                  value={price}
                  onChange={handleChangePrice}
                ></input>
                <span className="addproduct__dollar"></span>
                <p
                  className={`validation ${
                    priceError === false ? '' : ' validation--active'
                  }`}
                >
                  <img
                    src={errorIcon}
                    alt="error icon"
                    className="validation__icon"
                  ></img>
                  This field is required
                </p>
              </div>
                {/* buttons */}
              <div className="addproduct__buttons">
                <NavLink
                  to={`/products`}
                  className="addproduct__cancel"
                >
                  Cancel
                </NavLink>
                <button
                  className="addproduct__save"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddProduct;