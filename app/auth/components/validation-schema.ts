// validation-schema.ts
import * as yup from "yup";

export const registrationSchema = yup.object().shape({
  role: yup
    .mixed<"buyer" | "seller">()
    .oneOf(["buyer", "seller"], "Role is not chosen")
    .required("Required"),
  username: yup.string().min(2, "At least 2 characters").required("Required"),
  email: yup.string().email("Invalid email format").required("Required"),
  password: yup.string().min(6, "At least 6 characters").required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Required"),
  terms: yup.boolean().oneOf([true]).required(),
  number: yup
    .string()
    .matches(
      /^\+995 \d{3} \d{2} \d{2} \d{2}$/,
      'Must be in the format "+995 XXX XX XX XX"'
    ),
});
