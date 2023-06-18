import { Op } from "sequelize";
import NationalNews from "../models/nationalNews.js";
import dayjs from "dayjs";


const CountersController = {
    countAllNews: async (req, res) => {
        const {params} = req.params
        const parsedYear = dayjs(params).format('YYYY')
        const parsedMonth = dayjs(params).format('MM')
        console.log(parsedMonth);
        try {
            const startOfMonth = new Date(parsedYear, parsedMonth - 1, 1);
            const endOfMonth = new Date(parsedYear, parsedMonth, 0);
            const count = await NationalNews.count({
                where: {
                  publishedAt: {
                    [Op.between]: [startOfMonth, endOfMonth],
                  },
                },
              });
            const totalViews = await NationalNews.sum('views', {
                where: {
                  publishedAt: {
                    [Op.between]: [startOfMonth, endOfMonth],
                  },
                },
              });
            res.status(200).json({count, totalViews})
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server error' });
        }
    }
}

export default CountersController