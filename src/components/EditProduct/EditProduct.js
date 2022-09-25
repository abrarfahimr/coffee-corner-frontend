import './EditProduct.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import arrowLeftIcon from "../../assets/icons/arrow-left.svg";
import errorIcon from "../../assets/icons/x-circle.svg";

const API_URL = process.env.REACT_APP_API_URL;

const EditProduct = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  //setting states for individual inputs
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [roast, setRoast] = useState('');
  const [type, setType] = useState('');
  const [body, setBody] = useState('');
  const [acidity, setAcidity] = useState('');
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [upload, setUpload] = useState('');

  //handle change for item name
  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  //handle change for description
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  //handle change for roast
  const handleChangeRoast = (event) => {
    setRoast(event.target.value);
  };

  //handle change for type
  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  //handle change for body
  const handleChangeBody = (event) => {
    setBody(event.target.value);
  };

  //handle change for acidity
  const handleChangeAcidity = (event) => {
    setAcidity(event.target.value);
  };

  //handle change for stock
  const handleChangeStock = (event) => {
    setStock(event.target.value);
  };

  //handle change for price
  const handleChangePrice= (event) => {
    setPrice(event.target.value);
  };

  //handle change for upload
  const handleChangeUpload = (event) => {
    setUpload(event.target.value);
  };

  //Checking to see if inputs are valid
  const isNameValid = () => {
    if (name.length < 1) {
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

  const isUploadValid = () => {
    if (price === '') {
      return false;
    }
    return true;
  };

  //check to see if all forms are valid
  const isFormValid = () => {
    //Check if the fields are all filled
    if (!name || !description || !roast || !type || !body || !acidity || !price || !stock) {
      return false;
    }
    //Check if the name field is valid
    if (!isNameValid()) {
      return false;
    }
    //Check if the description field is valid
    if (!isDescriptionValid()) {
      return false;
    }
    if (!isRoastValid()) {
      return false;
    }
    if (!isTypeValid()) {
      return false;
    }
    if (!isBodyValid()) {
      return false;
    }
    if (!isAcidityValid()) {
      return false;
    }
    if (!isStockValid()) {
      return false;
     }
    if (!isPriceValid()) {
      return false;
    }

    return true;
  };

  //submit form and change page but inputs must be filled
  const submitForm = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      axios
        .put(`${API_URL}/products/${currentId}`, {
          product_name: name,
          description: description,
          roast: roast,
          type: type,
          body: body,
          acidity: acidity,
          stock: stock,
          price: price,
          image: upload
        })
        .then((response) => console.log(response.data));
      alert('Product Updated!');
      navigate(`/products/${currentId}`);
    } else {
      alert('Please fill up all inputs');
    }
  };

  //make get request with axios
  let currentId = id;
  useEffect(() => {
    axios
      .get(`${API_URL}/products/${currentId}`)
      .then((response) => {
        setName(response.data.product_name);
        setDescription(response.data.description);
        setRoast(response.data.roast);
        setType(response.data.type);
        setBody(response.data.body);
        setAcidity(response.data.acidity);
        setStock(response.data.stock);
        setPrice(response.data.price);
        setUpload(response.data.image)
      })
      .catch((err) => console.log(err));
  }, []);

  //return back when you cancel edit inventory
  const returnBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="editproduct">
        <div className="editproduct__headingcontainer">
          <img
            src={arrowLeftIcon}
            alt="left arrow"
            onClick={returnBack}
            className="editproduct__navicon"
          />
          <h1 className="editproduct__header">Edit Product</h1>
        </div>
        <form
          className="editproduct__form"
          onSubmit={submitForm}
          enctype="multipart/form-data"
        >
          <div className="editproduct__formcontainer">
            <div className="editproduct__topform">
              <h2 className="editproduct__subheading">Product Details</h2>
              {/* Name */}
              <label htmlFor="productName" className="editproduct__label">
                Product Name
              </label>
              <input
                type="text"
                name="productName"
                className={`editproduct__name ${
                  isNameValid() ? '' : ' editproduct__name--error'
                }`}
                placeholder="Product Name"
                value={name}
                onChange={handleChangeName}
              ></input>
              <p
                className={`validation ${
                  isNameValid() ? '' : ' validation--active'
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
              <label
                htmlFor="productDescription"
                className="editproduct__label"
              >
                Description
              </label>
              <textarea
                type="text"
                name="productDescription"
                className={`editproduct__description ${
                  isDescriptionValid() ? '' : ' editproduct__description--error'
                }`}
                placeholder="Please enter a brief product description..."
                value={description}
                onChange={handleChangeDescription}
              ></textarea>

              {/* Roast */}
              <div className="editproduct__container">
                <label htmlFor="productRoast" className="editproduct__label">
                  Roast
                </label>
                <select
                  name="productRoast"
                  className={`editproduct__roast ${
                    isRoastValid() ? '' : ' editproduct__roast--error'
                  }`}
                  value={roast}
                  onChange={handleChangeRoast}
                >
                  <option value="">Please select an option</option>
                  <option value="Light">Light</option>
                  <option value="Medium">Medium</option>
                  <option value="Dark">Dark</option>
                </select>
                <span className="editproduct__downarrow"></span>
              </div>

              {/* Type */}
              <div className="editproduct__container">
                <label htmlFor="productType" className="editproduct__label">
                  Type
                </label>
                <select
                  name="productType"
                  className={`editproduct__type ${
                    isTypeValid() ? '' : ' editproduct__type--error'
                  }`}
                  value={type}
                  onChange={handleChangeType}
                >
                  <option value="">Please select an option</option>
                  <option value="Liberica">Liberica</option>
                  <option value="Arabica">Arabica</option>
                  <option value="Robusta">Robusta</option>
                </select>
                <span className="editproduct__downarrow"></span>
              </div>

              {/* body */}
              <div className="editproduct__container">
                <label htmlFor="productBody" className="editproduct__label">
                  Body
                </label>
                <select
                  name="productBody"
                  className={`editproduct__body ${
                    isBodyValid() ? '' : ' editproduct__body--error'
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
                <span className="editproduct__downarrow"></span>
              </div>

              {/* Acidity */}
              <div className="editproduct__container">
                <label htmlFor="productAcidity" className="editproduct__label">
                  Acidity
                </label>
                <select
                  name="productAcidity"
                  className={`editproduct__acidity ${
                    isAcidityValid() ? '' : ' editproduct__acidity--error'
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
                <span className="editproduct__downarrow"></span>
              </div>
            </div>
            <div className="editproduct__bottomform">
              {/* Stock */}
              <div className="editproduct__container">
                <label htmlFor="productStock" className="editproduct__label">
                  Stock
                </label>
                <input
                  className={`editproduct__stock ${
                    isStockValid() ? '' : ' editproduct__stock--error'
                  }`}
                  name="productStock"
                  type="number"
                  placeholder="Type a number"
                  value={stock}
                  onChange={handleChangeStock}
                ></input>
              </div>

              {/* Price */}
              <div className="editproduct__container">
                <label htmlFor="productPrice" className="editproduct__label">
                  Price
                </label>
                <input
                  className={`editproduct__price ${
                    isPriceValid() ? '' : ' editproduct__price--error'
                  }`}
                  name="productPrice"
                  type="number"
                  placeholder="Type a price"
                  value={price}
                  onChange={handleChangePrice}
                ></input>
                <span className="editproduct__dollar"></span>
              </div>

              {/* Upload */}
              <div className="editproduct__container">
                <label htmlFor="productUpload" className="editproduct__label">
                  Image
                </label>
                <input
                  className={`editproduct__upload ${
                    isUploadValid() ? '' : ' editproduct__upload--error'
                  }`}
                  name="productUpload"
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={handleChangeUpload}
                ></input>
              </div>

              <div className="editproduct__buttons">
                <NavLink
                  to={`/products/${currentId}`}
                  className="editproduct__cancel"
                >
                  Cancel
                </NavLink>
                <button
                  input="submit"
                  className="editproduct__save"
                  value="save"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditProduct;