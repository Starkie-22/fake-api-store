import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../contexts/Contexts";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { productToShow, isProductDetailOpen, setIsProductDetailOpen } =
    useContext(ShoppingCartContext);

  return (
    <aside
      className={`product-detail ${isProductDetailOpen ? "open" : "hidden"}`}
    >
      <div className="product-detail-header">
        <h2>Detail</h2>
        <div>
          <XMarkIcon
            onClick={() => setIsProductDetailOpen(false)}
            className="close-icon"
          />
        </div>
      </div>
      <figure className="product-detail-figure">
        <img
          className="product-image"
          src={productToShow.image}
          alt={productToShow.title}
        />
      </figure>
      <p className="product-detail-content">
        <span className="price">${productToShow.price}</span>
        <span className="title">{productToShow.title}</span>
        <span className="description">{productToShow.description}</span>
      </p>
    </aside>
  );
};

export { ProductDetail };
