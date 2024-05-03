import { DataTypes } from "sequelize";
import sequelize from "../DBConnect.js";
import Banner from "./banners/banner.js";
import BannerMedia from "./banners/bannerMedia.js";
import Dnipro from "./feeds/regionDnipro/dnipro.js";
import Kamianske from "./feeds/regionDnipro/kamianske.js";
import KryvyiRih from "./feeds/regionDnipro/kryvyi-rih.js";
import Marganets from "./feeds/regionDnipro/marganets.js";
import Nikopol from "./feeds/regionDnipro/nikopol.js";
import Novomoskovsk from "./feeds/regionDnipro/novomoskovsk.js";
import Pavlograd from "./feeds/regionDnipro/pavlograd.js";
import Pershotravensk from "./feeds/regionDnipro/pershotravensk.js";
import Pokrov from "./feeds/regionDnipro/pokrov.js";
import Pyatihatky from "./feeds/regionDnipro/pyatihatky.js";
import Sinelnikovo from "./feeds/regionDnipro/sinelnikovo.js";
import Ternivka from "./feeds/regionDnipro/ternivka.js";
import Vilnohorsk from "./feeds/regionDnipro/vilnohorsk.js";
import ZhovtiVody from "./feeds/regionDnipro/zhovti-vody.js";
import Media from "./media.js";
import NationalNews from "./nationalNews.js";

import * as kyivModels from "./feeds/regionKyiv/kyivCities.js";
import * as odesaModels from "./feeds/regionOdesa/odesaCities.js";

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

// Kyiv
for (const [modelName, Model] of Object.entries(kyivModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}
// Odesa
for (const [modelName, Model] of Object.entries(odesaModels)) {
  User.hasMany(Model);
  Model.belongsTo(User);
}
// Dnipro
User.hasMany(Dnipro);
Dnipro.belongsTo(User);
User.hasMany(KryvyiRih);
KryvyiRih.belongsTo(User);
User.hasMany(Kamianske);
Kamianske.belongsTo(User);
User.hasMany(Marganets);
Marganets.belongsTo(User);
User.hasMany(Nikopol);
Nikopol.belongsTo(User);
User.hasMany(Novomoskovsk);
Novomoskovsk.belongsTo(User);
User.hasMany(Pavlograd);
Pavlograd.belongsTo(User);
User.hasMany(Pershotravensk);
Pershotravensk.belongsTo(User);
User.hasMany(Pokrov);
Pokrov.belongsTo(User);
User.hasMany(Pyatihatky);
Pyatihatky.belongsTo(User);
User.hasMany(Sinelnikovo);
Sinelnikovo.belongsTo(User);
User.hasMany(Ternivka);
Ternivka.belongsTo(User);
User.hasMany(Vilnohorsk);
Vilnohorsk.belongsTo(User);
User.hasMany(ZhovtiVody);
ZhovtiVody.belongsTo(User);

User.hasMany(Banner);
Banner.belongsTo(User);

export default User;
