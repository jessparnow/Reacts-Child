import React, { useCallback, useContext, useState } from "react";
import { withRouter, Redirect } from "react-router";
import AuthApp from "../../firebase";
import { AuthContext } from "../../AuthContext";
import { Link } from "react-router-dom";

const Login = ({ history }) => {
const [email, setEmail] = useState();
const [password, setPassword] = useState();
  console.log("hello? help")
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      // const { email, password } = event.target.elements;
      console.log(email, password)
      try {
        await AuthApp.auth().signInWithEmailAndPassword(
          email,
          password
        );
        console.log(email);
        history.push("/profile");
      } catch (error) {
        alert(error);
      }
    },
    [history, email, password]
  );
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser, "hacker voice: i'm in");
  if (currentUser) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <Link
              to="/signup"
              className={
                window.location.pathname === "/login" ||
                window.location.pathname === "/signup"
              }
            >
              Sign Up
            </Link>
          </p>
        </div>
        <form
          onSubmit={handleLogin}
          className="mt-8 space-y-6"
        >
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label for="email-address" className="sr-only">
                Email address
              </label>
              <input
              onChange={(e) => {setEmail(e.target.value)}}
                id="email-address"
                value={email}
                name="email"
                type="email"
                autocomplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
              onChange={(e) => {setPassword(e.target.value)}}
                id="password"
                value={password}
                name="password"
                type="password"
                autocomplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          {/* <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            {/* <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div> *
          </div> */}

          <div>
          
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
      
                Sign in
              </button>
           
          </div>
        </form>
      </div>
    </div>
  );
};

export default withRouter(Login);