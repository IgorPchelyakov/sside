import { Op } from "sequelize";
import NationalNews from "../models/nationalNews.js";
import dayjs from "dayjs";
import Banner from "../models/banners/banner.js";


const CountersController = {
    countAllNews: async (req, res) => {
        const {params} = req.params
        const parsedYear = dayjs(params).format('YYYY')
        const parsedMonth = dayjs(params).format('MM')

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
        
            const countEditorialMaterials = await NationalNews.count({
              where: {
                publishedAt: {
                  [Op.between]: [startOfMonth, endOfMonth],
                },
                section: {
                  [Op.notIn]: ['Новини бізнесу', 'Політичні новини', 'Прес-релізи', 'Офіційні повідомлення'],
                },
              },
            });

            const countAdvertisingMaterials = await NationalNews.count({
              where: {
                publishedAt: {
                  [Op.between]: [startOfMonth, endOfMonth],
                },
                section: {
                  [Op.in]: ['Новини бізнесу', 'Політичні новини', 'Прес-релізи', 'Офіційні повідомлення'],
                },
              },
            });

            const countBannerMaterials = await Banner.count({
              where: {
                startDate: {
                  [Op.lte]: endOfMonth,
                },
                endDate: {
                  [Op.gte]: startOfMonth,
                },
              },
            });

            const categoriesCounts = {};
            const categories = [
              'Новини бізнесу', 'Політичні новини', 'Прес-релізи', 'Офіційні повідомлення', 'Війна Росії проти України',
              'Європа', 'Світові новини', 'Сполучені Штати', 'Китай', 'Північна Америка', 'Південна Америка',
              'Близький схід', 'Тихоокеанський регіон', 'Африка', 'Наука', 'Технології', 'Екологія', 'Економіка',
              'Фінанси', 'Суспільство', 'Влада', 'Політика', 'Бізнес', 'Спорт', 'Історія', 'Пригоди', 'Музика',
              'Мода', 'Кіно', 'Інтерв’ю', 'Думка', 'Аналітика', 'Автомобілі', 'Ігри', 'Освіта', 'Кулінарія',
              'Культура', 'Здоров’я', 'Виховання дітей', 'Нерухомість', 'Подорожі'
            
            ];

            for (const category of categories) {
                const count = await NationalNews.count({
                    where: {
                        publishedAt: {
                            [Op.between]: [startOfMonth, endOfMonth],
                        },
                        section: category,
                    },
                });

                categoriesCounts[category] = count;
            }
        
            res.status(200).json({
              count,
              countEditorialMaterials,
              countAdvertisingMaterials,
              countBannerMaterials,
              categoriesCounts
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server error' });
        }
    },
}

export default CountersController