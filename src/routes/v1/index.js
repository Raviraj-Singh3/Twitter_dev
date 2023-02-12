import express from 'express';
import { create } from '../../controller/tweet-controller.js';
import { toggleLike } from '../../controller/like-controller.js';
const router = express.Router();

router.post('/tweets', create)
router.post('/likes/toggle', toggleLike);
export default router;