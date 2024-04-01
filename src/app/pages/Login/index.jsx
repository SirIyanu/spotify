import React, { useEffect } from "react";
import Logo from "../../components/Logo/Logo";
import { useNavigation } from "../../hooks/useNavigation";
import { CustomButton } from "../../components/Button";
import style from "./style.module.css";
import { FaApple, FaFacebook } from "react-icons/fa";
import { ReactComponent as GoogleIcon } from "../../assets/icons/google.svg";
import { CustomInput } from "../../components/Input";
import { toast } from "react-toastify";
import { isUserLogin } from "../../../utils/user";
import { routes } from "../../route";

export const LoginPage = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [rememberMe, setRememberMe] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { navigate } = useNavigation();
  // console.log(email, password, rememberMe);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleRememberMeCheckbox = (event) => {
    setRememberMe(event.target.checked);
  };
  const handleLogin = () => {
    setIsSubmitting(true);
    const payload = {
      username: email,
      password,
      rememberMe,
    };
    console.log({ payload }, "i'm working");
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        if (response.status >= 400) {
          const data = await response.json();
          throw data;
        }
        return response.json();
      })
      .then((response) => {
        console.log("I got a login success", response);
        localStorage.setItem("user", JSON.stringify(response));
        window.location.href = routes.dashboard;
      })
      .catch((error) => {
        console.log("i got a login error", error.message);
        toast(error.message);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  useEffect(() => {
    const user = isUserLogin();
    if (user) {
      window.location.href = routes.dashboard;
    }
  }, []);

  return (
    <section>
      <header className={style.header}>
        <Logo />
      </header>
      <main className={style.main}>
        <CustomButton
          className={style.facebook}
          onClick={() => navigate("home")}
        >
          <FaFacebook size={"1rem"} /> &nbsp; Continue with Facebook
        </CustomButton>
        <CustomButton onClick={() => navigate("playlist")}>
          <FaApple size={"1rem"} /> &nbsp; Continue with Apple
        </CustomButton>
        <CustomButton
          className={style.google}
          onClick={() => navigate("dashboard")}
        >
          <GoogleIcon /> &nbsp; Continue with Google
        </CustomButton>
        <br />
        <div className={style.divider}>
          <span>OR</span>
        </div>
        <CustomInput
          onChange={handleEmail}
          type="email"
          placeholder={"Email address or username"}
          label={"Email address or username"}
        />
        <CustomInput
          onChange={handlePassword}
          type="password"
          placeholder={"Password"}
          label={"Password"}
        />
        <a href="/forgot-password" className={style.forgot}>
          Forgot your password?
        </a>
        <div className={style.flex}>
          <div>
            <input
              id="remember-me"
              type="checkbox"
              onChange={handleRememberMeCheckbox}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>

          <CustomButton
            className={style.login}
            disabled={isSubmitting}
            onClick={handleLogin}
          >
            Login
          </CustomButton>
        </div>

        <div className={style.divider}></div>
        <br />
        <p> Dont have an account? </p>
        <CustomButton
          className={style.google}
          onClick={() => navigate("dashboard")}
        >
          Sign up for Spotify
        </CustomButton>
      </main>
    </section>
  );
};
