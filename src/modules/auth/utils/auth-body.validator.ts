import * as yup from "yup";

export async function authBodyValidator(body: any) {
   const bodyValidator = yup.object().shape({
      email: yup
         .string()
         .required("Email is required.")
         .email("Email is invalid."),
      password: yup.string().required("Password is required."),
   });

   try {
      await bodyValidator.validate(body, { abortEarly: false });
      return { isValid: true, message: "" };
   } catch (err: any) {
      console.error(err);
      throw new Error(err.errors);
   }
}
