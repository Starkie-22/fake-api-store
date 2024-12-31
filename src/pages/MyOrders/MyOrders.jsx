import { useContext } from "react";
import { Link } from "react-router-dom";

import { ShoppingCartContext } from "../../contexts/Contexts";
import { OrdersCard } from "../../components/OrdersCard/OrdersCard";
import "./MyOrders.css";

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);

  return (
    <>
      <div className="orders-header">
        <h1 className="orders-title">My Orders</h1>
      </div>
      <div className="orders-container">
        {order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`} className="order-link">
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export { MyOrders };
