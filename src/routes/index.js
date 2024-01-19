import express from 'express';

const router = express.Router();
import {createTweet} from "../controllers/tweet-controller.js";

router.post('/tweet',createTweet);

export default router;