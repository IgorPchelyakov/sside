import { Router } from "express";
import TopicsController from "../controllers/topicsController.js";

const router = Router();

router.get('/themes', TopicsController.getTopicsName);
router.get('/topics', TopicsController.getAllTopics)
router.get('/themes/:topicId/:id', TopicsController.getNewsByTopics);
router.get('/theme/:topicId', TopicsController.getTopicById);

export default router