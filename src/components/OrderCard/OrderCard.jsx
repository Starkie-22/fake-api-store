import { XMarkIcon } from "@heroicons/react/24/solid";
import "./OrderCard.css";

const OrderCard = (props) => {
  const { id, title, imageUrl, price, handleDelete } = props;

  return (
    <div className="order-card">
      <div className="order-card-left">
        <figure className="order-card-image">
          <img src={imageUrl} alt={title} />
        </figure>
        <p className="order-card-title">{title}</p>
      </div>
      <div className="order-card-right">
        <p className="order-card-price">{price}</p>
        {handleDelete && (
          <XMarkIcon onClick={() => handleDelete(id)} className="delete-icon" />
        )}
      </div>
    </div>
  );
};

export { OrderCard };
