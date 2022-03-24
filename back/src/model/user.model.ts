import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import config from 'config'


export interface UserDocument extends mongoose.Document {
    email:string;
    name:string;
    password:string;
    createdAt:string;
    updatedAt:string;
    comparePassword(candidatePassword:string):Promise<boolean>;
}

const userSchema = new mongoose.Schema(
    {
        email: {
            type: 'string',
            required: true,
            unique: true
        },
        name: {
            type: 'string',
            required: true
        },
        password: {
            type: 'string',
            required: true
        }
    },
    {
        timestamps:true
    }
);

userSchema.pre("save", async function(next: any) {
    let user = this as UserDocument;
    
    //only hash the password if it has been modified or it's new
    if(!user.isModified("password"))return next();

    //Random additional data
    const salt = await bcrypt.genSalt(config.get("saltWorkFactor"));
    const hash = await bcrypt.hashSync(user.password, salt);

    //replace the password with hash
    user.password = hash;
    return next();
})

userSchema.methods.comparePassword = async function (
    candidatePassword: string
){
    const user = this as UserDocument;

    return bcrypt.compare(candidatePassword,user.password).catch((e)=>{false});
}

const User = mongoose.model<UserDocument>('User', userSchema);

export default User;