import express from 'express'

const router = express.Router()

router.get('/users', (req, res) => {})
router.get('/users/:id', (req, res) => {})
router.post('/users', (req, res) => {})
router.put('/users/:id', (req, res) => {})
router.delete('/users', (req, res) => {})

export default router