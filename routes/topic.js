import { Router } from "express";
import TopicsController from "../controllers/topicsController.js";
import { checkAuth } from "../middleware/checkAuth.js";

const router = Router();

router.get("/themes", TopicsController.getTopicsName);
router.get("/topics", TopicsController.getAllTopics);
router.put("/topics/:id", checkAuth, TopicsController.editTopic);
router.get("/themes/:topicId/:id", TopicsController.getNewsByTopics);
router.get("/get-topics-pg", TopicsController.getThemesPg);
router.get("/theme/:topicId", TopicsController.getTopicById);

export default router;
