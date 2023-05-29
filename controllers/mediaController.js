import Media from "../models/media.js"
import moment from 'moment'
import fs from 'fs'
import transliteration from 'transliteration'
import path from 'path'

const MediaController = {
    getAllMedias: async (req, res) => {
        try {
            const media = await Media.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(media)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getMediaById: async (req, res) => {
        const id = req.params.id
        try {
            const media = await Media.findOne({where: {id: id}})
            if (media) {
                res.status(200).json(media)
            } else {
                res.status(404).json({ message: 'Image not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    addMedia: async (req, res) => {
        const {
            desc,
            author,
            title,
            UserId,
        } = req.body
        const img = req.files.image
        try {
            const transImg = transliteration.transliterate(title);
            const fileExtension = img.name.split('.').pop();
            let fileName = `${transImg}.${fileExtension}`;

            const year = moment().format('YYYY');
            const month = moment().format('MM');
            const dirPath = `./uploads/gallery/${year}/${month}`;
            const files = fs.readdirSync(dirPath);

            let similarFiles = files.filter(file => {
                const parsedFile = path.parse(file);
                return parsedFile.name.startsWith(transImg) && parsedFile.ext === `.${fileExtension}`;
            });

            if (similarFiles.length > 0) {
                const suffix = similarFiles.length + 1;
                fileName = `${transImg}_${suffix}.${fileExtension}`;
            }

            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
            }

            const filePath = path.join(dirPath, fileName);
            img.mv(filePath);

            const baseUrl = `http://localhost:4444/api`;
            const imgUrl = `${baseUrl}/uploads/gallery/${year}/${month}/${fileName}`;

            const media = await Media.create({
                imgUrl,
                desc,
                author,
                title,
                UserId
            })
            res.status(200).json({
                media,
                message: 'Image creation successful'
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateMedia: async (req, res) => {
        const id = req.params.id
        const {
            desc,
            author,
            title,
            UserId
        } = req.body
        const img = req.files && req.files.image;
        try {
            const mediaFn = await Media.findByPk(id);
            if (!mediaFn) {
                return res.status(404).json({ message: 'Media not found' });
            }

            mediaFn.desc = desc;
            mediaFn.author = author;
            mediaFn.title = title;
            mediaFn.UserId = UserId;

            if (img) {
                const transImg = transliteration.transliterate(title);
                const fileExtension = img.name.split('.').pop();
                let fileName = `${transImg}.${fileExtension}`;
          
                const year = moment().format('YYYY');
                const month = moment().format('MM');
                const dirPath = `./uploads/gallery/${year}/${month}`;
                const files = fs.readdirSync(dirPath);
          
                let similarFiles = files.filter((file) => {
                    const parsedFile = path.parse(file);
                    return (
                        parsedFile.name.startsWith(transImg) &&
                        parsedFile.ext === `.${fileExtension}`
                    );
                });
          
                if (similarFiles.length > 0) {
                    const suffix = similarFiles.length + 1;
                    fileName = `${transImg}_${suffix}.${fileExtension}`;
                }
          
                if (!fs.existsSync(dirPath)) {
                    fs.mkdirSync(dirPath, { recursive: true });
                }
          
                const filePath = path.join(dirPath, fileName);
                img.mv(filePath);
          
                const baseUrl = `http://localhost:4444/api`;
                const imgUrl = `${baseUrl}/uploads/gallery/${year}/${month}/${fileName}`;
                mediaFn.imgUrl = imgUrl;
            }
            
            await mediaFn.save()

            res.status(200).json({
                mediaFn,
                message: 'Media updated successfully',
            });
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deleteMedia: async (req, res) => {
        const id = req.params.id
        try {
            const media = await Media.destroy({ where: {id}})
            if (media) {
                res.status(200).json({ message: 'Image deleted' })
            } else {
                res.status(404).json({ message: 'Image not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
}

export default MediaController