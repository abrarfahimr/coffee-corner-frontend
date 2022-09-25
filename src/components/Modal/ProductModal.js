import './ProductModal.scss';
import axios from 'axios';
import { useRef } from 'react';
import exit from '../../assets/icons/close-24px.svg'
import { useNavigate } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL;

const ProductModal = ({ openModal, setOpenModal, productId, productName, }) => {
  const navigate = useNavigate();

   const modalRef = useRef();
   const closeModal = (e) => {
     if (modalRef.current === e.target) {
       setOpenModal(false);
     }
   };
  
  const deleteHandler = () => {
    axios
      .delete(`${API_URL}/products/${productId}`)
      .then((response) => {
      })
      .catch((error) => {
        console.log(error);
      });
    navigate('/products')
  };

  return (
    <>
      {openModal ? (
        <div className="background" ref={modalRef} onClick={closeModal}>
          <div className="modal">
            <div className="modal__top">
              <img
                className="modal__exit"
                src={exit}
                alt={exit}
                onClick={() => {
                  setOpenModal();
                }}
              />
              <h1 className="modal__header">
                Delete <span className='modal__product'>{productName} </span> from the product list?
              </h1>
              <h2 className="modal__confirm">
                Please confirm that you’d like to delete this item from the
                list? You cannot undo this action.
              </h2>
            </div>
            <div className="modal__bottom">
              <button
                className="modal__cancel"
                onClick={() => {
                  setOpenModal((prev) => !prev);
                }}
              >
                {' '}
                Cancel
              </button>
              <button className="modal__delete" onClick={() => deleteHandler()}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );

};

export default ProductModal;