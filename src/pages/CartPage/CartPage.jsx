import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/Contexts";
import { OrderCard } from "../../components/OrderCard";
import { totalPrice } from "../../utils/index.js";
import { Link } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const { cartProducts, setCartProducts, order, setOrder, setSearchByTitle } =
    useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(
      (product) => product.id !== id
    );
    setCartProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date().toLocaleDateString(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
    };
    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    setSearchByTitle("");
  };

  return (
    <div className="cart-page-container">
      <h2 className="cart-page-title">My Cart</h2>
      {cartProducts.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-products-container">
            {cartProducts.map((product) => (
              <OrderCard
                key={product.id}
                id={product.id}
                title={product.title}
                imageUrl={product.image}
                price={product.price}
                handleDelete={handleDelete}
              />
            ))}
          </div>
          <div className="cart-summary">
            <span className="cart-total">
              Total: ${totalPrice(cartProducts)}
            </span>
          </div>
          <Link to="/my-orders/last">
            <button className="checkout-button" onClick={handleCheckout}>
              Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export { CartPage };
