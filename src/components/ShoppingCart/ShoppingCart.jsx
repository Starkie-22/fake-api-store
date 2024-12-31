import { useContext } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../contexts/Contexts";
import "./ShoppingCart.css";

const ShoppingCart = () => {
  const { cartProducts, setIsCheckoutSideMenuOpen, setIsProductDetailOpen } =
    useContext(ShoppingCartContext);

  const openCheckoutSideMenu = () => {
    setIsProductDetailOpen(false);
    setIsCheckoutSideMenuOpen(true);
  };

  return (
    <div
      className="shopping-cart-container"
      onClick={() => openCheckoutSideMenu()}
    >
      <ShoppingCartIcon className="shopping-cart-icon" />
      <div className="cart-product-count">{cartProducts.length}</div>
    </div>
  );
};

export { ShoppingCart };
