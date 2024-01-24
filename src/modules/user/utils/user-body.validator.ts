import * as yup from "yup";

export const userBodyValidator = yup.object({
   name: yup.string().required("Name is required."),
   email: yup
      .string()
      .required("Email is required.")
      .email("Invalid email format."),
   password: yup.string().required("Password is required."),
   photo: yup.string().required("Photo is required."),
});
