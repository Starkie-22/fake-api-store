import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../contexts/Contexts";
import { ShoppingCart } from "../ShoppingCart/ShoppingCart";
import "./Navbar.css";

const Navbar = () => {
  const {
    signOut,
    account,
    saveSignOut,
    setCartProducts,
    setSearchByTitle,
    setIsProductDetailOpen,
  } = useContext(ShoppingCartContext);

  const activeStyle = "active-link";

  const isUserSignOut = signOut;
  const hasUserAnAccount = Object.keys(account).length !== 0;

  const handleSignOut = () => {
    setCartProducts([]);
    setIsProductDetailOpen(false);
    setSearchByTitle("");
    saveSignOut(true);
  };

  const renderView = () => {
    if (hasUserAnAccount && !isUserSignOut) {
      return (
        <>
          <li className="email-info">{account?.email}</li>
          <li>
            <NavLink
              to="/my-orders"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-account"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-in"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={handleSignOut}
            >
              Sign out
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={handleSignOut}
          >
            Sign out
          </NavLink>
        </li>
      );
    }
  };

  return (
    <nav className="navbar">
      <ul className="navbar-left">
        <li className="logo">
          <NavLink to={`${isUserSignOut ? "/sign-in" : "/"}`}>
            Fake API Store
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/men"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Men
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/women"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Women
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/jewelery"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Jewelery
          </NavLink>
        </li>
      </ul>
      <ul className="navbar-right">
        {renderView()}
        <li>
          <NavLink to="/cart">
            <ShoppingCart />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
