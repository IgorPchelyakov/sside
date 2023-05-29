import Banner from "../models/banner.js"
import moment from 'moment'
import fs from 'fs'
import transliteration from 'transliteration'
import path from 'path'

const BannerController = {
    getAllBanners: async (req, res) => {
        try {
            const banners = await Banner.findAll()
            res.status(200).json(banners)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getBannerById: async (req, res) => {
        const id = req.params.id
        try {
            const banner = await Banner.findOne({where: {id: id}})
            if (banner) {
                res.status(200).json(banner)
            } else {
                res.status(404).json({ message: 'Banner not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    addBanner: async (req, res) => {
        const {
            title,
            desc,
            block,
            publishAt,
            endAt,
            UserId,
            mobile,
            desktop,
            urlOpen,
            url
        } = req.body
        const img = req.files.image
        try {
            const transImg = transliteration.transliterate(title);
            const fileExtension = img.name.split('.').pop();
            let fileName = `${transImg}.${fileExtension}`;

            const year = moment().format('YYYY');
            const month = moment().format('MM');
            const dirPath = `./uploads/banners/${year}/${month}`;
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
            const imgPath = `${baseUrl}/uploads/banners/${year}/${month}/${fileName}`;

            const banner = await Banner.create({
                imgUrl: imgPath,
                title,
                desc,
                block,
                publishAt,
                endAt,
                UserId,
                mobile,
                desktop,
                urlOpen,
                url
            })
            res.status(200).json({
                banner,
                message: 'Banner creation successful'
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateBanner: async (req, res) => {
        const id = req.params.id
        const {
            desc,
            author,
            title,
        } = req.body
        const img = req.files.imgUrl
        try {
            if (!fs.existsSync(`./uploads/banners`)) {
                fs.mkdirSync(`./uploads/banners`)
            }
            img.mv(`./uploads/gallery/${img.name}`)
            const baseUrl = `http://localhost:4444/api`
            const mainImg = baseUrl + `/uploads/banners/${img.name}`

            const banner = await Banner.update({
                imgUrl: mainImg,
                desc,
                author,
                title,
            }, {
                where: {id}
            })
            if (banner[0]) {
                res.status(200).json({ banner, message: 'Banner updated' })
            } else {
                res.status(404).json({ message: 'Banner not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deleteBanner: async (req, res) => {
        const id = req.params.id
        try {
            const banner = await Banner.destroy({ where: {id}})
            if (banner) {
                res.status(200).json({ message: 'Banner deleted' })
            } else {
                res.status(404).json({ message: 'Banner not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
}

export default BannerController