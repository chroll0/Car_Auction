import { Dispatch, SetStateAction } from "react";
import { number } from "yup";
export type ContextType = {
  userProfile: UserProfile;
  setUserProfile: Dispatch<SetStateAction<UserProfile>>;
};
export type UserProfile = {
  role: "buyer" | "seller";
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  number?: string;
  terms: boolean;
};

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
