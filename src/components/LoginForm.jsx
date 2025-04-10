import React from "react";
import PrimaryButton from "./PrimaryButton";

const LoginForm = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full max-w-[400px] m-5">
      <h3 className="text-md font-semibold uppercase">Log in</h3>
      <div className="w-full flex flex-col gap-4">
        <div>
          <label className="text-sm" htmlFor="email">Email adress</label>
          <input className="w-full border border-black h-[35px] rounded-lg" id="email" name="email" type="text" />
        </div>

        <div>
          <label className="text-sm" htmlFor="password">Password</label>
          <input className="w-full border border-black h-[35px] rounded-lg" id="password" name="password" type="password" />
        </div>
        
        <PrimaryButton text="login" py="py-1.5"/>
        <p className="text-center">don't have an account : <a className="text-semibold" href="">Sign Up</a></p>
      </div>
    </div>
  );
};

export default LoginForm;
