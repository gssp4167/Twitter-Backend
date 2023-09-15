import express from "express";
import { connect } from "./config/database.js";
import router from "./routes/index.js";
import bodyParser from "body-parser";
import passport from "passport";
import { passportAuth } from "./middlewares/jwt-middleware.js";
import Tweet from "./models/tweet.js";
import User from "./models/user.js";
import Like from "./models/like.js";
import mongoose from "mongoose";

// Import the UserService class
import UserService from "./services/user-service.js";
import LikeService from "./services/like-service.js";


const app = express();

//middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(passport.initialize());
passportAuth(passport);
app.use("/api", router);

app.listen(3000, async () => {
    console.log("server Started at 3000");
    // mongo db connection establishment
    connect();

    console.log("Mongo DB connected");

    // Tweet.create({
    //     content: "This is test tweet2",
    //     likes: 25,
    //     noOfRetweets: 5,
    //     comment: "Test comment",
    // });


    // Tweet.create({
    //     content: "New tweet just appeared again",
    //     likes: [2],
    //     noOfRetweets: 1,
    //     comment: "Empty comments",
    // });

    // Tweet.create({
    //     content: "New tweet just appeared again for the 101th time",
    //     likes:[3],
    //     noOfRetweets: 1,
    //     comment: "Empty comments again",
    // })
   
    // Tweet.create({
    //     content: "New tweet just appeared again for the 3000th time",
    //     likes:[1],
    //     noOfRetweets: 1,
    //     comment: "Empty comments again",
    // })

    // Create an instance of UserService
    const userService = new UserService();

    // Call the signUp method on the userService instance
    // userService.signUp({
    //     email: "gssp4167@gmail.com",
    //     password: "Penubothu@4167",
    //     bio: "I am a Backend Developer",
    //     name: "Gautham",
    // });
    
    // userService.signIn({
    //     email: "gssp4167@gmail.com",
    //     password: "Penubothu@4167"
    // })

    // const likeService = new LikeService();
    // likeService.toggleLike('650331f782bd7039bbc18668', 'Tweet', '65032af2d6182613afdcae61');


});
