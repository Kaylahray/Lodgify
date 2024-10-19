import React, { useEffect, useState } from "react";
import { Logo } from "../assets/assets";
import { checkAuth, signInWithEmail } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    email: null,
    message: null,
    password: null,
  });
  const [password, setPassword] = useState("");
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const subscription = checkAuth(setSession);

    return () => subscription.unsubscribe();
  }, []);

  if (session) {
    // Redirect to dashboard
    navigate("/");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    const { error, data } = await signInWithEmail(email, password);

    if (error) {
      setErrors({
        email: errors.email,
        password: errors.password,
        message: error.message,
      });
    } else {
      console.log(data);
      navigate("/");
    }
  }

  // Clear the email error when the user types in the email field
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email || errors.message) {
      setErrors({ ...errors, email: null, message: null });
    }
  };

  // Clear the password error when the user types in the password field
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errors.password || errors.message) {
      setErrors({ ...errors, password: null, message: null });
    }
  };

  return (
    <div className="flex min-h-screen flex-1">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <Logo />
            <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            {errors.message ? (
              <p className="bg-red-50 text-red-700 p-4 border-red-700 rounded-md text-center mt-4">
                {errors.message}
              </p>
            ) : null}
          </div>

          <div className="mt-10">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={handleEmailChange} // Clear email error on change
                      value={email}
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errors.email ? (
                    <p className=" text-red-700 p-1 mt-2">
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={handlePasswordChange} // Clear password error on change
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  {errors.password ? (
                    <p className="text-red-700 p-1 mt-2">
                      {errors.password}
                    </p>
                  ) : null}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-3 block text-sm leading-6 text-gray-700"
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-customYellow px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1568495248636-6432b97bd949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzU4fHxob3RlbHxlbnwwfHwwfHx8MA%3D%3D"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Login;
