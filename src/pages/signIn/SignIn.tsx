import { useFormik } from "formik";
import CustomInput from "../../components/customInput/CustomInput.tsx";
import CustomBtn from "../../components/customBtn/CustomBtn.tsx";
import { Link, useNavigate } from "react-router-dom";

import styles from "./signIn.module.css";
import { useAppDispatch } from "../../store/store.ts";
import { authThunks } from "../../store/authSlice.ts";

function SignIn() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      dispatch(authThunks.signIn({ userData: values, navigate }));
    },
  });

  return (
    <div className={styles.signinWrapper}>
      <h2>Enter your details</h2>
      <form className={styles.signinForm} onSubmit={formik.handleSubmit}>
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
        <CustomBtn type="submit" title="signin" mode="main" />
      </form>
      <Link to="/signup">I do not have an account</Link>
    </div>
  );
}

export default SignIn;
