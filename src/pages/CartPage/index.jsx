import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts";
import { OrderCard } from "../../components/OrderCard";
import { totalPrice } from "../../utils";
import { Link } from "react-router-dom";

const CartPage = () => {
  const {
    cartProducts,
    setCartProducts,
    order,
    setOrder,
    setSearchByTitle,
  } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter((product) => product.id !== id);
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
    setSearchByTitle('');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">My Cart</h2>
      {cartProducts.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="flex flex-col gap-4 mb-6">
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
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-medium">Total: ${totalPrice(cartProducts)}</span>
          </div>
          <Link to="/my-orders/last">
            <button
              className="bg-black text-white py-2 px-4 rounded"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export { CartPage };