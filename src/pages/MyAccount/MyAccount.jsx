import { useContext, useState, useRef } from "react";
import { ShoppingCartContext } from "../../contexts/Contexts";
import "./MyAccount.css";

function MyAccount() {
  const { saveAccount } = useContext(ShoppingCartContext);
  const [view, setView] = useState("user-info");
  const account = localStorage.getItem("account");
  const parsedAccount = JSON.parse(account);
  const form = useRef(null);

  const editAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    saveAccount(data);
  };

  const renderUserInfo = () => {
    return (
      <div className="user-info-container">
        <p>
          <span className="label">Name: </span>
          <span>{parsedAccount?.name}</span>
        </p>
        <p>
          <span className="label">Email: </span>
          <span>{parsedAccount?.email}</span>
        </p>
        <button
          className="button edit-button"
          onClick={() => setView("edit-user-info")}
        >
          Edit
        </button>
      </div>
    );
  };

  const renderEditUserInfo = () => {
    return (
      <form ref={form} className="edit-form">
        <div className="form-group">
          <label htmlFor="name" className="label">
            Your name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            defaultValue={parsedAccount.name}
            placeholder="Peter"
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="label">
            Your email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            defaultValue={parsedAccount.email}
            placeholder="hi@helloworld.com"
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="label">
            Your password:
          </label>
          <input
            type="text"
            id="password"
            name="password"
            defaultValue={parsedAccount.password}
            placeholder="******"
            className="input"
          />
        </div>
        <button
          className="button save-button"
          onClick={() => {
            setView("user-info"), editAccount();
          }}
        >
          Save
        </button>
      </form>
    );
  };

  const renderView = () =>
    view === "edit-user-info" ? renderEditUserInfo() : renderUserInfo();

  return (
    <>
      <h1 className="title">My Account</h1>
      {renderView()}
    </>
  );
}

export { MyAccount };
