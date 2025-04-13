import React, { useState } from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
import axios from "axios";
import Input from "./Input";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (value) => {
    const regex = /^\S+@\S+\.\S+$/;
    return regex.test(value);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setError("Invalid email format");
    } else {
      setError("");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        email,
        password,
      });

      alert("your are loged in");
      sessionStorage.setItem("token", JSON.stringify(response.data.token));
    } catch (error) {
      console.log("Login Failed", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[400px] mt-5">
      <h3 className="text-md font-semibold uppercase">Log in</h3>

      <form onSubmit={handleLogin} className="w-full flex flex-col gap-4">
        <Input
          label="Email"
          name="email"
          id="email"
          type="email"
          value={email}
          div_extra="flex-col"
          onChange={handleChange}
        />
        {error && <p className="text-sm text-red-500 mt-[-10px]">{error}</p>}

        <Input
          label="Password"
          name="password"
          id="password"
          type="password"
          value={password}
          div_extra="flex-col"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" text="login" />

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
