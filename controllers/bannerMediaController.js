import BannerMedia from "../models/banners/bannerMedia.js";
import transliteration from 'transliteration';
import fs from 'fs';
import path from 'path';
import moment from "moment";

const localhost = `http://localhost:4444/api`;

const bannerMediaController = {
    getAllBannerMedias: async (req, res) => {
        try {
            const media = await BannerMedia.findAll({
                order: [['createdAt', 'DESC']]
            })

            if (media.length === 0) {
                return res.status(404).json({ message: 'Медіаматеріали не знайдено' });
            }

            res.status(200).json(media)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Помилка серверу' })
        }
    },
    getBannerMediaById: async (req, res) => {
        try {
            const { id } = req.params
            const media = await BannerMedia.findOne({where: {id: id}})

            if (!media) {
                return res.status(404).json({ message: 'Медіаматеріал не знайдено' });
            }

            res.status(200).json(media);
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Помилка серверу' })
        }
    },
    addBannerMedia: async (req, res) => {
        try {
            const {
                title,
                desc,
                author,
                userId
            } = req.body

            const file = req.files.file
            console.log(file);
            const transImg = transliteration.transliterate(title);
            const fileExtension = file.name.split('.').pop();

            let fileName = `${transImg}.${fileExtension}`;
            
            const year = moment().format('YYYY');
            const month = moment().format('MM');
            const dirPath = `./uploads/banners-gallery/${year}/${month}`;

            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath, { recursive: true });
            }

            const fileSave = fs.readdirSync(dirPath);

            let similarFiles = fileSave.filter(file => {
                const parsedFile = path.parse(file);
                return parsedFile.name.startsWith(transImg) && parsedFile.ext === `.${fileExtension}`;
            })

            if (similarFiles.length > 0) {
                const suffix = similarFiles.length + 1;
                fileName = `${transImg}_${suffix}.${fileExtension}`
            }

            const filePath = path.join(dirPath, fileName);
            file.mv(filePath);

            const baseUrl = localhost;
            const imgUrl = `${baseUrl}/uploads/banners-gallery/${year}/${month}/${fileName}`;

            const media = await BannerMedia.create({
                url: imgUrl,
                desc,
                author,
                title,
                UserId: userId,
            })

            res.status(200).json({
                media
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateBannerMedia: async (req, res) => {
        try {
            const { id } = req.params;
            const { desc, author, title, userId } = req.body;

            const existingMedia = await BannerMedia.findByPk(id);

            if (!existingMedia) {
                return res.status(404).json({ message: 'Медіаматеріал не знайдено' });
            }

            existingMedia.desc = desc || existingMedia.desc;
            existingMedia.author = author || existingMedia.author;
            existingMedia.title = title || existingMedia.title;
            existingMedia.UserId = userId || media.UserId;

            await existingMedia.save();

            res.status(200).json(existingMedia);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Помилка серверу' });
        }
    },
    deleteBannerMedia: async (req, res) => {
        try {
            const { id } = req.params;

            const existingMedia = await BannerMedia.findByPk(id);

            if (!existingMedia) {
                return res.status(404).json({ message: 'Медіаматеріал не знайдено' });
            }

            const dirPath = `./uploads/banners-gallery/`;
            const routeParts = existingMedia.url.split('/uploads/banners-gallery/');
            const dynamicPath = routeParts[1];
            const filePath = path.join(dirPath, dynamicPath);
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
                res.status(200).json({ message: 'Медіаматеріал успішно видалено' });
            } else {
                res.status(404).json({ message: 'Файл не знайдено, але запис в базі даних успішно видалено' });
            }

            await existingMedia.destroy();

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Помилка серверу' });
        }
    },
}

export default bannerMediaController