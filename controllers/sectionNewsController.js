import NationalNews from "../models/nationalNews.js"

const SectionNewsController = {
    getUSANews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Сполучені Штати"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getEuropeNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Європа"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getChinaNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Китай"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getSvitoviNovynyNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Світові Новини"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getNorthAmericaNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Північна Америка"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getSouthAmericaNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Південна Америка"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getSouthAmericaNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Південна Америка"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getMiddleEastNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Близький схід"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getPacificRegionNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Тихоокеанський регіон"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAfricaNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Африка"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getNaukaNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Наука"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getTechnologiesNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Технології"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getEkolohiiaNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Екологія"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getEkonomikaNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Економіка"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getFinanceNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Фінанси"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getVijnaNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Війна Росії проти України"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getSuspilstvoNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Суспільство"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getVladaNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Влада"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getPolitykaNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Політика"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getBiznesNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Бізнес"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getSportNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Спорт"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getHistoryNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Історія"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getPryhodyNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Пригоди"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getMusickNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Музика"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getFashionNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Мода"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getKinoNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Кіно"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getInterviuNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Інтерв'ю"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getDumkyNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Думка"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAnalitykaNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Аналітика"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAutoNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Авто"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getIhryNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Ігри"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getEducationNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Освіта"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getKulinariiaNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Кулінарія"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getKulturaNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Культура"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getHealthNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Здоров'я"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getParentingNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Виховання дітей"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getRealEstateNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Нерухомість"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getTravelingNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Подорожі"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getPresRelizNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Прес-релізи"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getOfitsijnoNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Офіційно"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getNovynyBiznesuNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Новини бізнесу"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getPolitychniNovynyNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                where: {section: "Політичні новини"},
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
}

export default SectionNewsController