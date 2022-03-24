import { object, string, ref} from 'yup';

export const createUserSessionSchema= object({
    body:object({
        password:string().required("Password is required").min(6,
            "Password is too short - should be 6 chars minimum").matches(/^[a-zA-Z0-9_.-]*$/,"password can only contain indian characters"), 
            email:string().email("Must be valid email").required("Email is required"),
    }),
});