import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { authRegister } from "../../redux/auth/operations";
import css from "./RegistrationPage.module.css";
import {
  MAX_CHAR_NAME_VALIDATION,
  MIN_CHAR_PASSWORD_VALIDATION,
} from "../../utils/constants";

const registerUserSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required!")
    .max(
      MAX_CHAR_NAME_VALIDATION,
      `Your user name must be less than ${MAX_CHAR_NAME_VALIDATION} characters!`
    ),
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
  name: "",
  email: "",
  password: "",
};

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(authRegister(values));
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={registerUserSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <h2>Registration👇</h2>
          <label>
            <span className={css.span}>Name</span>
            <br />
            <Field
              type="text"
              name="name"
              placeholder="Name"
              className={css.input}
            ></Field>
            <ErrorMessage component="p" name="name" className={css.error} />
          </label>
          <br />
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
            Sign up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationPage;
