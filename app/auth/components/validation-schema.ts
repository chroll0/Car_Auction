// validation-schema.ts
import * as yup from "yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const registrationSchema = yup.object().shape({
  firstName: yup.string().required("Required").min(2, "At least 2 characters"),
  lastName: yup.string().required("Required").min(2, "At least 2 characters"),
  email: yup.string().email("Invalid email format").required("Required"),
  newPassword: yup
    .string()
    .required("Required")
    .min(8, "At least 8 characters")
    .matches(/[A-Z]/, "At least one uppercase letter")
    .matches(/\d/, "At least one number")
    .matches(/[@$!%*?&#^_]/, "At least one special character"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Required"),
  terms: yup.boolean().oneOf([true]).required(),
  number: yup
    .string()
    .required("Required")
    .test("isValidPhone", "Phone number is not valid", function (value) {
      if (!value) return false;
      // Ensure the phone number starts with a '+' for proper validation
      const formattedValue = value.startsWith("+") ? value : `+${value}`;
      // Parse the phone number and validate it based on the country code
      const phoneNumber = parsePhoneNumberFromString(formattedValue);
      return phoneNumber?.isValid() || false;
    }),
});

export const loginSchema = yup.object().shape({
  emailOrPhone: yup.string().required("Required"),
  password: yup.string().required("Required"),
  remember: yup.boolean(),
});
