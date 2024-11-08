import { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";

import { ShoppingCartContext } from "../../contexts";

const Card = (data) => {
  const {
    setIsProductDetailOpen,
    setProductToShow,
    cartProducts,
    setCartProducts,
    setIsCheckoutSideMenuOpen,
  } = useContext(ShoppingCartContext);

  const navigate = useNavigate(); // Initialize navigate function

  const showProduct = (productDetail) => {
    setIsCheckoutSideMenuOpen(false);
    setIsProductDetailOpen(true);
    setProductToShow(productDetail);
    navigate(`/product/${productDetail.id}`); // Navigate to product detail page
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
        <button className="absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1">
          <CheckIcon className="h-6 w-6 text-white" />
        </button>
      );
    } else {
      return (
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => addProductsToCart(event, data)}
        >
          <PlusIcon className="h-6 w-6 text-black" />
        </button>
      );
    }
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg mb-12"
      onClick={() => showProduct(data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.category}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.image}
          alt={data.title}
        />
        {renderIcon(data.id)}
      </figure>
      <p className="flex justify-between items-center">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </div>
  );
};

export { Card };