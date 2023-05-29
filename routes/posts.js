import PostController from '../controllers/postController.js'
import { checkAuth } from '../middleware/checkAuth.js'
import { Router } from 'express'

const router = Router()

router.get('/posts', PostController.getAllPosts)
router.get('/post/:id', PostController.getPostById)
router.post('/post/add', checkAuth, PostController.addPost)
router.put('/post/edit/:id', checkAuth, PostController.updatePost)
router.post('/post/delete/:id', checkAuth, PostController.deletePost)

export default router