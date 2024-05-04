import { DataTypes } from "sequelize";
import sequelize from "../DBConnect.js";
import Banner from "./banners/banner.js";
import BannerMedia from "./banners/bannerMedia.js";
import * as arkreamModels from "./feeds/regionARKream//arKreamCities.js";
import * as cherkasyModels from "./feeds/regionCherkasy/cherkasyCities.js";
import * as chernihivModels from "./feeds/regionChernihiv/chernihivCities.js";
import * as chernivtsiModels from "./feeds/regionChernivtsi/chernivtsiCities.js";
import * as dniproModels from "./feeds/regionDnipro/dniproCities.js";
import * as donetskModels from "./feeds/regionDonetsk/donetskCities.js";
import * as harkivModels from "./feeds/regionHarkiv/harkivCities.js";
import * as hmelnytskiyModels from "./feeds/regionHmelnytskiy/hmelnytskiyCities.js";
import * as ivanoFrankivskModels from "./feeds/regionIvanoFrankivsk/ivanoFrankivskCities.js";
import * as khersonModels from "./feeds/regionKherson/khersonCities.js";
import * as kirovogradModels from "./feeds/regionKirovograd/kirovogradCities.js";
import * as kyivModels from "./feeds/regionKyiv/kyivCities.js";
import * as luhanskModels from "./feeds/regionLuhansk/luhanskCities.js";
import * as lvivModels from "./feeds/regionLviv/lvivCities.js";
import * as mykolayivModels from "./feeds/regionMykolayiv/mykolaivCities.js";
import * as odesaModels from "./feeds/regionOdesa/odesaCities.js";
import * as poltavaModels from "./feeds/regionPoltava/poltavaCities.js";
import * as rivneModels from "./feeds/regionRivne/rivneCities.js";
import * as sumyModels from "./feeds/regionSumy/sumyCities.js";
import * as ternopilModels from "./feeds/regionTernopil/ternopilCities.js";
import * as vinnytsaModels from "./feeds/regionVinnytsa/vinnytsaCities.js";
import * as volynskModels from "./feeds/regionVolynsk/volynskCities.js";
import * as zakarpatskModels from "./feeds/regionZakarpatsk/zakarpatskCities.js";
import * as zaporizhzhiaModels from "./feeds/regionZaporizhzhia/zaporizhzhiaCities.js";
import * as zhytomyrModels from "./feeds/regionZhytomyr/zhytomyrCities.js";
import Media from "./media.js";
import NationalNews from "./nationalNews.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    login: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    middleName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    job: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telegramLink: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    facebookLink: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    instagramLink: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    twitterLink: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    descUser: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    avatarUrl: {
      type: DataTypes.STRING,
    },
    accessRights: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "user",
    timestamps: true,
    underscored: true,
  }
);

User.hasMany(Media);
Media.belongsTo(User);
User.hasMany(BannerMedia);
BannerMedia.belongsTo(User);

User.hasMany(NationalNews);
NationalNews.belongsTo(User);

// ARKream
for (const [modelName, Model] of Object.entries(arkreamModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}
// Cherkasy
for (const [modelName, Model] of Object.entries(cherkasyModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}
// Chernihiv
for (const [modelName, Model] of Object.entries(chernihivModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}
// Chernivtsi
for (const [modelName, Model] of Object.entries(chernivtsiModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}
// Dnipro
for (const [modelName, Model] of Object.entries(dniproModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}
// Donetsk
for (const [modelName, Model] of Object.entries(donetskModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}
// Harkiv
for (const [modelName, Model] of Object.entries(harkivModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}
// Hmelnytskiy
for (const [modelName, Model] of Object.entries(hmelnytskiyModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}
// IvanoFrankivsk
for (const [modelName, Model] of Object.entries(ivanoFrankivskModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}
// Kherson
for (const [modelName, Model] of Object.entries(khersonModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}
// Kirovograd
for (const [modelName, Model] of Object.entries(kirovogradModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}
// Kyiv
for (const [modelName, Model] of Object.entries(kyivModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}
// Luhansk
for (const [modelName, Model] of Object.entries(luhanskModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}
// Lviv
for (const [modelName, Model] of Object.entries(lvivModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}
// Mykolayiv
for (const [modelName, Model] of Object.entries(mykolayivModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}
// Odesa
for (const [modelName, Model] of Object.entries(odesaModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}
// Poltava
for (const [modelName, Model] of Object.entries(poltavaModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}
// Rivne
for (const [modelName, Model] of Object.entries(rivneModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}
// Sumy
for (const [modelName, Model] of Object.entries(sumyModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}
// Ternopil
for (const [modelName, Model] of Object.entries(ternopilModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}
// Vinnytsa
for (const [modelName, Model] of Object.entries(vinnytsaModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}
// Volynsk
for (const [modelName, Model] of Object.entries(volynskModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}
// Zakarpatsk
for (const [modelName, Model] of Object.entries(zakarpatskModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}
// Zaporizhzhia
for (const [modelName, Model] of Object.entries(zaporizhzhiaModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}
// Zhytomyr
for (const [modelName, Model] of Object.entries(zhytomyrModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}

User.hasMany(Banner);
Banner.belongsTo(User);

export default User;
