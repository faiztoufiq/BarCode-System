
import * as Yup from "yup";
import { commonText } from "./constant";

export const validationSchema = Yup.object({
    email: Yup.string()
      .email(commonText.invalidEmailAddress)
      .required(commonText.emailIsRequired),
    password: Yup.string()
      .min(6, commonText.passwordMustBeAtleastCharacters)
      .required(commonText.passwordIsRequired),
 
  });

  export const signUpValidation=  Yup.object({
    email: Yup.string()
    .email(commonText.invalidEmailAddress)
    .required(commonText.emailIsRequired),
  password: Yup.string()
    .min(6, commonText.passwordMustBeAtleastCharacters)
    .required(commonText.passwordIsRequired),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref(commonText.password)], commonText.passwordsMustMatch)
    .required(commonText.confirmPasswordIsRequired),
  })