import { registrationSchema } from "@/app/auth/components/validation-schema";
import { Dispatch, SetStateAction } from "react";
import * as yup from "yup";

export type ContextType = {
  userProfile: UserProfile;
  setUserProfile: Dispatch<SetStateAction<UserProfile>>;
};
export type UserProfile = yup.InferType<typeof registrationSchema>;

export type handleChangeProps = (
  field:
    | "username"
    | "role"
    | "email"
    | "password"
    | "confirmPassword"
    | "number",
  value: string
) => void;
