import { object, string, ref} from 'yup';

export const createUserSchema= object({
    body:object({
        name:string().required("Name is required"), 
        password:string().required("Password is required").min(6,
            "Password is too short - should be 6 chars minimum").matches(/^[a-zA-Z0-9_.-]*$/,"password can only contain indian characters"), 
            passwordConfimation: string().oneOf([ref("password"), null],"Password must match"),
            email:string().email("Must be valid email").required("Email is required"),
    }),
});