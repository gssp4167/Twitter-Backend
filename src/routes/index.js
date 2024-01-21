import express from 'express';
const router = express.Router();
import {createTweet, getTweet} from "../controllers/tweet-controller.js";
import { signIn, signUp } from '../controllers/user-controller.js';
import { toggleLike } from '../controllers/like-controller.js'; 
import { authenticate } from '../middlewares/authenticate.js';

router.post('/tweet',createTweet);

router.get('/tweet/:id',getTweet);

router.post('/signUp',signUp);

router.post('/signIn',signIn);

router.post('/likes/toggle',authenticate,toggleLike);

export default router;