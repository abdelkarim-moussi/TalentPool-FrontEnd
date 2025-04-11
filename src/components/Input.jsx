import React from "react";

const Input = ({ label, id, name, value, onChange, type, extra ,div_extra }) => {
  return (
    <div className={div_extra}>
      <label className="text-sm" htmlFor={name}>
        {label}
      </label>
      <input
        className={`w-full border border-black h-[35px] rounded-lg ${extra}`}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};

export default Input;
