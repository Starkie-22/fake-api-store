import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../contexts/Contexts";
import "./ProductDetailPage.css";

function ProductDetailPage() {
  const { id } = useParams();
  const { productToShow, setProductToShow, filteredItems } =
    useContext(ShoppingCartContext);

  useEffect(() => {
    const product = filteredItems.find((item) => item.id === parseInt(id));
    setProductToShow(product);
  }, [id, filteredItems, setProductToShow]);

  if (!productToShow) return <p className="loading-message">Loading...</p>;

  return (
    <div className="product-detail-container">
      <h2 className="product-title">{productToShow.title}</h2>
      <img
        src={productToShow.image}
        alt={productToShow.title}
        className="product-image"
      />
      <p className="product-description">{productToShow.description}</p>
      <p className="product-price">Price: ${productToShow.price}</p>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
}

export { ProductDetailPage };
