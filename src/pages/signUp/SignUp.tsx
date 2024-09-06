import { useFormik } from "formik";
import CustomInput from "../../components/customInput/CustomInput.tsx";
import CustomBtn from "../../components/customBtn/CustomBtn.tsx";
import { Link } from "react-router-dom";

import styles from "./signUp.module.css";
import { useAppDispatch } from "../../store/store.ts";
import { authThunks } from "../../store/authSlice.ts";

function SignUp() {
  const dispatch = useAppDispatch();

  // const fetchSignUp = async () => {
  //   const res = await fetch("http://49.13.31.246:9191/signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username: formik.values.email,
  //       password: formik.values.password,
  //       confirm_password: formik.values.confirm_password,
  //     }),
  //   });
  //   console.log(res);
  // };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirm_password: "",
    },
    onSubmit: (values) => {
      dispatch(authThunks.signUp(values));
    },
  });

  return (
    <div className={styles.signupWrapper}>
      <h2>Registration</h2>
      <form className={styles.signupForm} onSubmit={formik.handleSubmit}>
        <CustomInput
          type="text"
          placeholder="email"
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
        />
        <CustomInput
          type="password"
          placeholder="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <CustomInput
          type="password"
          placeholder="confirm password"
          name="confirm_password"
          onChange={formik.handleChange}
          value={formik.values.confirm_password}
        />
        <CustomBtn type="submit" title="signup" mode="main" />
      </form>
      <Link to="/signin">I already have an account</Link>
    </div>
  );
}

export default SignUp;
