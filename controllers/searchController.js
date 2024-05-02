import { Op, Sequelize } from 'sequelize'
import NationalNews from '../models/nationalNews.js'
import Kyiv from '../models/feeds/regionKyiv/kyiv.js'
import Berezan from '../models/feeds/regionKyiv/berezan.js'
import Bilacerkva from '../models/feeds/regionKyiv/bilacerkva.js'
import Boryspil from '../models/feeds/regionKyiv/boryspil.js'
import Boyarka from '../models/feeds/regionKyiv/boyarka.js'
import Brovary from '../models/feeds/regionKyiv/brovary.js'
import Bucha from '../models/feeds/regionKyiv/bucha.js'
import Fastiv from '../models/feeds/regionKyiv/fastiv.js'
import Irpin from '../models/feeds/regionKyiv/irpin.js'
import Obukhiv from '../models/feeds/regionKyiv/obukhiv.js'
import Pereyaslav from '../models/feeds/regionKyiv/pereyaslav.js'
import Skvyra from '../models/feeds/regionKyiv/skvyra.js'
import Slavutych from '../models/feeds/regionKyiv/slavutych.js'
import Vasylkiv from '../models/feeds/regionKyiv/vasylkiv.js'
import Vyshhorod from '../models/feeds/regionKyiv/vyshhorod.js'
import Vyshneve from '../models/feeds/regionKyiv/vyshneve.js'
import Yagotyn from '../models/feeds/regionKyiv/yagotyn.js'
import BilgorodDnistrovsky from '../models/feeds/regionOdesa/bilgorod-dnistrovsky.js'
import Chornomorsk from '../models/feeds/regionOdesa/chornomorsk.js'
import Izmail from '../models/feeds/regionOdesa/izmail.js'
import Kiliya from '../models/feeds/regionOdesa/kiliya.js'
import Odesa from '../models/feeds/regionOdesa/odesa.js'
import Podilsk from '../models/feeds/regionOdesa/podilsk.js'
import Youzhne from '../models/feeds/regionOdesa/youzhne.js'
import Dnipro from '../models/feeds/regionDnipro/dnipro.js'
import Kamianske from '../models/feeds/regionDnipro/kamianske.js'
import KryvyiRih from '../models/feeds/regionDnipro/kryvyi-rih.js'
import Marganets from '../models/feeds/regionDnipro/marganets.js'
import Nikopol from '../models/feeds/regionDnipro/nikopol.js'
import Novomoskovsk from '../models/feeds/regionDnipro/novomoskovsk.js'
import Pavlograd from '../models/feeds/regionDnipro/pavlograd.js'
import Pershotravensk from '../models/feeds/regionDnipro/pershotravensk.js'
import Pokrov from '../models/feeds/regionDnipro/pokrov.js'
import Pyatihatky from '../models/feeds/regionDnipro/pyatihatky.js'
import Ternivka from '../models/feeds/regionDnipro/ternivka.js'
import Vilnohorsk from '../models/feeds/regionDnipro/vilnohorsk.js'
import ZhovtiVody from '../models/feeds/regionDnipro/zhovti-vody.js'
import Sinelnikovo from '../models/feeds/regionDnipro/sinelnikovo.js'
import Teplodar from '../models/feeds/regionOdesa/teplodar.js'

const SearchController = {
    searchNationalNews: async (req, res) => {
        const { query } = req.query
        
        try {
            const posts = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                attributes: ['id', 'publishedAt', 'feed', 'url', 'postType', 'block', 'section', 'title', 'desc', 'mainImage', 'mainImgDesc', 'mainImgAuthor', 'UserId'],
                order: [['publishedAt', 'DESC']],
            })

            res.status(200).json(posts)
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Kyiv Region
    // Berezan
    searchBerezanNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Berezan.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Bilacerkva
    searchBilacerkvaNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Bilacerkva.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Boryspil
    searchBoryspilNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Boryspil.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Boyarka
    searchBoyarkaNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Boyarka.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Brovary
    searchBrovaryNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Brovary.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Bucha
    searchBuchaNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Bucha.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Fastiv
    searchFastivNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Fastiv.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Irpin
    searchIrpinNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Irpin.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Kyiv
    searchKyivNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Kyiv.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Obukhiv
    searchObukhivNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Obukhiv.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Pereyaslav
    searchPereyaslavNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Pereyaslav.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Skvyra
    searchSkvyraNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Skvyra.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Slavutych
    searchSlavutychNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Slavutych.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Vasylkiv
    searchVasylkivNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Vasylkiv.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Vyshhorod
    searchVyshhorodNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Vyshhorod.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Vyshneve
    searchVyshneveNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Vyshneve.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Yagotyn
    searchYagotynNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Yagotyn.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Odesa Region
    // BilgorodDnistrovky
    searchBilgorodDnistrovkyNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await BilgorodDnistrovsky.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Chornomorsk
    searchChornomorskNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Chornomorsk.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Izmail
    searchIzmailNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Izmail.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Kiliya
    searchKiliyaNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Kiliya.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Odesa
    searchOdesaNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Odesa.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Podilsk
    searchPodilskNews: async (req, res) => {
        const { query } = req.query

        try {
            const posts = await Podilsk.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                attributes: ['id', 'publishedAt', 'feed', 'url', 'postType', 'block', 'section', 'title', 'desc', 'mainImage', 'mainImgDesc', 'mainImgAuthor', 'UserId'],
                order: [['publishedAt', 'DESC']],
            })

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    searchTeplodarNews: async (req, res) => {
        const { query } = req.query

        try {
            const posts = await Teplodar.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                attributes: ['id', 'publishedAt', 'feed', 'url', 'postType', 'block', 'section', 'title', 'desc', 'mainImage', 'mainImgDesc', 'mainImgAuthor', 'UserId'],
                order: [['publishedAt', 'DESC']],
            })

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Youzhne
    searchYouzhneNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Youzhne.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Dnipro Region
    // Dnipro
    searchDniproNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Dnipro.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Kamianske
    searchKamianskeNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Kamianske.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // KryvyiRih
    searchKryvyiRihNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await KryvyiRih.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Marganets
    searchMarganetsNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Marganets.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Nikopol
    searchNikopolNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Nikopol.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Novomoskovsk
    searchNovomoskovskNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Novomoskovsk.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Pavlograd
    searchPavlogradNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Pavlograd.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Pershotravensk
    searchPershotravenskNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Pershotravensk.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Pokrov
    searchPokrovNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Pokrov.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Pyatihatky
    searchPyatihatkyNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Pyatihatky.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Sinelnikovo
    searchSinelnikovoNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Sinelnikovo.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Ternivka
    searchTernivkaNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Ternivka.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // Vilnohorsk
    searchVilnohorskNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await Vilnohorsk.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
    // ZhovtiVody
    searchZhovtiVodyNews: async (req, res) => {
        const { query } = req.query

        try {
            const nationalNews = await NationalNews.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const news = await ZhovtiVody.findAll({
                where: {
                    [Op.or]: [
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('title')), 'LIKE', `%${query.toLowerCase()}%`),
                        Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('desc')), 'LIKE', `%${query.toLowerCase()}%`),
                    ],
                },
                order: [['publishedAt', 'DESC']],
            })

            const posts = nationalNews.concat(news)
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({
                message: 'Помилка серверу'
            })
        }
    },
}

export default SearchController