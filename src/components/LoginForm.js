import userJSON from "../user.json";
import { useState } from "react";

function LoginForm() {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const onChangeEventHandler = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const findAuthorisedUser = (e) => {
    e.preventDefault();
    const validuser = userJSON.find(
      (user) =>
        user.username === userData.username &&
        user.password === userData.password
    );
    if (validuser) {
      alert("Login successful");
    } else {
      alert("Wrong password or username");
    }
  };

  return (
    <div className="bg-slate-300 border-2 border-black rounded-md my-6 mx-auto w-5/6 lg:w-1/4 h-96 justify-center flex items-center flex-col gap-6">
      <p className="text-4xl tracking-wider">Login</p>
      <form
        className="flex flex-col w-10/12 gap-4 items-center"
        onSubmit={findAuthorisedUser}
      >
        <input
          type="text"
          name="username"
          value={userData.username}
          onChange={onChangeEventHandler}
          className="border w-3/4 border-black rounded-sm"
        />
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
  );
}

export default LoginForm;
