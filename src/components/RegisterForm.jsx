import PrimaryButton from "./PrimaryButton";
const RegisterForm = () => {
  return (
    <div>
      <h3 className="text-md font-semibold uppercase">Sign up</h3>
      <div className="w-full flex flex-col gap-4">
        <div>
          <label className="text-sm" htmlFor="email">
            Email adress
          </label>
          <input
            className="w-full border border-black h-[35px] rounded-lg"
            id="email" name="email"
            type="text"
          />
        </div>
        <div>
          <div>
            <label className="text-sm" htmlFor="first-name">
              First Name
            </label>
            <input
              className="w-full border border-black h-[35px] rounded-lg"
              id="first-name" name="first-name"
              type="text"
            />
          </div>
          <div>
            <label className="text-sm" htmlFor="last-name">
              Last Name
            </label>
            <input
              className="w-full border border-black h-[35px] rounded-lg"
              id="last-name" name="last-name"
              type="text"
            />
          </div>
        </div>
        <div>
          <div>
            <label className="text-sm" htmlFor="password">
              Password
            </label>
            <input
              className="w-full border border-black h-[35px] rounded-lg"
              id="password" name="password"
              type="password"
            />
          </div>
          <div>
            <label className="text-sm" htmlFor="password-confirmation">
              Confirm Password
            </label>
            <input
              className="w-full border border-black h-[35px] rounded-lg"
              id="password-confirmation" name="password-confirmation"
              type="password"
            />
          </div>
        </div>

        <div>
          <label htmlFor="account-type">Account Type</label>
          <input type="radio" name="account-type" value="recruiter" />
          <input type="radio" name="account-type" value="candidate" />
        </div>

        <PrimaryButton text="sign up" py="py-1.5" />
        <p className="text-center">
          already have an account :{" "}
          <a className="text-semibold" href="">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
