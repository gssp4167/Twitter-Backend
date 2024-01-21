import UserService from "../services/user-service.js";
const userService=new UserService();


export const signUp = async (req,res)=>{
    try {
        const data=req.body;
        // console.log(data);
        const response=await userService.signUp(data);

        return res.status(201).json({
            success:true,
            message:"Successfully created a user",
            data:response,
            err:{}
        });
    } catch (error) {
        // console.log(error);
        return res.status(500).json({
            success:false,
            message:"Error encountered in creating a user",
            data:{},
            err:error
        });
    }
}

export const signIn = async (req,res)=>{
    try {
        const data=req.body;
        // console.log(data);
        const response=await userService.signIn(data);

        return res.status(201).json({
            success:true,
            message:"Successfully Signed in a user",
            data:response,
            err:{}
        });
    } catch (error) {
        // console.log(error);
        return res.status(500).json({
            success:false,
            message:"Error encountered in signing in",
            data:{},
            err:error
        });
    }
}

