import { useContext } from "react";
import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import { ShoppingCartContext, ShoppingCartProvider } from "../../contexts";

import { Home } from "../Home";
import { MyAccount } from "../MyAccount";
import { MyOrders } from "../MyOrders";
import { MyOrder } from "../MyOrder";
import { SignIn } from "../SignIn";
import { NotFound } from "../NotFound";
import { Navbar } from "../../components/NavBar";
import { ProductDetailPage } from "../ProductDetailPage";
import { CartPage } from "../CartPage";

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