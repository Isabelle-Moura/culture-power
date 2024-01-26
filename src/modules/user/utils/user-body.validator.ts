import * as yup from "yup";

export async function userBodyValidator(body: any) {
   const validator = yup.object({
     name: yup.string().required("Name is required."),
     email: yup
        .string()
        .required("Email is required.")
        .email("Invalid email format."),
     password: yup.string().required("Password is required."),
     photo: yup.string().required("Photo is required."),
  });

  try {

   await validator.validate(body)
   return { areInfosValid: true, message: ""}

  } catch(err: any) {
   return { areInfosValid: false, message: err.errors }
 }
}
