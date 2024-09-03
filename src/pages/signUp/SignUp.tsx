import { useFormik } from "formik";
import CustomInput from "../../components/customInput/CustomInput.tsx";
import CustomBtn from "../../components/customBtn/CustomBtn.tsx";
import { Link } from "react-router-dom";

import styles from "./signUp.module.css";

function SignUp() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={styles.signupWrapper}>
      <h2>Registration</h2>
      <form className={styles.signupForm} onSubmit={formik.handleSubmit}>
        <CustomInput
          type="email"
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
          name="confirmPassword"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
        />
        <CustomBtn type="submit" title="sign up" mode="main" />
      </form>
      <Link to="/signin">I already have an account</Link>
    </div>
  );
}

export default SignUp;
