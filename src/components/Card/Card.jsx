import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";

import { ShoppingCartContext } from "../../contexts/Contexts";
import "./Card.css";

const Card = (data) => {
  const {
    setIsProductDetailOpen,
    setProductToShow,
    cartProducts,
    setCartProducts,
    setIsCheckoutSideMenuOpen,
  } = useContext(ShoppingCartContext);

  const navigate = useNavigate();

  const showProduct = (productDetail) => {
    setIsCheckoutSideMenuOpen(false);
    setIsProductDetailOpen(true);
    setProductToShow(productDetail);
    navigate(`/product/${productDetail.id}`);
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    setCartProducts([...cartProducts, productData]);
    setIsCheckoutSideMenuOpen(true);
    setIsProductDetailOpen(false);
  };

  const renderIcon = (id) => {
    const isInCart = cartProducts?.some((product) => product.id === id);

    if (isInCart) {
      return (
        <button className="icon-button black-bg">
          <CheckIcon className="icon white-text" />
        </button>
      );
    } else {
      return (
        <button
          className="icon-button white-bg"
          onClick={(event) => addProductsToCart(event, data)}
        >
          <PlusIcon className="icon black-text" />
        </button>
      );
    }
  };

  return (
    <div className="card-container" onClick={() => showProduct(data)}>
      <figure className="card-figure">
        <span className="category-badge">{data.category}</span>
        <img className="card-image" src={data.image} alt={data.title} />
        {renderIcon(data.id)}
      </figure>
      <p className="card-details">
        <span className="card-title">{data.title}</span>
        <span className="card-price">${data.price}</span>
      </p>
    </div>
  );
};

export { Card };
