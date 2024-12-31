import { useContext, useState, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import { ShoppingCartContext } from "../../contexts/Contexts";
import "./SignIn.css";

function SignIn() {
  const { account, saveAccount, saveSignOut } = useContext(ShoppingCartContext);
  const [view, setView] = useState("user-info");
  const form = useRef(null);

  const hasUserAnAccount = Object.keys(account).length !== 0;

  const handleSignIn = () => {
    saveSignOut(false);
    return <Navigate replace to={"/"} />;
  };

  const createAnAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    saveAccount(data);
    handleSignIn();
  };

  const renderLogIn = () => {
    return (
      <div className="signin-container">
        <p className="welcome-text">
          {hasUserAnAccount ? account?.name : "Create an account"}
        </p>
        <Link to="/">
          <button
            className="login-btn"
            onClick={() => handleSignIn()}
            disabled={!hasUserAnAccount}
          >
            Log in
          </button>
        </Link>
        <button
          className="signup-btn"
          onClick={() => setView("create-user-info")}
          disabled={hasUserAnAccount}
        >
          Sign up
        </button>
      </div>
    );
  };

  const renderCreateUserInfo = () => {
    return (
      <form ref={form} className="create-account-form">
        <div className="form-group">
          <label htmlFor="name">Your name:</label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={account?.name}
            placeholder="Peter"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your email:</label>
          <input
            type="email"
            id="email"
            name="email"
            defaultValue={account?.email}
            placeholder="hi@helloworld.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Your password:</label>
          <input
            type="password"
            id="password"
            name="password"
            defaultValue={account?.password}
            placeholder="******"
          />
        </div>
        <Link to="/">
          <button
            className="create-account-btn"
            onClick={() => createAnAccount()}
          >
            Create
          </button>
        </Link>
      </form>
    );
  };

  const renderView = () =>
    view === "create-user-info" ? renderCreateUserInfo() : renderLogIn();

  return (
    <div className="signin-wrapper">
      <h1 className="signin-header">Welcome to Fake API Store</h1>
      {renderView()}
    </div>
  );
}

export { SignIn };
