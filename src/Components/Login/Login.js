import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "../../firebase";
import { actionTypes } from "../../Reducer";
import { useStateValue } from "../../StateProvider";

const Login = () => {
    const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
            type: actionTypes.SET_USER,
            user: result.user
        })
        console.log(result);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div class="login">
      <div className="login__logo">
        <img
          src="https://worldsummit.ai/wp-content/uploads/sites/4/2021/07/Facebook-logo.png"
          alt=""
        />

        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png"
          alt=""
        />
      </div>

      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
