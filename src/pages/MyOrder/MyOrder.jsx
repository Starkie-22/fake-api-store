import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../contexts/Contexts";
import { OrderCard } from "../../components/OrderCard/OrderCard";
import "./MyOrder.css";

function MyOrder() {
  const { order } = useContext(ShoppingCartContext);

  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") index = order?.length - 1;

  return (
    <>
      <div className="order-header">
        <Link to="/my-orders" className="back-link">
          <ChevronLeftIcon className="icon" />
        </Link>
        <h1 className="order-title">My Order</h1>
      </div>
      <div className="order-container">
        {order?.[index]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.image}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}

export { MyOrder };
