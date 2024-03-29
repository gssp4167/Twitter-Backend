import TweetService from "../services/tweet-service.js";
const tweetService=new TweetService();


export const createTweet = async (req,res)=>{
    try {
        const data=req.body;
        // console.log(data);
        const response=await tweetService.create(data);

        return res.status(201).json({
            success:true,
            message:"Successfully created a tweet",
            data:response,
            err:{}
        });
    } catch (error) {
        // console.log(error);
        return res.status(500).json({
            success:false,
            message:"Error encountered in creating a tweet",
            data:{},
            err:error
        });
    }
}

export const getTweet = async (req,res)=>{
    try {
        const id=req.params.id;
        const response=await tweetService.getTweet(id);

        return res.status(201).json({
            success:true,
            message:"Successfully fetched a tweet",
            data:response,
            err:{}
        });
    } catch (error) {
        // console.log(error);
        return res.status(500).json({
            success:false,
            message:"Error encountered in fetching a tweet",
            data:{},
            err:error
        });
    }
}
