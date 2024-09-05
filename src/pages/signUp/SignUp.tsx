import { useFormik } from "formik";
import CustomInput from "../../components/customInput/CustomInput.tsx";
import CustomBtn from "../../components/customBtn/CustomBtn.tsx";
import { Link } from "react-router-dom";

import styles from "./signUp.module.css";
import { useAppDispatch } from "../../store/store.ts";
import { authThunks } from "../../store/authSlice.ts";

function SignUp() {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
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
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
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
