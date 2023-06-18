import transliteration from 'transliteration'
import NationalNews from "../models/nationalNews.js"
import Kyiv from "../models/feeds/regionKyiv/kyiv.js"
import Bilacerkva from '../models/feeds/regionKyiv/bilacerkva.js'
import Berezan from '../models/feeds/regionKyiv/berezan.js'
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
import url from 'url'
import { Op } from 'sequelize'

const NewsController = {
    getAllNews: async (req, res) => {
        try {
            const posts = await NationalNews.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllNewsByDate: async (req, res) => {
        const { date } = req.params;
        const startDate = new Date(date);
        const endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 1);
    
        try {
          const posts = await NationalNews.findAll({
            where: {
              publishedAt: {
                [Op.between]: [startDate, endDate],
              },
            },
            order: [['publishedAt', 'DESC']],
          });
          res.status(200).json(posts);
        } catch (error) {
          console.log(error);
          res.status(500).json({ message: 'Помилка сервера' });
        }
      },
    // Kyiv Region
    getAllBerezanNews: async (req, res) => {
        try {
            const posts = await Berezan.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllBilacerkvaNews: async (req, res) => {
        try {
            const posts = await Bilacerkva.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllBoryspilNews: async (req, res) => {
        try {
            const posts = await Boryspil.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllBoyarkaNews: async (req, res) => {
        try {
            const posts = await Boyarka.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllBrovaryNews: async (req, res) => {
        try {
            const posts = await Brovary.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllBuchaNews: async (req, res) => {
        try {
            const posts = await Bucha.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllFastivNews: async (req, res) => {
        try {
            const posts = await Fastiv.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllIrpinNews: async (req, res) => {
        try {
            const posts = await Irpin.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllKyivNews: async (req, res) => {
        try {
            const posts = await Kyiv.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllObukhivNews: async (req, res) => {
        try {
            const posts = await Obukhiv.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllPereyaslavNews: async (req, res) => {
        try {
            const posts = await Pereyaslav.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllSkvyraNews: async (req, res) => {
        try {
            const posts = await Skvyra.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllSlavutychNews: async (req, res) => {
        try {
            const posts = await Slavutych.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllVasylkivNews: async (req, res) => {
        try {
            const posts = await Vasylkiv.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllVyshhorodNews: async (req, res) => {
        try {
            const posts = await Vyshhorod.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllVyshneveNews: async (req, res) => {
        try {
            const posts = await Vyshneve.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllYagotynNews: async (req, res) => {
        try {
            const posts = await Yagotyn.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    // Odesa Region
    getAllBilgorodDnistrovskyNews: async (req, res) => {
        try {
            const posts = await BilgorodDnistrovsky.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllChornomorskNews: async (req, res) => {
        try {
            const posts = await Chornomorsk.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllIzmailNews: async (req, res) => {
        try {
            const posts = await Izmail.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllKiliyaNews: async (req, res) => {
        try {
            const posts = await Kiliya.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllOdesaNews: async (req, res) => {
        try {
            const posts = await Odesa.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllPodilskNews: async (req, res) => {
        try {
            const posts = await Podilsk.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllYouzhneNews: async (req, res) => {
        try {
            const posts = await Youzhne.findAll({
                order: [['createdAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    // Get One News
    getNewsByIdOrURL: async (req, res) => {
        const param = req.params.param;
        try {
          let post;
          if (!isNaN(param)) {
            // If the param is a number, treat it as an ID
            post = await NationalNews.findOne({ where: { id: param } });
          } else {
            // Otherwise, treat it as a URL
            post = await NationalNews.findOne({ where: { url: param } });
          }
          if (post) {
            post.views += 1;
            await post.save();
            res.status(200).json(post);
          } else {
            res.status(404).json({ message: 'Post not found' });
          }
        } catch (error) {
          console.log(error);
          res.status(500).json({ message: 'Server error' });
        }
      },
    //Kyiv Region
    getBerezanNewsById: async (req, res) => {
        const id = req.params.id
        try {
            const post = await Berezan.findOne({where: {id: id}})
            if (post) {
                post.views += 1;
                await post.save();
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getBilacerkvaNewsById: async (req, res) => {
        const id = req.params.id
        try {
            const post = await Bilacerkva.findOne({where: {id: id}})
            if (post) {
                post.views += 1;
                await post.save();
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getBoryspilNewsById: async (req, res) => {
        const id = req.params.id
        try {
            const post = await Boryspil.findOne({where: {id: id}})
            if (post) {
                post.views += 1;
                await post.save();
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getBoyarkaNewsById: async (req, res) => {
        const id = req.params.id
        try {
            const post = await Boyarka.findOne({where: {id: id}})
            if (post) {
                post.views += 1;
                await post.save();
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getBrovaryNewsById: async (req, res) => {
        const id = req.params.id
        try {
            const post = await Brovary.findOne({where: {id: id}})
            if (post) {
                post.views += 1;
                await post.save();
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getBuchaNewsById: async (req, res) => {
        const id = req.params.id
        try {
            const post = await Bucha.findOne({where: {id: id}})
            if (post) {
                post.views += 1;
                await post.save();
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getFastivNewsById: async (req, res) => {
        const id = req.params.id
        try {
            const post = await Fastiv.findOne({where: {id: id}})
            if (post) {
                post.views += 1;
                await post.save();
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getIrpinNewsById: async (req, res) => {
        const id = req.params.id
        try {
            const post = await Irpin.findOne({where: {id: id}})
            if (post) {
                post.views += 1;
                await post.save();
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getKyivNewsById: async (req, res) => {
        const id = req.params.id
        try {
            const post = await Kyiv.findOne({where: {id: id}})
            if (post) {
                post.views += 1;
                await post.save();
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getObukhivNewsById: async (req, res) => {
        const id = req.params.id
        try {
            const post = await Obukhiv.findOne({where: {id: id}})
            if (post) {
                post.views += 1;
                await post.save();
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getPereyaslavNewsById: async (req, res) => {
        const id = req.params.id
        try {
            const post = await Pereyaslav.findOne({where: {id: id}})
            if (post) {
                post.views += 1;
                await post.save();
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getSkvyraNewsById: async (req, res) => {
        const id = req.params.id
        try {
            const post = await Skvyra.findOne({where: {id: id}})
            if (post) {
                post.views += 1;
                await post.save();
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getSlavutychNewsById: async (req, res) => {
        const id = req.params.id
        try {
            const post = await Slavutych.findOne({where: {id: id}})
            if (post) {
                post.views += 1;
                await post.save();
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getVasylkivNewsById: async (req, res) => {
        const id = req.params.id
        try {
            const post = await Vasylkiv.findOne({where: {id: id}})
            if (post) {
                post.views += 1;
                await post.save();
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getVyshhorodNewsById: async (req, res) => {
        const id = req.params.id
        try {
            const post = await Vyshhorod.findOne({where: {id: id}})
            if (post) {
                post.views += 1;
                await post.save();
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getVyshneveNewsById: async (req, res) => {
        const id = req.params.id
        try {
            const post = await Vyshneve.findOne({where: {id: id}})
            if (post) {
                post.views += 1;
                await post.save();
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getYagotynNewsById: async (req, res) => {
        const id = req.params.id
        try {
            const post = await Yagotyn.findOne({where: {id: id}})
            if (post) {
                post.views += 1;
                await post.save();
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    // Odesa Region
    getBilgorodDnistrovskyNewsById: async (req, res) => {
        const id = req.params.id
        try {
            const post = await BilgorodDnistrovsky.findOne({where: {id: id}})
            if (post) {
                post.views += 1;
                await post.save();
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getChornomorskNewsById: async (req, res) => {
        const id = req.params.id
        try {
            const post = await Chornomorsk.findOne({where: {id: id}})
            if (post) {
                post.views += 1;
                await post.save();
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getIzmailNewsById: async (req, res) => {
        const id = req.params.id
        try {
            const post = await Izmail.findOne({where: {id: id}})
            if (post) {
                post.views += 1;
                await post.save();
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getKiliyaNewsById: async (req, res) => {
        const id = req.params.id
        try {
            const post = await Kiliya.findOne({where: {id: id}})
            if (post) {
                post.views += 1;
                await post.save();
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getOdesaNewsById: async (req, res) => {
        const id = req.params.id
        try {
            const post = await Odesa.findOne({where: {id: id}})
            if (post) {
                post.views += 1;
                await post.save();
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getPodilskNewsById: async (req, res) => {
        const id = req.params.id
        try {
            const post = await Podilsk.findOne({where: {id: id}})
            if (post) {
                post.views += 1;
                await post.save();
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getYouzhneNewsById: async (req, res) => {
        const id = req.params.id
        try {
            const post = await Youzhne.findOne({where: {id: id}})
            if (post) {
                post.views += 1;
                await post.save();
                res.status(200).json(post)
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    // Add News
    addNews: async (req, res) => {
        const postData = req.body
        try {
            const {
                publishedAt,
                feed,
                postType,
                block,
                section,
                title,
                desc,
                showDesc,
                mainImage,
                mainImgDesc,
                mainImgAuthor,
                imageSize,
                content,
                live,
                showAuthorDesc,
                showAuthor,
                publishOnSocialMedia,
                UserId
            } = postData
            const existingPost = await NationalNews.findOne({ where: { title } });

            if (existingPost) {
            res.status(400).json({ message: 'Публікація з таким заголовком вже існує' });
            return;
            }
            const updatedFeed = feed.slice(1);
            const feedString = updatedFeed.length === 0 ? feed[0] : updatedFeed.join(', ');

            const url = transliteration.slugify(title);
            let post;

            switch (feedString) {
                case 'Загальнонаціональна стрічка':
                    post = await NationalNews.create({
                        publishedAt,
                        postType,
                        block,
                        section,
                        feed: feedString,
                        title,
                        url,
                        desc,
                        showDesc,
                        mainImage,
                        mainImgDesc,
                        mainImgAuthor,
                        imageSize,
                        content,
                        live,
                        showAuthorDesc,
                        showAuthor,
                        publishOnSocialMedia,
                        UserId,
                    });
                    break;
                case 'Березань':
                    post = await Berezan.create({
                        publishedAt,
                        postType,
                        block,
                        feed: feedString,
                        section,
                        title,
                        url,
                        desc,
                        showDesc,
                        mainImage,
                        mainImgDesc,
                        mainImgAuthor,
                        imageSize,
                        content,
                        live,
                        showAuthorDesc,
                        showAuthor,
                        publishOnSocialMedia,
                        UserId,
                    });
                    break;
                case 'Біла Церква':
                    post = await Bilacerkva.create({
                        publishedAt,
                        postType,
                        block,
                        feed: feedString,
                        section,
                        title,
                        url,
                        desc,
                        showDesc,
                        mainImage,
                        mainImgDesc,
                        mainImgAuthor,
                        imageSize,
                        content,
                        live,
                        showAuthorDesc,
                        showAuthor,
                        publishOnSocialMedia,
                        UserId,
                    });
                    break;
                case 'Бориспіль':
                    post = await Boryspil.create({
                        publishedAt,
                        postType,
                        block,
                        feed: feedString,
                        section,
                        title,
                        url,
                        desc,
                        showDesc,
                        mainImage,
                        mainImgDesc,
                        mainImgAuthor,
                        imageSize,
                        content,
                        live,
                        showAuthorDesc,
                        showAuthor,
                        publishOnSocialMedia,
                        UserId,
                    });
                    break;
                case 'Боярка':
                    post = await Boyarka.create({
                        publishedAt,
                        postType,
                        block,
                        feed: feedString,
                        section,
                        title,
                        url,
                        desc,
                        showDesc,
                        mainImage,
                        mainImgDesc,
                        mainImgAuthor,
                        imageSize,
                        content,
                        live,
                        showAuthorDesc,
                        showAuthor,
                        publishOnSocialMedia,
                        UserId,
                    });
                    break;
                case 'Бровари':
                    post = await Brovary.create({
                        publishedAt,
                        postType,
                        block,
                        feed: feedString,
                        section,
                        title,
                        url,
                        desc,
                        showDesc,
                        mainImage,
                        mainImgDesc,
                        mainImgAuthor,
                        imageSize,
                        content,
                        live,
                        showAuthorDesc,
                        showAuthor,
                        publishOnSocialMedia,
                        UserId,
                    });
                    break;
                case 'Буча':
                    post = await Bucha.create({
                        publishedAt,
                        postType,
                        block,
                        feed: feedString,
                        section,
                        title,
                        url,
                        desc,
                        showDesc,
                        mainImage,
                        mainImgDesc,
                        mainImgAuthor,
                        imageSize,
                        content,
                        live,
                        showAuthorDesc,
                        showAuthor,
                        publishOnSocialMedia,
                        UserId,
                    });
                    break;
                case 'Фастів':
                    post = await Fastiv.create({
                        publishedAt,
                        postType,
                        block,
                        feed: feedString,
                        section,
                        title,
                        url,
                        desc,
                        showDesc,
                        mainImage,
                        mainImgDesc,
                        mainImgAuthor,
                        imageSize,
                        content,
                        live,
                        showAuthorDesc,
                        showAuthor,
                        publishOnSocialMedia,
                        UserId,
                    });
                    break;
                case 'Ірпінь':
                    post = await Irpin.create({
                        publishedAt,
                        postType,
                        block,
                        feed: feedString,
                        section,
                        title,
                        url,
                        desc,
                        showDesc,
                        mainImage,
                        mainImgDesc,
                        mainImgAuthor,
                        imageSize,
                        content,
                        live,
                        showAuthorDesc,
                        showAuthor,
                        publishOnSocialMedia,
                        UserId,
                    });
                    break;
                case 'Київ':
                    post = await Kyiv.create({
                        publishedAt,
                        postType,
                        block,
                        feed: feedString,
                        section,
                        title,
                        url,
                        desc,
                        showDesc,
                        mainImage,
                        mainImgDesc,
                        mainImgAuthor,
                        imageSize,
                        content,
                        live,
                        showAuthorDesc,
                        showAuthor,
                        publishOnSocialMedia,
                        UserId,
                    });
                    break;
                case 'Обухів':
                    post = await Obukhiv.create({
                        publishedAt,
                        postType,
                        block,
                        feed: feedString,
                        section,
                        title,
                        url,
                        desc,
                        showDesc,
                        mainImage,
                        mainImgDesc,
                        mainImgAuthor,
                        imageSize,
                        content,
                        live,
                        showAuthorDesc,
                        showAuthor,
                        publishOnSocialMedia,
                        UserId,
                    });
                    break;
                case 'Переяслав':
                    post = await Pereyaslav.create({
                        publishedAt,
                        postType,
                        block,
                        feed: feedString,
                        section,
                        title,
                        url,
                        desc,
                        showDesc,
                        mainImage,
                        mainImgDesc,
                        mainImgAuthor,
                        imageSize,
                        content,
                        live,
                        showAuthorDesc,
                        showAuthor,
                        publishOnSocialMedia,
                        UserId,
                    });
                    break;
                case 'Сквира':
                    post = await Skvyra.create({
                        publishedAt,
                        postType,
                        block,
                        feed: feedString,
                        section,
                        title,
                        url,
                        desc,
                        showDesc,
                        mainImage,
                        mainImgDesc,
                        mainImgAuthor,
                        imageSize,
                        content,
                        live,
                        showAuthorDesc,
                        showAuthor,
                        publishOnSocialMedia,
                        UserId,
                    });
                    break;
                case 'Славутич':
                    post = await Slavutych.create({
                        publishedAt,
                        postType,
                        block,
                        feed: feedString,
                        section,
                        title,
                        url,
                        desc,
                        showDesc,
                        mainImage,
                        mainImgDesc,
                        mainImgAuthor,
                        imageSize,
                        content,
                        live,
                        showAuthorDesc,
                        showAuthor,
                        publishOnSocialMedia,
                        UserId,
                    });
                    break;
                case 'Васильків':
                    post = await Vasylkiv.create({
                        publishedAt,
                        postType,
                        block,
                        feed: feedString,
                        section,
                        title,
                        url,
                        desc,
                        showDesc,
                        mainImage,
                        mainImgDesc,
                        mainImgAuthor,
                        imageSize,
                        content,
                        live,
                        showAuthorDesc,
                        showAuthor,
                        publishOnSocialMedia,
                        UserId,
                    });
                    break;
                case 'Вишгород':
                    post = await Vyshhorod.create({
                        publishedAt,
                        postType,
                        block,
                        feed: feedString,
                        section,
                        title,
                        url,
                        desc,
                        showDesc,
                        mainImage,
                        mainImgDesc,
                        mainImgAuthor,
                        imageSize,
                        content,
                        live,
                        showAuthorDesc,
                        showAuthor,
                        publishOnSocialMedia,
                        UserId,
                    });
                    break;
                case 'Вишневе':
                    post = await Vyshneve.create({
                        publishedAt,
                        postType,
                        block,
                        feed: feedString,
                        section,
                        title,
                        url,
                        desc,
                        showDesc,
                        mainImgDesc,
                        mainImgAuthor,
                        mainImage,
                        imageSize,
                        content,
                        live,
                        showAuthorDesc,
                        showAuthor,
                        publishOnSocialMedia,
                        UserId,
                    });
                    break;
                case 'Яготин':
                    post = await Yagotyn.create({
                        publishedAt,
                        postType,
                        block,
                        feed: feedString,
                        section,
                        title,
                        url,
                        desc,
                        showDesc,
                        mainImage,
                        mainImgDesc,
                        mainImgAuthor,
                        imageSize,
                        content,
                        live,
                        showAuthorDesc,
                        showAuthor,
                        publishOnSocialMedia,
                        UserId,
                    });
                    break;
                    // Odesa Region
                case 'Білгород-Дністровський':
                    post = await BilgorodDnistrovsky.create({
                        publishedAt,
                        postType,
                        block,
                        feed: feedString,
                        section,
                        title,
                        url,
                        desc,
                        showDesc,
                        mainImage,
                        mainImgDesc,
                        mainImgAuthor,
                        imageSize,
                        content,
                        live,
                        showAuthorDesc,
                        showAuthor,
                        publishOnSocialMedia,
                        UserId,
                    });
                    break;
                case 'Чорноморськ':
                    post = await Chornomorsk.create({
                        publishedAt,
                        postType,
                        block,
                        feed: feedString,
                        section,
                        title,
                        url,
                        desc,
                        showDesc,
                        mainImage,
                        mainImgDesc,
                        mainImgAuthor,
                        imageSize,
                        content,
                        live,
                        showAuthorDesc,
                        showAuthor,
                        publishOnSocialMedia,
                        UserId,
                    });
                    break;
                case 'Ізмаїл':
                    post = await Izmail.create({
                        publishedAt,
                        postType,
                        block,
                        feed: feedString,
                        section,
                        title,
                        url,
                        desc,
                        showDesc,
                        mainImage,
                        mainImgDesc,
                        mainImgAuthor,
                        imageSize,
                        content,
                        live,
                        showAuthorDesc,
                        showAuthor,
                        publishOnSocialMedia,
                        UserId,
                    });
                    break;
                case 'Кілія':
                    post = await Kiliya.create({
                        publishedAt,
                        postType,
                        block,
                        feed: feedString,
                        section,
                        title,
                        url,
                        desc,
                        showDesc,
                        mainImage,
                        mainImgDesc,
                        mainImgAuthor,
                        imageSize,
                        content,
                        live,
                        showAuthorDesc,
                        showAuthor,
                        publishOnSocialMedia,
                        UserId,
                    });
                    break;
                case 'Одеса':
                    post = await Odesa.create({
                        publishedAt,
                        postType,
                        block,
                        feed: feedString,
                        section,
                        title,
                        url,
                        desc,
                        showDesc,
                        mainImage,
                        mainImgDesc,
                        mainImgAuthor,
                        imageSize,
                        content,
                        live,
                        showAuthorDesc,
                        showAuthor,
                        publishOnSocialMedia,
                        UserId,
                    });
                    break;
                case 'Подільськ':
                    post = await Podilsk.create({
                        publishedAt,
                        postType,
                        block,
                        feed: feedString,
                        section,
                        title,
                        url,
                        desc,
                        showDesc,
                        mainImage,
                        mainImgDesc,
                        mainImgAuthor,
                        imageSize,
                        content,
                        live,
                        showAuthorDesc,
                        showAuthor,
                        publishOnSocialMedia,
                        UserId,
                    });
                    break;
                case 'Южне':
                    post = await Youzhne.create({
                        publishedAt,
                        postType,
                        block,
                        feed: feedString,
                        section,
                        title,
                        url,
                        desc,
                        showDesc,
                        mainImage,
                        mainImgDesc,
                        mainImgAuthor,
                        imageSize,
                        content,
                        live,
                        showAuthorDesc,
                        showAuthor,
                        publishOnSocialMedia,
                        UserId,
                    });
                    break;
                    default:
                        return res.status(400).json({ message: 'Invalid feed' });
            }

            res.status(200).json({
                post,
                message: 'Новину успішно створено'
            })

        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateNews: async (req, res) => {
        const {
            id,
            publishedAt,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            mainImgDesc,
            mainImgAuthor,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const url = transliteration.slugify(title);

            const post = await NationalNews.update(
                {
                    publishedAt,
                    postType,
                    block,
                    section,
                    title,
                    url,
                    desc,
                    showDesc,
                    mainImage,
                    mainImgDesc,
                    mainImgAuthor,
                    imageSize,
                    content,
                    live,
                    showAuthorDesc,
                    showAuthor,
                    publishOnSocialMedia,
                    UserId,
                },
                {
                    where: { id }
                }
            )

            if (post[0]) {
                res.status(200).json({ message: 'Post updated' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateBerezanNews: async (req, res) => {
        const {
            id,
            publishedAt,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            mainImgDesc,
            mainImgAuthor,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const url = transliteration.slugify(title);
            const post = await Berezan.update(
                {
                    publishedAt,
                    postType,
                    block,
                    section,
                    title,
                    url,
                    desc,
                    showDesc,
                    mainImage,
                    mainImgDesc,
                    mainImgAuthor,
                    imageSize,
                    content,
                    live,
                    showAuthorDesc,
                    showAuthor,
                    publishOnSocialMedia,
                    UserId,
                },
                {
                    where: { id }
                }
            )

            if (post[0]) {
                res.status(200).json({ message: 'Post updated' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateBilacerkvaNews: async (req, res) => {
        const {
            id,
            publishedAt,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            mainImgDesc,
            mainImgAuthor,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const url = transliteration.slugify(title);
            const post = await Bilacerkva.update(
                {
                    publishedAt,
                    postType,
                    block,
                    section,
                    title,
                    url,
                    desc,
                    showDesc,
                    mainImage,
                    mainImgDesc,
                    mainImgAuthor,
                    imageSize,
                    content,
                    live,
                    showAuthorDesc,
                    showAuthor,
                    publishOnSocialMedia,
                    UserId,
                },
                {
                    where: { id }
                }
            )

            if (post[0]) {
                res.status(200).json({ message: 'Post updated' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateBoryspilNews: async (req, res) => {
        const {
            id,
            publishedAt,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            mainImgDesc,
            mainImgAuthor,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const url = transliteration.slugify(title);
            const post = await Boryspil.update(
                {
                    publishedAt,
                    postType,
                    block,
                    section,
                    title,
                    url,
                    desc,
                    showDesc,
                    mainImage,
                    mainImgDesc,
                    mainImgAuthor,
                    imageSize,
                    content,
                    live,
                    showAuthorDesc,
                    showAuthor,
                    publishOnSocialMedia,
                    UserId,
                },
                {
                    where: { id }
                }
            )

            if (post[0]) {
                res.status(200).json({ message: 'Post updated' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateBoyarkaNews: async (req, res) => {
        const {
            id,
            publishedAt,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            mainImgDesc,
            mainImgAuthor,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const url = transliteration.slugify(title);
            const post = await Boyarka.update(
                {
                    publishedAt,
                    postType,
                    block,
                    section,
                    title,
                    url,
                    desc,
                    showDesc,
                    mainImage,
                    mainImgDesc,
                    mainImgAuthor,
                    imageSize,
                    content,
                    live,
                    showAuthorDesc,
                    showAuthor,
                    publishOnSocialMedia,
                    UserId,
                },
                {
                    where: { id }
                }
            )

            if (post[0]) {
                res.status(200).json({ message: 'Post updated' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateBrovaryNews: async (req, res) => {
        const {
            id,
            publishedAt,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            mainImgDesc,
            mainImgAuthor,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const url = transliteration.slugify(title);
            const post = await Brovary.update(
                {
                    publishedAt,
                    postType,
                    block,
                    section,
                    title,
                    url,
                    desc,
                    showDesc,
                    mainImage,
                    mainImgDesc,
                    mainImgAuthor,
                    imageSize,
                    content,
                    live,
                    showAuthorDesc,
                    showAuthor,
                    publishOnSocialMedia,
                    UserId,
                },
                {
                    where: { id }
                }
            )

            if (post[0]) {
                res.status(200).json({ message: 'Post updated' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateBuchaNews: async (req, res) => {
        const {
            id,
            publishedAt,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            mainImgDesc,
            mainImgAuthor,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const url = transliteration.slugify(title);
            const post = await Bucha.update(
                {
                    publishedAt,
                    postType,
                    block,
                    section,
                    title,
                    url,
                    desc,
                    showDesc,
                    mainImage,
                    mainImgDesc,
                    mainImgAuthor,
                    imageSize,
                    content,
                    live,
                    showAuthorDesc,
                    showAuthor,
                    publishOnSocialMedia,
                    UserId,
                },
                {
                    where: { id }
                }
            )

            if (post[0]) {
                res.status(200).json({ message: 'Post updated' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateFastivNews: async (req, res) => {
        const {
            id,
            publishedAt,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            mainImgDesc,
            mainImgAuthor,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const url = transliteration.slugify(title);
            const post = await Fastiv.update(
                {
                    publishedAt,
                    postType,
                    block,
                    section,
                    title,
                    url,
                    desc,
                    showDesc,
                    mainImage,
                    mainImgDesc,
                    mainImgAuthor,
                    imageSize,
                    content,
                    live,
                    showAuthorDesc,
                    showAuthor,
                    publishOnSocialMedia,
                    UserId,
                },
                {
                    where: { id }
                }
            )

            if (post[0]) {
                res.status(200).json({ message: 'Post updated' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateIrpinNews: async (req, res) => {
        const {
            id,
            publishedAt,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            mainImgDesc,
            mainImgAuthor,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const url = transliteration.slugify(title);
            const post = await Irpin.update(
                {
                    publishedAt,
                    postType,
                    block,
                    section,
                    title,
                    url,
                    desc,
                    showDesc,
                    mainImage,
                    mainImgDesc,
                    mainImgAuthor,
                    imageSize,
                    content,
                    live,
                    showAuthorDesc,
                    showAuthor,
                    publishOnSocialMedia,
                    UserId,
                },
                {
                    where: { id }
                }
            )

            if (post[0]) {
                res.status(200).json({ message: 'Post updated' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateKyivNews: async (req, res) => {
        const {
            id,
            publishedAt,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            mainImgDesc,
            mainImgAuthor,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const url = transliteration.slugify(title);
            const post = await Kyiv.update(
                {
                    publishedAt,
                    postType,
                    block,
                    section,
                    title,
                    url,
                    desc,
                    showDesc,
                    mainImage,
                    mainImgDesc,
                    mainImgAuthor,
                    imageSize,
                    content,
                    live,
                    showAuthorDesc,
                    showAuthor,
                    publishOnSocialMedia,
                    UserId,
                },
                {
                    where: { id }
                }
            )

            if (post[0]) {
                res.status(200).json({ message: 'Post updated' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateObukhivNews: async (req, res) => {
        const {
            id,
            publishedAt,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            mainImgDesc,
            mainImgAuthor,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const url = transliteration.slugify(title);
            const post = await Obukhiv.update(
                {
                    publishedAt,
                    postType,
                    block,
                    section,
                    title,
                    url,
                    desc,
                    showDesc,
                    mainImage,
                    mainImgDesc,
                    mainImgAuthor,
                    imageSize,
                    content,
                    live,
                    showAuthorDesc,
                    showAuthor,
                    publishOnSocialMedia,
                    UserId,
                },
                {
                    where: { id }
                }
            )

            if (post[0]) {
                res.status(200).json({ message: 'Post updated' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updatePereyaslavNews: async (req, res) => {
        const {
            id,
            publishedAt,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            mainImgDesc,
            mainImgAuthor,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const url = transliteration.slugify(title);
            const post = await Pereyaslav.update(
                {
                    publishedAt,
                    postType,
                    block,
                    section,
                    title,
                    url,
                    desc,
                    showDesc,
                    mainImage,
                    mainImgDesc,
                    mainImgAuthor,
                    imageSize,
                    content,
                    live,
                    showAuthorDesc,
                    showAuthor,
                    publishOnSocialMedia,
                    UserId,
                },
                {
                    where: { id }
                }
            )

            if (post[0]) {
                res.status(200).json({ message: 'Post updated' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateSkvyraNews: async (req, res) => {
        const {
            id,
            publishedAt,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            mainImgDesc,
            mainImgAuthor,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const url = transliteration.slugify(title);
            const post = await Skvyra.update(
                {
                    publishedAt,
                    postType,
                    block,
                    section,
                    title,
                    url,
                    desc,
                    showDesc,
                    mainImage,
                    mainImgDesc,
                    mainImgAuthor,
                    imageSize,
                    content,
                    live,
                    showAuthorDesc,
                    showAuthor,
                    publishOnSocialMedia,
                    UserId,
                },
                {
                    where: { id }
                }
            )

            if (post[0]) {
                res.status(200).json({ message: 'Post updated' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateSlavutychNews: async (req, res) => {
        const {
            id,
            publishedAt,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            mainImgDesc,
            mainImgAuthor,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const url = transliteration.slugify(title);
            const post = await Slavutych.update(
                {
                    publishedAt,
                    postType,
                    block,
                    section,
                    title,
                    url,
                    desc,
                    showDesc,
                    mainImage,
                    mainImgDesc,
                    mainImgAuthor,
                    imageSize,
                    content,
                    live,
                    showAuthorDesc,
                    showAuthor,
                    publishOnSocialMedia,
                    UserId,
                },
                {
                    where: { id }
                }
            )

            if (post[0]) {
                res.status(200).json({ message: 'Post updated' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateVasylkivNews: async (req, res) => {
        const {
            id,
            publishedAt,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            mainImgDesc,
            mainImgAuthor,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const url = transliteration.slugify(title);
            const post = await Vasylkiv.update(
                {
                    publishedAt,
                    postType,
                    block,
                    section,
                    title,
                    url,
                    desc,
                    showDesc,
                    mainImage,
                    mainImgDesc,
                    mainImgAuthor,
                    imageSize,
                    content,
                    live,
                    showAuthorDesc,
                    showAuthor,
                    publishOnSocialMedia,
                    UserId,
                },
                {
                    where: { id }
                }
            )

            if (post[0]) {
                res.status(200).json({ message: 'Post updated' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateVyshhorodNews: async (req, res) => {
        const {
            id,
            publishedAt,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            mainImgDesc,
            mainImgAuthor,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const url = transliteration.slugify(title);
            const post = await Vyshhorod.update(
                {
                    publishedAt,
                    postType,
                    block,
                    section,
                    title,
                    url,
                    desc,
                    showDesc,
                    mainImage,
                    mainImgDesc,
                    mainImgAuthor,
                    imageSize,
                    content,
                    live,
                    showAuthorDesc,
                    showAuthor,
                    publishOnSocialMedia,
                    UserId,
                },
                {
                    where: { id }
                }
            )

            if (post[0]) {
                res.status(200).json({ message: 'Post updated' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateVyshneveNews: async (req, res) => {
        const {
            id,
            publishedAt,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            mainImgDesc,
            mainImgAuthor,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const url = transliteration.slugify(title);
            const post = await Vyshneve.update(
                {
                    publishedAt,
                    postType,
                    block,
                    section,
                    title,
                    url,
                    desc,
                    showDesc,
                    mainImage,
                    mainImgDesc,
                    mainImgAuthor,
                    imageSize,
                    content,
                    live,
                    showAuthorDesc,
                    showAuthor,
                    publishOnSocialMedia,
                    UserId,
                },
                {
                    where: { id }
                }
            )

            if (post[0]) {
                res.status(200).json({ message: 'Post updated' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateYagotynNews: async (req, res) => {
        const {
            id,
            publishedAt,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            mainImgDesc,
            mainImgAuthor,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const url = transliteration.slugify(title);
            const post = await Yagotyn.update(
                {
                    publishedAt,
                    postType,
                    block,
                    section,
                    title,
                    url,
                    desc,
                    showDesc,
                    mainImage,
                    mainImgDesc,
                    mainImgAuthor,
                    imageSize,
                    content,
                    live,
                    showAuthorDesc,
                    showAuthor,
                    publishOnSocialMedia,
                    UserId,
                },
                {
                    where: { id }
                }
            )

            if (post[0]) {
                res.status(200).json({ message: 'Post updated' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateBilgorodDnistrovskyNews: async (req, res) => {
        const {
            id,
            publishedAt,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            mainImgDesc,
            mainImgAuthor,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const url = transliteration.slugify(title);
            const post = await BilgorodDnistrovsky.update(
                {
                    publishedAt,
                    postType,
                    block,
                    section,
                    title,
                    url,
                    desc,
                    showDesc,
                    mainImage,
                    mainImgDesc,
                    mainImgAuthor,
                    imageSize,
                    content,
                    live,
                    showAuthorDesc,
                    showAuthor,
                    publishOnSocialMedia,
                    UserId,
                },
                {
                    where: { id }
                }
            )

            if (post[0]) {
                res.status(200).json({ message: 'Post updated' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateChornomorskNews: async (req, res) => {
        const {
            id,
            publishedAt,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            mainImgDesc,
            mainImgAuthor,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const url = transliteration.slugify(title);
            const post = await Chornomorsk.update(
                {
                    publishedAt,
                    postType,
                    block,
                    section,
                    title,
                    url,
                    desc,
                    showDesc,
                    mainImage,
                    mainImgDesc,
                    mainImgAuthor,
                    imageSize,
                    content,
                    live,
                    showAuthorDesc,
                    showAuthor,
                    publishOnSocialMedia,
                    UserId,
                },
                {
                    where: { id }
                }
            )

            if (post[0]) {
                res.status(200).json({ message: 'Post updated' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateIzmailNews: async (req, res) => {
        const {
            id,
            publishedAt,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            mainImgDesc,
            mainImgAuthor,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const url = transliteration.slugify(title);
            const post = await Izmail.update(
                {
                    publishedAt,
                    postType,
                    block,
                    section,
                    title,
                    url,
                    desc,
                    showDesc,
                    mainImage,
                    mainImgDesc,
                    mainImgAuthor,
                    imageSize,
                    content,
                    live,
                    showAuthorDesc,
                    showAuthor,
                    publishOnSocialMedia,
                    UserId,
                },
                {
                    where: { id }
                }
            )

            if (post[0]) {
                res.status(200).json({ message: 'Post updated' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateKiliyaNews: async (req, res) => {
        const {
            id,
            publishedAt,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            mainImgDesc,
            mainImgAuthor,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const url = transliteration.slugify(title);
            const post = await Kiliya.update(
                {
                    publishedAt,
                    postType,
                    block,
                    section,
                    title,
                    url,
                    desc,
                    showDesc,
                    mainImage,
                    mainImgDesc,
                    mainImgAuthor,
                    imageSize,
                    content,
                    live,
                    showAuthorDesc,
                    showAuthor,
                    publishOnSocialMedia,
                    UserId,
                },
                {
                    where: { id }
                }
            )

            if (post[0]) {
                res.status(200).json({ message: 'Post updated' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateOdesaNews: async (req, res) => {
        const {
            id,
            publishedAt,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            mainImgDesc,
            mainImgAuthor,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const url = transliteration.slugify(title);
            const post = await Odesa.update(
                {
                    publishedAt,
                    postType,
                    block,
                    section,
                    title,
                    url,
                    desc,
                    showDesc,
                    mainImage,
                    mainImgDesc,
                    mainImgAuthor,
                    imageSize,
                    content,
                    live,
                    showAuthorDesc,
                    showAuthor,
                    publishOnSocialMedia,
                    UserId,
                },
                {
                    where: { id }
                }
            )

            if (post[0]) {
                res.status(200).json({ message: 'Post updated' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updatePodilskNews: async (req, res) => {
        const {
            id,
            publishedAt,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            mainImgDesc,
            mainImgAuthor,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const url = transliteration.slugify(title);
            const post = await Podilsk.update(
                {
                    publishedAt,
                    postType,
                    block,
                    section,
                    title,
                    url,
                    desc,
                    showDesc,
                    mainImage,
                    mainImgDesc,
                    mainImgAuthor,
                    imageSize,
                    content,
                    live,
                    showAuthorDesc,
                    showAuthor,
                    publishOnSocialMedia,
                    UserId,
                },
                {
                    where: { id }
                }
            )

            if (post[0]) {
                res.status(200).json({ message: 'Post updated' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateYouzhneNews: async (req, res) => {
        const {
            id,
            publishedAt,
            postType,
            block,
            section,
            title,
            desc,
            showDesc,
            mainImage,
            mainImgDesc,
            mainImgAuthor,
            imageSize,
            content,
            live,
            showAuthorDesc,
            showAuthor,
            publishOnSocialMedia,
            UserId,
        } = req.body
        try {
            const url = transliteration.slugify(title);
            const post = await Youzhne.update(
                {
                    publishedAt,
                    postType,
                    block,
                    section,
                    title,
                    url,
                    desc,
                    showDesc,
                    mainImage,
                    mainImgDesc,
                    mainImgAuthor,
                    imageSize,
                    content,
                    live,
                    showAuthorDesc,
                    showAuthor,
                    publishOnSocialMedia,
                    UserId,
                },
                {
                    where: { id }
                }
            )

            if (post[0]) {
                res.status(200).json({ message: 'Post updated' })
            } else {
                res.status(404).json({ message: 'Post not found' })
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deleteNews: async (req, res) => {
        const id = req.params.id
        try {
            const post = await NationalNews.destroy({ where: {id}})
            if (post) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deleteBerezanNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Berezan.destroy({ where: {id}})
            if (post) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deleteBilacerkvaNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Bilacerkva.destroy({ where: {id}})
            if (post) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deleteBoryspilNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Boryspil.destroy({ where: {id}})
            if (post) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deleteBoyarkaNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Boyarka.destroy({ where: {id}})
            if (post) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deleteBrovaryNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Brovary.destroy({ where: {id}})
            if (post) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deleteBuchaNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Bucha.destroy({ where: {id}})
            if (post) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deleteFastivNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Fastiv.destroy({ where: {id}})
            if (post) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deleteIrpinNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Irpin.destroy({ where: {id}})
            if (post) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deleteKyivNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Kyiv.destroy({ where: {id}})
            if (post) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deleteObukhivNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Obukhiv.destroy({ where: {id}})
            if (post) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deletePereyaslavNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Pereyaslav.destroy({ where: {id}})
            if (post) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deleteSkvyraNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Skvyra.destroy({ where: {id}})
            if (post) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deleteSlavutychNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Slavutych.destroy({ where: {id}})
            if (post) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deleteVasylkivNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Vasylkiv.destroy({ where: {id}})
            if (post) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deleteVyshhorodNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Vyshhorod.destroy({ where: {id}})
            if (post) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deleteVyshneveNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Vyshneve.destroy({ where: {id}})
            if (post) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deleteYagotynNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Yagotyn.destroy({ where: {id}})
            if (post) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deleteBilgorodDnistrovskyNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await BilgorodDnistrovsky.destroy({ where: {id}})
            if (post) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deleteChornomorskNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Chornomorsk.destroy({ where: {id}})
            if (post) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deleteIzmailNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Izmail.destroy({ where: {id}})
            if (post) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deleteKiliyaNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Kiliya.destroy({ where: {id}})
            if (post) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deleteOdesaNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Odesa.destroy({ where: {id}})
            if (post) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deletePodilskNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Podilsk.destroy({ where: {id}})
            if (post) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deleteYouzhneNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Youzhne.destroy({ where: {id}})
            if (post) {
                res.status(200).json({ message: 'Post deleted' })
            } else {
                res.status(404).json({ message: 'Post not found'})                
            }
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
}

export default NewsController