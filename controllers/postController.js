import moment from "moment"
import Post from "../models/post.js"
import fs from 'fs'

const PostController = {
    getAllPosts: async (req, res) => {
        try {
            const posts = await Post.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getPostById: async (req, res) => {
        const id = req.params.id
        try {
            const post = await Post.findOne({where: {id: id}})
            if (post) {
                post.views += 1;
                await post.save();
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    addPost: async (req, res) => {
        const {
            publishedAt,
            feed,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const post = await Post.create({
                publishedAt,
                feed,
                postType,
                block,
                section,
                title,
                desc,
                showDesc,
                mainImage,
                imageSize,
                content,
                live,
                showAuthorDesc,
                showAuthor,
                publishOnSocialMedia,
                UserId
            })
            res.status(200).json({
                post,
                message: 'Post creation successful'
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updatePost: async (req, res) => {
        const {
            id,
            publishedAt,
            feed,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const post = await Post.update({
                publishedAt,
                feed,
                postType,
                block,
                section,
                title,
                desc,
                showDesc,
                mainImage,
                imageSize,
                content,
                live,
                showAuthorDesc,
                showAuthor,
                publishOnSocialMedia,
                UserId
            }, {
                where: {id}
            })
            if (post[0]) {
                res.status(200).json({ message: 'Post updated' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deletePost: async (req, res) => {
        const id = req.params.id
        try {
            const post = await Post.destroy({ where: {id}})
            if (post) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
}

export default PostController