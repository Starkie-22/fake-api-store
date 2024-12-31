import { useContext } from "react";
import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import {
  ShoppingCartContext,
  ShoppingCartProvider,
} from "../../contexts/Contexts";

import { Home } from "../Home/Home";
import { MyAccount } from "../MyAccount/MyAccount";
import { MyOrders } from "../MyOrders/MyOrders";
import { MyOrder } from "../MyOrder/MyOrder";
import { SignIn } from "../SignIn/SignIn";
import { NotFound } from "../NotFound/NotFound";
import { Navbar } from "../../components/NavBar";
import { ProductDetailPage } from "../ProductDetailPage/ProductDetailPage";
import { CartPage } from "../CartPage/CartPage";

const AppRoutes = () => {
  const { account, signOut } = useContext(ShoppingCartContext);

  const isUserSignOut = signOut;
  const hasUserAnAccount = Object.keys(account).length !== 0;

  let routes = useRoutes([
    {
      path: "/",
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Home />
        ) : (
          <Navigate replace to={"/sign-in"} />
        ),
    },
    {
      path: "/:category",
      element:
        hasUserAnAccount && !isUserSignOut ? (
          <Home />
        ) : (
          <Navigate replace to={"/sign-in"} />
        ),
    },
    { path: "/cart", element: <CartPage /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/product/:id", element: <ProductDetailPage /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}

export default App;
