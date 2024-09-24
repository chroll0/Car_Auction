import {
  loginSchema,
  registrationSchema,
} from "@/app/auth/components/validation-schema";
import { Dispatch, SetStateAction } from "react";
import * as yup from "yup";

export type ContextType = {
  userProfile: UserProfile;
  setUserProfile: Dispatch<SetStateAction<UserProfile>>;
};
export type UserProfile = yup.InferType<typeof registrationSchema>;

export type LoginProfile = yup.InferType<typeof loginSchema>;

export type handleChangeProps = (
  field:
    | "firstName"
    | "lastName"
    | "email"
    | "newPassword"
    | "confirmPassword"
    | "number",
  value: string
) => void;

export type handleLoginProps = (
  field: "emailOrPhone" | "password",
  value: string
) => void;
