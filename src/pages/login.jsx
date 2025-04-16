import { jwtDecode } from "jwt-decode";
import LoginForm from "../components/LoginForm";
// const token = JSON.parse(sessionStorage.getItem("token"));
// console.log('token',jwtDecode(token).role);

const Login = () => {
  return (
    <div className="flex justify-center mt-">
      <LoginForm />
    </div>
  );
};

export default Login;
