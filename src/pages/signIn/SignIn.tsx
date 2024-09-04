import { useFormik } from "formik";
import CustomInput from "../../components/customInput/CustomInput.tsx";
import CustomBtn from "../../components/customBtn/CustomBtn.tsx";
import { Link } from "react-router-dom";

import styles from "./signIn.module.css";

function SignIn() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={styles.signinWrapper}>
      <h2>Enter your details</h2>
      <form className={styles.signinForm} onSubmit={formik.handleSubmit}>
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
        <CustomBtn type="submit" title="signin" mode="main" />
      </form>
      <Link to="/signup">I do not have an account</Link>
    </div>
  );
}

export default SignIn;
