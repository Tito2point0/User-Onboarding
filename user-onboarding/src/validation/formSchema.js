import * as yup from "yup";

const formSchema = yup.object().shape({
    UserName: yup
        .string()
        .trim()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters"),
    email: yup
        .string()
        .email("Must be a valid email address")
        .required("Must include email address"),
    password: yup
        .string()
        .required("Password is required")
        .min(6, "Password must be at least 6 characters long"),
    tos: yup    
        .boolean()
        .oneOf([true], "You must accept Terms of Service")
});

export default formSchema;