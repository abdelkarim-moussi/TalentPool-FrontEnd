import { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import { Link } from "react-router-dom";
import axios from "axios";
import Input from "./Input";
import Button from "./Button";

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
      sessionStorage.setItem("token", JSON.stringify(response.data.token));
    } catch (error) {
      console.error("Registration failed");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[400px] mt-5">
      <h3 className="text-md font-semibold uppercase">Sign up</h3>
      <form className="w-full flex flex-col gap-4" onSubmit={handleRegister}>
        <Input
          label="Email"
          name="email"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="Email"
          name="Name"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="flex gap-4">
          <Input
            label="Password"
            name="password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            label="Password confirmation"
            name="password-confirmation"
            id="password-confirmation"
            type="password"
            value={password_confirmation}
            onChange={(e) => setPassword_confirmation(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="role">Account Type</label>
          <div className="flex gap-4 h-full">
            <Input
              label="recruiter"
              name="role"
              id="recruiter"
              type="radio"
              value="recruiter"
              extra="w-3"
              div_extra="flex items-center gap-2"
              onChange={(e) => setRole(e.target.value)}
            />

            <Input
              label="candidate"
              name="role"
              id="candidate"
              type="radio"
              value="candidate"
              extra="w-3"
              div_extra="flex items-center gap-2"
              onChange={(e) => setRole(e.target.value)}
            />
          </div>
        </div>

        <Button type="submit" text="sign up" />

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
