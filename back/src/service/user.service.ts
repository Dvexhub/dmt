import {DocumentDefinition} from 'mongoose';
import User,{UserDocument} from '../model/user.model';
import {omit} from 'lodash'

export async function createUser(input: DocumentDefinition<UserDocument>){
    try {
        return await User.create(input);
    } catch (error) {
        throw new Error("User already exists");
    }
}


export async function validatePassword({
    email,password
}:{
    email:UserDocument["email"];
    password:string;
}){
   try {
    const user = await User.findOne({email});

    if(!user){
        return false
    }
    
    const isValid = await user.comparePassword(password);
    if(!isValid){
        return false;
    }
    return omit(user, "password");
   } catch (error) {
       console.log("This is validate password error --"+error);
   }
}