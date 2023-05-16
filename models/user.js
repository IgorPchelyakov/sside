import { DataTypes } from "sequelize"
import sequelize from '../DBConnect.js'

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    login: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    middleName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nickName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    job: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    tel: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telegramLink: {
        type: DataTypes.STRING,
        allowNull: true
    },
    facebookLink: {
        type: DataTypes.STRING,
        allowNull: true
    },
    instagramLink: {
        type: DataTypes.STRING,
        allowNull: true
    },
    twitterLink: {
        type: DataTypes.STRING,
        allowNull: true
    },
    descUser: {
        type: DataTypes.STRING,
        allowNull: true
    },
    avatarUrl: {
        type: DataTypes.STRING,
        defaultValue: 'https://thumbs.dreamstime.com/b/аватар-мода-босс-значок-мужской-одежды-креативный-дизайн-элементов-из-168197081.jpg'
    },
    accessRights: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'user',
    timestamps: true,
    underscored: true
})

export default User