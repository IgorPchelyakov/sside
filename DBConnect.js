import { Sequelize } from "sequelize"
import dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT,
        dialectOptions: {
            dateStrings: true,
            typeCast: function (field, next) {
                if (field.type === 'DATETIME') {
                    return field.string();
                }
                return next();
            },
        },
        timezone: '+03:00',
    },
)

export default sequelize