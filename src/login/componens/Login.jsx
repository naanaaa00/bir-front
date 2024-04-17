import react, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, RegisterUser, reset } from "../../features/authSlice";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth);

    useEffect(() => {
      if (user || isSuccess) {
        navigate("/dashboard");
      }
      dispatch(reset());
    }, [user, isSuccess, dispatch, navigate]);

    const Auth = (e) => {
      e.preventDefault();
      dispatch(LoginUser({ email, password }));
    };

    return (
      <div>
        <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
          <h1 className="text-4xl text-white font-bold text-center mb-6">Login</h1>
          <form onSubmit={Auth}>
            {isError && <p className="text-red-500 bg-stone-100 text-sm text-center">{message}</p>}
            <div className=" relative my-4 ">
              <input
                type="email"
                className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white-A700 focus:border-blue-600 peer"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor=""
                className=" absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
              >
                Your Email
              </label>
            </div>
            <div className=" relative my-4 ">
              <input
                type="password"
                className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white-A700 focus:border-blue-600 peer"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                htmlFor=""
                className=" absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
              >
                Your Password
              </label>
            </div>
            <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white-A700 text-emerald-800 hover:bg-emerald-600 hover:text-white-A700 py-2 transition-colors duration-500" type="submit">
              {isLoading ? "Loading..." : "Login"}
            </button>
            <div>
              <p className="text-white-400 mb-4 text-sm font-medium cursor-pointer" onClick={() => setIsLogin(false)}>
                Create a New Account?
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const SignUpForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, isError, isSuccess, isLoading, message } = useSelector((state) => state.auth);

    useEffect(() => {
      if (user || isSuccess) {
        setIsLogin(true);
      }
      dispatch(reset());
    }, [user, isSuccess, dispatch, navigate]);

    const Auth = (e) => {
      e.preventDefault();
      dispatch(RegisterUser({ username, email, password, confPassword }));
    };
    return (
      <div>
        <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
          <h1 className="text-4xl text-white font-bold text-center mb-6">Create Account!</h1>
          <form onSubmit={Auth}>
            {isError && <p className="text-red-500 bg-stone-100 text-sm text-center">{message}</p>}
            <div className=" relative my-4 ">
              <input
                type="text"
                className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white-A700 focus:border-blue-600 peer"
                placeholder=""
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label
                htmlFor=""
                className=" absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
              >
                Your Name
              </label>
            </div>
            <div className=" relative my-4 ">
              <input
                type="email"
                className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white-A700 focus:border-blue-600 peer"
                placeholder=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor=""
                className=" absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
              >
                Your Email
              </label>
            </div>
            <div className=" relative my-4 ">
              <input
                type="password"
                className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white-A700 focus:border-blue-600 peer"
                placeholder=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                htmlFor=""
                className=" absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
              >
                Your Password
              </label>
            </div>
            <div className=" relative my-4 ">
              <input
                type="password"
                className="block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white-A700 focus:border-blue-600 peer"
                placeholder=""
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
              />
              <label
                htmlFor=""
                className=" absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0  peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 "
              >
                Conf Password
              </label>
            </div>
            <button className="w-full mb-4 text-[18px] mt-6 rounded-full bg-white-A700 text-emerald-800 hover:bg-emerald-600 hover:text-white-A700 py-2 transition-colors duration-500" type="submit">
              {isLoading ? "Loading..." : "Register"}
            </button>
            <div>
              <p className="text-white-400 mb-4 text-sm font-medium cursor-pointer" onClick={() => setIsLogin(true)}>
                Sign In to your Account?
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return <div>{isLogin ? <LoginForm /> : <SignUpForm />}</div>;
};

export default Login;
