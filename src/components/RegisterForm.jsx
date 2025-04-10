import { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/register", {
        name,
        email,
        role,
        password,
        password_confirmation,
      });

      alert(response.data.message);
    } catch (error) {
      console.error("Registration failed");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[400px] m-5">
      <h3 className="text-md font-semibold uppercase">Sign up</h3>
      <form className="w-full flex flex-col gap-4" onSubmit={handleRegister}>
        <div>
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <input
            className="w-full border border-black h-[35px] rounded-lg"
            id="email"
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex-1">
          <label className="text-sm" htmlFor="first-name">
            Name
          </label>
          <input
            className="w-full border border-black h-[35px] rounded-lg"
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <label className="text-sm" htmlFor="password">
              Password
            </label>
            <input
              className="w-full border border-black h-[35px] rounded-lg"
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex-1">
            <label className="text-sm" htmlFor="password-confirmation">
              Confirm Password
            </label>
            <input
              className="w-full border border-black h-[35px] rounded-lg"
              id="password-confirmation"
              name="password_confirmation"
              type="password"
              value={password_confirmation}
              onChange={(e) => setPassword_confirmation(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label htmlFor="role">Account Type</label>
          <div className="flex justify-items-center gap-4 h-full">
            <div className="flex items-center gap-2">
              <label>recruiter</label>
              <input
                type="radio"
                name="role"
                value="recruiter"
                checked={role === "recruiter"}
                onChange={(e) => setRole(e.target.value)}
                className="align-middle"
              />
            </div>
            <div className="flex items-center gap-2">
              <label htmlFor="">candidate</label>
              <input
                type="radio"
                name="role"
                value="candidate"
                checked={role === "candidate"}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="px-4 py-1.5 mt-2 bg-[#D9E0A4] rounded-md text-black text-center transition hover:bg-[#ABB17B] hover:text-white"
        >
          sign up
        </button>

        <p className="text-center">
          already have an account :{" "}
          <Link className="text-semibold" to="../login">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
