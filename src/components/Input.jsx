import React from "react";

const {
  register,
  formState: { errors },
} = useFormContext();

const inputError = findInputError(errors, label);
const isInvalid = isFormInvalid(inputError);

const Input = ({
  label,
  id,
  name,
  value,
  onChange,
  type,
  extra,
  div_extra,
}) => {
  return (
    <div className={`flex gap-2 ${div_extra}`}>
      <label className="text-sm lowercase" htmlFor={name}>
        {label}
      </label>

      <AnimatePresence mode="wait" initial={false}>
        {isInvalid && (
          <InputError
            message={inputError.error.message}
            key={inputError.error.message}
          />
        )}
      </AnimatePresence>

      <input
        className={`w-full border border-black h-[35px] rounded-lg ${extra}`}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        {...register(label, {
          required: {
            value: true,
            message: "required",
          },
        })}
      />
    </div>
  );
};

const InputError = ({ message }) => {
  return (
    <motion.p
      className="flex items-center gap-1 px-2 font-semibold text-red-500 bg-red-100 rounded-md"
      {...framer_error}
    >
      <MdError />
      {message}
    </motion.p>
  );
};

const framer_error = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.2 },
};

export default Input;
