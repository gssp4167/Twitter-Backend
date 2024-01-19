import express from "express";
import mongoose from "mongoose";
import {connect} from './config/database.js';
import router from "./routes/index.js";
import TweetRepository from "./repository/tweet-repository.js";
import bodyParser from "body-parser";
const app=express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/",router);

app.listen(3000,async ()=>{
    console.log("Server started on port 3000");
    
    //MongoDB connection establishment
    connect();
    console.log('Mongo DB connected');

    //create a document
    // Tweet.create({
    //    content:"This is my Second tweet",
    //    likes:25,
    //    noOfRetweets: 5,
    //    comment:"This is my Second comment"
    // });

    // Hashtag.create({
    //     text:"travel",
    //     tweets:['65a962bb9f3777278b79ed35']
    // });

    // const tweetRepository=new TweetRepository();
    // let tweet=await tweetRepository.getTweet("65a962bb9f3777278b79ed35");
    // console.log(tweet);

    // const tweetRepository=new TweetRepository();
    // let tweet=await tweetRepository.deleteTweet({_id:"65a962bb9f3777278b79ed35"});
    // console.log(tweet);

});