import * as yup from "yup";

export async function productBodyValidator(body: any) {
  const bodyValidator = yup.object().shape({
    name: yup.string().required("Name is required."),
    value: yup.number().required("Value is required."),
    quantity: yup.number().required("Quantity is required."),
    description: yup.string().required("Description is required."),
    photo: yup.string().required("Photo is required."),
  });

  try {
    await bodyValidator.validate(body, { abortEarly: false });
    return { isValid: true, message: "" };
  } catch (err: any) {
    console.error(err);
    throw new Error(err.errors);
  }
}
