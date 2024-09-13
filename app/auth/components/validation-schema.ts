// validation-schema.ts
import * as yup from "yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";

export const registrationSchema = yup.object().shape({
  role: yup.string().required("Role is not chosen"),
  username: yup.string().required("Required").min(2, "At least 2 characters"),
  email: yup.string().email("Invalid email format").required("Required"),
  password: yup.string().required("Required").min(6, "At least 6 characters"),
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
