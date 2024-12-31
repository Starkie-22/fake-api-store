import { useContext } from "react";
import { Card } from "../../components/Card/Card";
import { ShoppingCartContext } from "../../contexts/Contexts";
import "./Home.css";

function Home() {
  const { setSearchByTitle, filteredItems } = useContext(ShoppingCartContext);

  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);

  const renderView = () => {
    if (index) {
      if (index === "men") {
        index = "men's clothing";
      } else if (index === "women") {
        index = "women's clothing";
      }
      return filteredItems
        ?.filter((item) => item.category === index)
        .map((item) => <Card key={item.id} {...item} />);
    } else {
      return filteredItems?.map((item) => <Card key={item.id} {...item} />);
    }
  };

  return (
    <>
      <div className="home-header">
        <h1 className="home-title">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="search-input"
        onChange={(event) => setSearchByTitle(event.target.value)}
      />
      <div className="products-grid">{renderView()}</div>
    </>
  );
}

export { Home };
