import { useContext, useState, useRef } from "react";
import { Link, Navigate } from "react-router-dom";
import { ShoppingCartContext } from "../../contexts";

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
      <>
        <div className="flex flex-col w-80">
          {/* {renderDataUser()} */}
          <p className="font-light text-lg text-center">
            {hasUserAnAccount ? account?.name : "Create an account"}
          </p>
          <Link to="/">
            <button
              className="bg-black disabled:bg-black/40 text-white  w-full rounded-lg py-3 mt-4 mb-2"
              onClick={() => handleSignIn()}
              disabled={!hasUserAnAccount}
            >
              Log in
            </button>
          </Link>
          <button
            className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-6 py-3"
            onClick={() => setView("create-user-info")}
            disabled={hasUserAnAccount}
          >
            Sign up
          </button>
        </div>
      </>
    );
  };

  const renderCreateUserInfo = () => {
    return (
      <form ref={form} className="flex flex-col gap-4 w-80">
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-light text-sm">
            Your name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={account?.name}
            placeholder="Peter"
            className="rounded-lg border border-black placeholder:font-light
            placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="font-light text-sm">
            Your email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={account?.email}
            placeholder="hi@helloworld.com"
            className="rounded-lg border border-black
            placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="font-light text-sm">
            Your password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            defaultValue={account?.password}
            placeholder="******"
            className="rounded-lg border border-black
            placeholder:font-light placeholder:text-sm placeholder:text-black/60 focus:outline-none py-2 px-4"
          />
        </div>
        <Link to="/">
          <button
            className="bg-black text-white w-full rounded-lg py-3"
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
    <>
      <h1 className="font-medium text-xl text-center mb-6 w-80">
        Welcome to Fake API Store
      </h1>
      {renderView()}
    </>
  );
}

export { SignIn };