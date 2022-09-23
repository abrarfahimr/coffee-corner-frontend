import { Link } from "react-router-dom";
import editIcon from "../../assets/icons/edit.svg";

const ProductList = ({ product, onClickHandler }) => {

  return (
    <div className="products__list">
      <div className="products__firstlist">
        <div className="products__product">
          <h3 className="products__title">Product Name</h3>
          <div className="products__productname">
            <img
              className="products__image"
              src={product.image}
              alt="product logo"
            />
            <p className="products__name">{product.product_name}</p>
          </div>
        </div>
        <div className="products__id">
          <h3 className="products__title">Product ID</h3>
          <p className="products__numbers">{product.product_id}</p>
        </div>
      </div>
      <div className="products__secondlist">
        <div className="products__stock">
          <h3 className="products__title">Current Stock</h3>
          <p className="products__numbers">{product.stock}</p>
        </div>
        <div className="products__price">
          <h3 className="products__title">Price per item</h3>
          <p className="products__numbers">{product.price}</p>
        </div>
      </div>
      <div className="products__thirdlist">
        <div className="products__sales">
          <h3 className="products__title">Total Sales</h3>
          <p className="products__numbers">{product.sales}</p>
        </div>
      </div>
      <div className="products__fourthlist">
        <div className="products__edit">
          <Link className="products__button" to={`/products/${product.id}`}>
            <img src={editIcon} alt="edit icon" className="products__icon" />{' '}
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductList;