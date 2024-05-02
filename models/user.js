import { DataTypes } from "sequelize"
import sequelize from '../DBConnect.js'
import Media from "./media.js"
import NationalNews from "./nationalNews.js"
import Banner from "./banners/banner.js"
import Kyiv from "./feeds/regionKyiv/kyiv.js"
import Bilacerkva from "./feeds/regionKyiv/bilacerkva.js"
import Berezan from "./feeds/regionKyiv/berezan.js"
import Boryspil from "./feeds/regionKyiv/boryspil.js"
import Boyarka from "./feeds/regionKyiv/boyarka.js"
import Brovary from "./feeds/regionKyiv/brovary.js"
import Bucha from "./feeds/regionKyiv/bucha.js"
import Fastiv from "./feeds/regionKyiv/fastiv.js"
import Irpin from "./feeds/regionKyiv/irpin.js"
import Obukhiv from "./feeds/regionKyiv/obukhiv.js"
import Pereyaslav from "./feeds/regionKyiv/pereyaslav.js"
import Skvyra from "./feeds/regionKyiv/skvyra.js"
import Slavutych from "./feeds/regionKyiv/slavutych.js"
import Vasylkiv from "./feeds/regionKyiv/vasylkiv.js"
import Vyshhorod from "./feeds/regionKyiv/vyshhorod.js"
import Vyshneve from "./feeds/regionKyiv/vyshneve.js"
import Yagotyn from "./feeds/regionKyiv/yagotyn.js"
import Chornomorsk from "./feeds/regionOdesa/chornomorsk.js"
import Izmail from "./feeds/regionOdesa/izmail.js"
import Kiliya from "./feeds/regionOdesa/kiliya.js"
import Odesa from "./feeds/regionOdesa/odesa.js"
import Podilsk from "./feeds/regionOdesa/podilsk.js"
import Youzhne from "./feeds/regionOdesa/youzhne.js"
import BilgorodDnistrovsky from "./feeds/regionOdesa/bilgorod-dnistrovsky.js"
import Dnipro from "./feeds/regionDnipro/dnipro.js"
import KryvyiRih from "./feeds/regionDnipro/kryvyi-rih.js"
import Kamianske from "./feeds/regionDnipro/kamianske.js"
import Marganets from "./feeds/regionDnipro/marganets.js"
import Nikopol from "./feeds/regionDnipro/nikopol.js"
import Novomoskovsk from "./feeds/regionDnipro/novomoskovsk.js"
import Pavlograd from "./feeds/regionDnipro/pavlograd.js"
import Pershotravensk from "./feeds/regionDnipro/pershotravensk.js"
import Pokrov from "./feeds/regionDnipro/pokrov.js"
import Pyatihatky from "./feeds/regionDnipro/pyatihatky.js"
import Sinelnikovo from "./feeds/regionDnipro/sinelnikovo.js"
import Ternivka from "./feeds/regionDnipro/ternivka.js"
import Vilnohorsk from "./feeds/regionDnipro/vilnohorsk.js"
import ZhovtiVody from "./feeds/regionDnipro/zhovti-vody.js"
import Teplodar from "./feeds/regionOdesa/teplodar.js"
import BannerMedia from "./banners/bannerMedia.js"

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
    },
    accessRights: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'user',
    timestamps: true,
    underscored: true
})

User.hasMany(Media)
Media.belongsTo(User)
User.hasMany(BannerMedia)
BannerMedia.belongsTo(User)

User.hasMany(NationalNews)
NationalNews.belongsTo(User)
// Kyiv
User.hasMany(Berezan)
Berezan.belongsTo(User)
User.hasMany(Bilacerkva)
Bilacerkva.belongsTo(User)
User.hasMany(Boryspil)
Boryspil.belongsTo(User)
User.hasMany(Boyarka)
Boyarka.belongsTo(User)
User.hasMany(Brovary)
Brovary.belongsTo(User)
User.hasMany(Bucha)
Bucha.belongsTo(User)
User.hasMany(Fastiv)
Fastiv.belongsTo(User)
User.hasMany(Irpin)
Irpin.belongsTo(User)
User.hasMany(Kyiv)
Kyiv.belongsTo(User)
User.hasMany(Obukhiv)
Obukhiv.belongsTo(User)
User.hasMany(Pereyaslav)
Pereyaslav.belongsTo(User)
User.hasMany(Skvyra)
Skvyra.belongsTo(User)
User.hasMany(Slavutych)
Slavutych.belongsTo(User)
User.hasMany(Vasylkiv)
Vasylkiv.belongsTo(User)
User.hasMany(Vyshhorod)
Vyshhorod.belongsTo(User)
User.hasMany(Vyshneve)
Vyshneve.belongsTo(User)
User.hasMany(Yagotyn)
Yagotyn.belongsTo(User)
// Odesa
User.hasMany(BilgorodDnistrovsky)
BilgorodDnistrovsky.belongsTo(User)
User.hasMany(Chornomorsk)
Chornomorsk.belongsTo(User)
User.hasMany(Izmail)
Izmail.belongsTo(User)
User.hasMany(Kiliya)
Kiliya.belongsTo(User)
User.hasMany(Odesa)
Odesa.belongsTo(User)
User.hasMany(Podilsk)
Podilsk.belongsTo(User)
User.hasMany(Teplodar)
Teplodar.belongsTo(User)
User.hasMany(Youzhne)
Youzhne.belongsTo(User)
// Dnipro
User.hasMany(Dnipro)
Dnipro.belongsTo(User)
User.hasMany(KryvyiRih)
KryvyiRih.belongsTo(User)
User.hasMany(Kamianske)
Kamianske.belongsTo(User)
User.hasMany(Marganets)
Marganets.belongsTo(User)
User.hasMany(Nikopol)
Nikopol.belongsTo(User)
User.hasMany(Novomoskovsk)
Novomoskovsk.belongsTo(User)
User.hasMany(Pavlograd)
Pavlograd.belongsTo(User)
User.hasMany(Pershotravensk)
Pershotravensk.belongsTo(User)
User.hasMany(Pokrov)
Pokrov.belongsTo(User)
User.hasMany(Pyatihatky)
Pyatihatky.belongsTo(User)
User.hasMany(Sinelnikovo)
Sinelnikovo.belongsTo(User)
User.hasMany(Ternivka)
Ternivka.belongsTo(User)
User.hasMany(Vilnohorsk)
Vilnohorsk.belongsTo(User)
User.hasMany(ZhovtiVody)
ZhovtiVody.belongsTo(User)

User.hasMany(Banner)
Banner.belongsTo(User)

export default User