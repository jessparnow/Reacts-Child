import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AuthContext } from "./AuthContext";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const {currentUser} = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={routeProps =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <>
          </>
          // <Redirect to={"/Login"} /> (took out the redirect)
        )
      }
    />
  );
};


export default PrivateRoute