import userJSON from "../user.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm({ setIsAuthenticated }) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const onChangeEventHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const findAuthorisedUser = (e) => {
    e.preventDefault();
    const validUser = userJSON.find(
      (user) =>
        user.username === userData.username &&
        user.password === userData.password
    );
    if (validUser) {
      // alert("Login successful");
      navigate("/dishes");
      setIsAuthenticated(true);
    } else {
      alert("Wrong password or username");
    }
  };

  return (
    <div className="flex flex-row w-full h-full">
      <div className="w-1/3 items-center justify-center flex border-r">
        <div className="w-full flex items-center justify-end flex-col">
          <p className="text-5xl font-serif">Welcome to Dish Poll... </p>
          <p className="text-[11px] pt-3">
            <strong>Note:</strong> You can use "guest" as username and
            "guest123" as password.
          </p>
        </div>
      </div>
      <div className=" border-2 border-black rounded-md my-36 mx-auto w-2/3 lg:w-1/4 h-96 justify-center flex items-center flex-col gap-6 box-border shadow-[0_0px_9px_3px_rgba(0,0,0,0.6)]">
        <p className="text-4xl tracking-wider">Login</p>
        <form
          className="flex flex-col w-10/12 gap-4 items-center"
          onSubmit={findAuthorisedUser}
        >
          <label className="text-left w-3/4">Username</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={onChangeEventHandler}
            className="border w-3/4 border-black rounded-sm"
          />
          <label className="text-left w-3/4">Password</label>
          <input
            type="password"
            name="password"
            value={userData.password}
            className="border w-3/4 border-black rounded-sm"
            onChange={onChangeEventHandler}
          />
          <input
            type="submit"
            className="border w-1/2  border-black rounded-sm cursor-pointer bg-black text-white p-1"
          />
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
