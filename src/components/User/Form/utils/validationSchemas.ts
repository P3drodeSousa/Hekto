import * as Yup from "yup";

export const signUpValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, "Must be at least 6.")
    .max(30, "Max value 50")
    .required("- All fields must be filled."),
  email: Yup.string()
    .email("- Invalid email.")
    .required("- All fields must be filled."),
  password: Yup.string()
    .min(6, "Must be at least 6.")
    .max(30, "Max value 50")
    .required("- All fields must be filled."),
});

export const signInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("- Invalid email.")
    .required("- All fields must be filled."),
  password: Yup.string()
    .min(6, "Must be at least 6.")
    .max(30, "Max value 50")
    .required("- All fields must be filled."),
});

export const lostPasswordValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("- Invalid email.")
    .required("- All fields must be filled."),
});
