import { DataTypes } from "sequelize";
import sequelize from "../../DBConnect.js";

const Country = sequelize.define('countries', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    countryCode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    capital: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    timeZone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    },
}, {
    sequelize,
    modelName: 'countries',
    tableName: 'countries',
    timestamps: true,
    underscored: true,
})

const Region = sequelize.define('regions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    countryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'countries',
            key: 'id',
            onDelete: 'CASCADE',
        },
    },
    administrativeStatus: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    regionCode: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }
}, {
    sequelize,
    modelName: 'regions',
    tableName: 'regions',
    timestamps: true,
    underscored: true,
});

const City = sequelize.define('cities', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cityCode: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
    },
    regionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'regions',
            key: 'id',
            onDelete: 'CASCADE',
        },
    },
    countryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'countries',
            key: 'id',
            onDelete: 'CASCADE',
        },
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    }
}, {
    sequelize,
    modelName: 'cities',
    tableName: 'cities',
    timestamps: true,
    underscored: true,
});

Country.hasMany(Region, { onDelete: 'CASCADE' });
Region.belongsTo(Country);

Region.hasMany(City, { onDelete: 'CASCADE' });
City.belongsTo(Region);

export { Country, Region, City };