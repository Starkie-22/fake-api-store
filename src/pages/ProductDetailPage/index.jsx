// fake-api-store/src/pages/ProductDetailPage/index.jsx
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../contexts";

function ProductDetailPage() {
  const { id } = useParams();
  const {
    productToShow,
    setProductToShow,
    filteredItems,
  } = useContext(ShoppingCartContext);

  // Find the product based on the ID in the URL
  useEffect(() => {
    const product = filteredItems.find((item) => item.id === parseInt(id));
    setProductToShow(product);
  }, [id, filteredItems, setProductToShow]);

  if (!productToShow) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-2xl font-semibold mb-4">{productToShow.title}</h2>
      <img
        src={productToShow.image}
        alt={productToShow.title}
        className="w-64 h-64 object-cover rounded-lg mb-4"
      />
      <p className="text-gray-700 mb-4">{productToShow.description}</p>
      <p className="text-lg font-medium">Price: ${productToShow.price}</p>
      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
}

export { ProductDetailPage };