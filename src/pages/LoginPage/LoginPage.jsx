import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { authLogin } from "../../redux/auth/operations";
import { MIN_CHAR_PASSWORD_VALIDATION } from "../../utils/constants";
import css from "./LoginPage.module.css";
// import toast from "react-hot-toast";
// import { Toaster } from "react-hot-toast";
const loginUserSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email address is required!")
    .email("You must enter valid email address!"),
  password: Yup.string()
    .required("Password is required!")
    .min(
      MIN_CHAR_PASSWORD_VALIDATION,
      `Minimum ${MIN_CHAR_PASSWORD_VALIDATION} characters!`
    ),
});

const FORM_INITIAL_VALUES = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    // try {
    dispatch(authLogin(values));
    // } catch (error) {
    //   toast.error("This didn't work. You may need to register.");
    // }
    actions.resetForm();
  };

  return (
    <div>
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={loginUserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <h2>Log in 😉</h2>
          <label>
            <span className={css.span}>Email</span>
            <br />
            <Field
              type="email"
              name="email"
              placeholder="email@email.com"
              className={css.input}
            ></Field>
            <ErrorMessage component="p" name="email" className={css.error} />
          </label>
          <br />
          <label>
            <span className={css.span}>Password</span>
            <br />
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
              className={css.input}
            ></Field>
            <ErrorMessage component="p" name="password" className={css.error} />
          </label>
          <br />
          <button type="submit" className={css.btn}>
            Log in
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginPage;
