import { object, string } from "yup";

export const LoginValidator = object().shape({
  username: string()
    .trim()
    .required("Username is required.")
    .max(100, "Username must be at most 100 characters."),
  password: string()
    .required("Password is required.")
    .min(8, "Password must be at least 8 characters.")
    .max(30, "Password must be at most 30 characters.")
    .matches(
      /^(?=.*[a-z])/,
      "Password must contain at least one lowercase letter."
    )
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter."
    )
    .matches(/^(?=.*\d)/, "Password must contain at least one number.")
    .matches(
      /^(?=.*[@$!%*?&])/,
      "Password must contain at least one special character."
    ),
});