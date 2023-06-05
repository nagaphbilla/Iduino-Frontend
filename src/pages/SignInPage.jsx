import React, {useState } from "react";
import "../signInPage.css";

export default function SignInPage() {
  const [containerClass, setcontainerClass] = useState("");
  return (
    <div className="body_signIn">
      <div className={`container_signIn ${containerClass}`} id="container_signIn">
        <div className="form-container_signIn sign-up-container_signIn">
          <form action="#" className="form_signIn">
            <h1 className="h1_signIn">Create Account</h1>
            <span className="span_signIn">use your email for registration</span>
            <input className="input_signIn" type="text" placeholder="Name" />
            <input className="input_signIn" type="email" placeholder="Email" />
            <input className="input_signIn" type="password" placeholder="Password" />
            <button className="button_signIn">Sign Up</button>
          </form>
        </div>
        <div className="form-container_signIn sign-in-container_signIn">
          <form action="#" className="form_signIn">
            <h1 className="h1_signIn">Sign in</h1>
            <input className="input_signIn" type="email" placeholder="Email" />
            <input className="input_signIn" type="password" placeholder="Password" />
            <a className="a_signIn" href="#">Forgot your password?</a>
            <button className="button_signIn">Sign In</button>
          </form>
        </div>
        <div className="overlay-container_signIn">
          <div className="overlay_signIn">
            <div className="overlay-panel_signIn overlay-left_signIn">
              <h1 className="h1_signIn">Welcome Back!</h1>
              <p className="p_signIn">
                To keep connected with us please login with your personal info
              </p>
              <button
                className="button_signIn ghost_signIn"
                id="signIn"
                onClick={() => {
                  setcontainerClass("");
                }}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel_signIn overlay-right_signIn">
              <h1 className="h1_signIn">Hello, Friend!</h1>
              <p className="p_signIn">Enter your personal details and start a journey with us</p>
              <button
                className="button_signIn ghost_signIn"
                id="signUp"
                onClick={() => {
                  setcontainerClass("right-panel-active");
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
