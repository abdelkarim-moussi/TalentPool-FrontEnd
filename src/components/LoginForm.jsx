import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import { Link } from "react-router-dom";
import axios from "axios";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });
      alert('your are loged in')
      sessionStorage.setItem("token", JSON.stringify(response.data.token));
    } catch (error) {
      console.log("Login Failed", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[400px] mt-5">
      <h3 className="text-md font-semibold uppercase">Log in</h3>
      <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
        <div>
          <label className="text-sm" htmlFor="email">
            Email adress
          </label>
          <input
            className="w-full border border-black h-[35px] rounded-lg"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
          />
        </div>

        <div>
          <label className="text-sm" htmlFor="password">
            Password
          </label>
          <input
            className="w-full border border-black h-[35px] rounded-lg"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </div>

        <button
          type="submit"
          className="px-4 py-1.5 mt-2 bg-[#D9E0A4] rounded-md text-black text-center transition hover:bg-[#ABB17B] hover:text-white"
        >
          login
        </button>
        <p className="text-center">
          don't have an account :{" "}
          <Link className="text-semibold" to="../register">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
