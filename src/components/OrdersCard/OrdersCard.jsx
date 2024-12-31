import {
  ChevronRightIcon,
  CalendarDaysIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import "./OrdersCard.css";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="orders-card">
      <div className="orders-card-content">
        <p className="orders-card-details">
          <div className="orders-card-date">
            <CalendarDaysIcon className="icon-small" />
            <span>01.02.23</span>
          </div>
          <div className="orders-card-products">
            <ShoppingBagIcon className="icon-small" />
            <span>{totalProducts} articles</span>
          </div>
        </p>
        <p className="orders-card-summary">
          <span className="total-price">${totalPrice}</span>
          <ChevronRightIcon className="icon-large" />
        </p>
      </div>
    </div>
  );
};

export { OrdersCard };
