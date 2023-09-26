import { Op } from "sequelize"
import Dnipro from "../../models/feeds/regionDnipro/dnipro.js"
import NationalNews from "../../models/nationalNews.js"
import transliteration from 'transliteration'
import Kamianske from "../../models/feeds/regionDnipro/kamianske.js"
import KryvyiRih from "../../models/feeds/regionDnipro/kryvyi-rih.js"
import Marganets from "../../models/feeds/regionDnipro/marganets.js"
import Nikopol from "../../models/feeds/regionDnipro/nikopol.js"
import Novomoskovsk from "../../models/feeds/regionDnipro/novomoskovsk.js"
import Pavlograd from "../../models/feeds/regionDnipro/pavlograd.js"
import Pershotravensk from "../../models/feeds/regionDnipro/pershotravensk.js"
import Pokrov from "../../models/feeds/regionDnipro/pokrov.js"
import Pyatihatky from "../../models/feeds/regionDnipro/pyatihatky.js"
import Sinelnikovo from "../../models/feeds/regionDnipro/sinelnikovo.js"
import Ternivka from "../../models/feeds/regionDnipro/ternivka.js"
import Vilnohorsk from "../../models/feeds/regionDnipro/vilnohorsk.js"
import ZhovtiVody from "../../models/feeds/regionDnipro/zhovti-vody.js"


const DniproNewsController = {
    // Dnipro
    getAllDniproNews: async (req, res) => {
        try {
            const posts = await Dnipro.findAll({
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllDniproWithNationalNews: async (req, res) => {
        try {
            const nationalNews = await NationalNews.findAll({
              order: [['publishedAt', 'DESC']]
            });
        
            const news = await Dnipro.findAll({
              order: [['publishedAt', 'DESC']]
            });
            const posts = nationalNews.concat(news);
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        
            res.status(200).json(posts);
          } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server error' });
          }
    },
    getAllDniproNewsByDate: async (req, res) => {
        const { date } = req.params;
        const startDate = new Date(date);
        const endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 1);
    
        try {
          const posts = await Dnipro.findAll({
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
      getDniproNewsByIdOrUrl: async (req, res) => {
        const param = req.params.param;
        try {
          let post;
          if (!isNaN(param)) {
            post = await Dnipro.findOne({ where: { id: param } });
          } else {
            post = await Dnipro.findOne({ where: { url: param } });
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
    updateDniproNews: async (req, res) => {
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
            const post = await Dnipro.update(
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
    deleteDniproNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Dnipro.destroy({ where: {id}})
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
    // Kamianske
    getAllKamianskeNews: async (req, res) => {
        try {
            const posts = await Kamianske.findAll({
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllKamianskeWithNationalNews: async (req, res) => {
        try {
            const nationalNews = await NationalNews.findAll({
              order: [['publishedAt', 'DESC']]
            });
        
            const news = await Kamianske.findAll({
              order: [['publishedAt', 'DESC']]
            });
            const posts = nationalNews.concat(news);
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        
            res.status(200).json(posts);
          } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server error' });
          }
    },
    getAllKamianskeNewsByDate: async (req, res) => {
        const { date } = req.params;
        const startDate = new Date(date);
        const endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 1);
    
        try {
          const posts = await Kamianske.findAll({
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
      getKamianskeNewsByIdOrUrl: async (req, res) => {
        const param = req.params.param;
        try {
          let post;
          if (!isNaN(param)) {
            post = await Kamianske.findOne({ where: { id: param } });
          } else {
            post = await Kamianske.findOne({ where: { url: param } });
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
    updateKamianskeNews: async (req, res) => {
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
            const post = await Kamianske.update(
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
    deleteKamianskeNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Kamianske.destroy({ where: {id}})
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
    // KryvyiRih
    getAllKryvyiRihNews: async (req, res) => {
        try {
            const posts = await KryvyiRih.findAll({
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllKryvyiRihWithNationalNews: async (req, res) => {
        try {
            const nationalNews = await NationalNews.findAll({
              order: [['publishedAt', 'DESC']]
            });
        
            const news = await KryvyiRih.findAll({
              order: [['publishedAt', 'DESC']]
            });
            const posts = nationalNews.concat(news);
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        
            res.status(200).json(posts);
          } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server error' });
          }
    },
    getAllKryvyiRihNewsByDate: async (req, res) => {
        const { date } = req.params;
        const startDate = new Date(date);
        const endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 1);
    
        try {
          const posts = await KryvyiRih.findAll({
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
      getKryvyiRihNewsByIdOrUrl: async (req, res) => {
        const param = req.params.param;
        try {
          let post;
          if (!isNaN(param)) {
            post = await KryvyiRih.findOne({ where: { id: param } });
          } else {
            post = await KryvyiRih.findOne({ where: { url: param } });
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
    updateKryvyiRihNews: async (req, res) => {
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
            const post = await KryvyiRih.update(
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
    deleteKryvyiRihNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await KryvyiRih.destroy({ where: {id}})
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
    // Marganets
    getAllMarganetsNews: async (req, res) => {
        try {
            const posts = await Marganets.findAll({
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllMarganetsWithNationalNews: async (req, res) => {
        try {
            const nationalNews = await NationalNews.findAll({
              order: [['publishedAt', 'DESC']]
            });
        
            const news = await Marganets.findAll({
              order: [['publishedAt', 'DESC']]
            });
            const posts = nationalNews.concat(news);
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        
            res.status(200).json(posts);
          } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server error' });
          }
    },
    getAllMarganetsNewsByDate: async (req, res) => {
        const { date } = req.params;
        const startDate = new Date(date);
        const endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 1);
    
        try {
          const posts = await Marganets.findAll({
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
      getMarganetsNewsByIdOrUrl: async (req, res) => {
        const param = req.params.param;
        try {
          let post;
          if (!isNaN(param)) {
            post = await Marganets.findOne({ where: { id: param } });
          } else {
            post = await Marganets.findOne({ where: { url: param } });
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
    updateMarganetsNews: async (req, res) => {
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
            const post = await Marganets.update(
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
    deleteMarganetsNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Marganets.destroy({ where: {id}})
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
    // Nikopol
    getAllNikopolNews: async (req, res) => {
        try {
            const posts = await Nikopol.findAll({
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllNikopolWithNationalNews: async (req, res) => {
        try {
            const nationalNews = await NationalNews.findAll({
              order: [['publishedAt', 'DESC']]
            });
        
            const news = await Nikopol.findAll({
              order: [['publishedAt', 'DESC']]
            });
            const posts = nationalNews.concat(news);
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        
            res.status(200).json(posts);
          } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server error' });
          }
    },
    getAllNikopolNewsByDate: async (req, res) => {
        const { date } = req.params;
        const startDate = new Date(date);
        const endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 1);
    
        try {
          const posts = await Nikopol.findAll({
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
      getNikopolNewsByIdOrUrl: async (req, res) => {
        const param = req.params.param;
        try {
          let post;
          if (!isNaN(param)) {
            post = await Nikopol.findOne({ where: { id: param } });
          } else {
            post = await Nikopol.findOne({ where: { url: param } });
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
    updateNikopolNews: async (req, res) => {
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
            const post = await Nikopol.update(
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
    deleteNikopolNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Nikopol.destroy({ where: {id}})
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
    // Novomoskovsk
    getAllNovomoskovskNews: async (req, res) => {
        try {
            const posts = await Novomoskovsk.findAll({
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllNovomoskovskWithNationalNews: async (req, res) => {
        try {
            const nationalNews = await NationalNews.findAll({
              order: [['publishedAt', 'DESC']]
            });
        
            const news = await Novomoskovsk.findAll({
              order: [['publishedAt', 'DESC']]
            });
            const posts = nationalNews.concat(news);
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        
            res.status(200).json(posts);
          } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server error' });
          }
    },
    getAllNovomoskovskNewsByDate: async (req, res) => {
        const { date } = req.params;
        const startDate = new Date(date);
        const endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 1);
    
        try {
          const posts = await Novomoskovsk.findAll({
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
      getNovomoskovskNewsByIdOrUrl: async (req, res) => {
        const param = req.params.param;
        try {
          let post;
          if (!isNaN(param)) {
            post = await Novomoskovsk.findOne({ where: { id: param } });
          } else {
            post = await Novomoskovsk.findOne({ where: { url: param } });
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
    updateNovomoskovskNews: async (req, res) => {
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
            const post = await Novomoskovsk.update(
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
    deleteNovomoskovskNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Novomoskovsk.destroy({ where: {id}})
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
    // Pavlograd
    getAllPavlogradNews: async (req, res) => {
        try {
            const posts = await Pavlograd.findAll({
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllPavlogradWithNationalNews: async (req, res) => {
        try {
            const nationalNews = await NationalNews.findAll({
              order: [['publishedAt', 'DESC']]
            });
        
            const news = await Pavlograd.findAll({
              order: [['publishedAt', 'DESC']]
            });
            const posts = nationalNews.concat(news);
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        
            res.status(200).json(posts);
          } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server error' });
          }
    },
    getAllPavlogradNewsByDate: async (req, res) => {
        const { date } = req.params;
        const startDate = new Date(date);
        const endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 1);
    
        try {
          const posts = await Pavlograd.findAll({
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
      getPavlogradNewsByIdOrUrl: async (req, res) => {
        const param = req.params.param;
        try {
          let post;
          if (!isNaN(param)) {
            post = await Pavlograd.findOne({ where: { id: param } });
          } else {
            post = await Pavlograd.findOne({ where: { url: param } });
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
    updatePavlogradNews: async (req, res) => {
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
            const post = await Pavlograd.update(
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
    deletePavlogradNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Pavlograd.destroy({ where: {id}})
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
    // Pershotravensk
    getAllPershotravenskNews: async (req, res) => {
        try {
            const posts = await Pershotravensk.findAll({
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllPershotravenskWithNationalNews: async (req, res) => {
        try {
            const nationalNews = await NationalNews.findAll({
              order: [['publishedAt', 'DESC']]
            });
        
            const news = await Pershotravensk.findAll({
              order: [['publishedAt', 'DESC']]
            });
            const posts = nationalNews.concat(news);
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        
            res.status(200).json(posts);
          } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server error' });
          }
    },
    getAllPershotravenskNewsByDate: async (req, res) => {
        const { date } = req.params;
        const startDate = new Date(date);
        const endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 1);
    
        try {
          const posts = await Pershotravensk.findAll({
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
      getPershotravenskNewsByIdOrUrl: async (req, res) => {
        const param = req.params.param;
        try {
          let post;
          if (!isNaN(param)) {
            post = await Pershotravensk.findOne({ where: { id: param } });
          } else {
            post = await Pershotravensk.findOne({ where: { url: param } });
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
    updatePershotravenskNews: async (req, res) => {
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
            const post = await Pershotravensk.update(
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
    deletePershotravenskNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Pershotravensk.destroy({ where: {id}})
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
    // Pokrov
    getAllPokrovNews: async (req, res) => {
        try {
            const posts = await Pokrov.findAll({
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllPokrovWithNationalNews: async (req, res) => {
        try {
            const nationalNews = await NationalNews.findAll({
              order: [['publishedAt', 'DESC']]
            });
        
            const news = await Pokrov.findAll({
              order: [['publishedAt', 'DESC']]
            });
            const posts = nationalNews.concat(news);
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        
            res.status(200).json(posts);
          } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server error' });
          }
    },
    getAllPokrovNewsByDate: async (req, res) => {
        const { date } = req.params;
        const startDate = new Date(date);
        const endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 1);
    
        try {
          const posts = await Pokrov.findAll({
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
      getPokrovNewsByIdOrUrl: async (req, res) => {
        const param = req.params.param;
        try {
          let post;
          if (!isNaN(param)) {
            post = await Pokrov.findOne({ where: { id: param } });
          } else {
            post = await Pokrov.findOne({ where: { url: param } });
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
    updatePokrovNews: async (req, res) => {
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
            const post = await Pokrov.update(
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
    deletePokrovNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Pokrov.destroy({ where: {id}})
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
    // Pyatihatky
    getAllPyatihatkyNews: async (req, res) => {
        try {
            const posts = await Pyatihatky.findAll({
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllPyatihatkyWithNationalNews: async (req, res) => {
        try {
            const nationalNews = await NationalNews.findAll({
              order: [['publishedAt', 'DESC']]
            });
        
            const news = await Pyatihatky.findAll({
              order: [['publishedAt', 'DESC']]
            });
            const posts = nationalNews.concat(news);
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        
            res.status(200).json(posts);
          } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server error' });
          }
    },
    getAllPyatihatkyNewsByDate: async (req, res) => {
        const { date } = req.params;
        const startDate = new Date(date);
        const endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 1);
    
        try {
          const posts = await Pyatihatky.findAll({
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
      getPyatihatkyNewsByIdOrUrl: async (req, res) => {
        const param = req.params.param;
        try {
          let post;
          if (!isNaN(param)) {
            post = await Pyatihatky.findOne({ where: { id: param } });
          } else {
            post = await Pyatihatky.findOne({ where: { url: param } });
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
    updatePyatihatkyNews: async (req, res) => {
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
            const post = await Pyatihatky.update(
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
    deletePyatihatkyNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Pyatihatky.destroy({ where: {id}})
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
    // Sinelnikovo
    getAllSinelnikovoNews: async (req, res) => {
        try {
            const posts = await Sinelnikovo.findAll({
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllSinelnikovoWithNationalNews: async (req, res) => {
        try {
            const nationalNews = await NationalNews.findAll({
              order: [['publishedAt', 'DESC']]
            });
        
            const news = await Sinelnikovo.findAll({
              order: [['publishedAt', 'DESC']]
            });
            const posts = nationalNews.concat(news);
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        
            res.status(200).json(posts);
          } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server error' });
          }
    },
    getAllSinelnikovoNewsByDate: async (req, res) => {
        const { date } = req.params;
        const startDate = new Date(date);
        const endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 1);
    
        try {
          const posts = await Sinelnikovo.findAll({
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
      getSinelnikovoNewsByIdOrUrl: async (req, res) => {
        const param = req.params.param;
        try {
          let post;
          if (!isNaN(param)) {
            post = await Sinelnikovo.findOne({ where: { id: param } });
          } else {
            post = await Sinelnikovo.findOne({ where: { url: param } });
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
    updateSinelnikovoNews: async (req, res) => {
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
            const post = await Sinelnikovo.update(
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
    deleteSinelnikovoNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Sinelnikovo.destroy({ where: {id}})
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
    // Ternivka
    getAllTernivkaNews: async (req, res) => {
        try {
            const posts = await Ternivka.findAll({
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllTernivkaWithNationalNews: async (req, res) => {
        try {
            const nationalNews = await NationalNews.findAll({
              order: [['publishedAt', 'DESC']]
            });
        
            const news = await Ternivka.findAll({
              order: [['publishedAt', 'DESC']]
            });
            const posts = nationalNews.concat(news);
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        
            res.status(200).json(posts);
          } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server error' });
          }
    },
    getAllTernivkaNewsByDate: async (req, res) => {
        const { date } = req.params;
        const startDate = new Date(date);
        const endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 1);
    
        try {
          const posts = await Ternivka.findAll({
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
      getTernivkaNewsByIdOrUrl: async (req, res) => {
        const param = req.params.param;
        try {
          let post;
          if (!isNaN(param)) {
            post = await Ternivka.findOne({ where: { id: param } });
          } else {
            post = await Ternivka.findOne({ where: { url: param } });
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
    updateTernivkaNews: async (req, res) => {
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
            const post = await Ternivka.update(
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
    deleteTernivkaNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Ternivka.destroy({ where: {id}})
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
    // Vilnohorsk
    getAllVilnohorskNews: async (req, res) => {
        try {
            const posts = await Vilnohorsk.findAll({
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllVilnohorskWithNationalNews: async (req, res) => {
        try {
            const nationalNews = await NationalNews.findAll({
              order: [['publishedAt', 'DESC']]
            });
        
            const news = await Vilnohorsk.findAll({
              order: [['publishedAt', 'DESC']]
            });
            const posts = nationalNews.concat(news);
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        
            res.status(200).json(posts);
          } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server error' });
          }
    },
    getAllVilnohorskNewsByDate: async (req, res) => {
        const { date } = req.params;
        const startDate = new Date(date);
        const endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 1);
    
        try {
          const posts = await Vilnohorsk.findAll({
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
      getVilnohorskNewsByIdOrUrl: async (req, res) => {
        const param = req.params.param;
        try {
          let post;
          if (!isNaN(param)) {
            post = await Vilnohorsk.findOne({ where: { id: param } });
          } else {
            post = await Vilnohorsk.findOne({ where: { url: param } });
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
    updateVilnohorskNews: async (req, res) => {
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
            const post = await Vilnohorsk.update(
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
    deleteVilnohorskNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await Vilnohorsk.destroy({ where: {id}})
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
    // ZhovtiVody
    getAllZhovtiVodyNews: async (req, res) => {
        try {
            const posts = await ZhovtiVody.findAll({
                order: [['publishedAt', 'DESC']]
            })
            res.status(200).json(posts)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getAllZhovtiVodyWithNationalNews: async (req, res) => {
        try {
            const nationalNews = await NationalNews.findAll({
              order: [['publishedAt', 'DESC']]
            });
        
            const news = await ZhovtiVody.findAll({
              order: [['publishedAt', 'DESC']]
            });
            const posts = nationalNews.concat(news);
            posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
        
            res.status(200).json(posts);
          } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Server error' });
          }
    },
    getAllZhovtiVodyNewsByDate: async (req, res) => {
        const { date } = req.params;
        const startDate = new Date(date);
        const endDate = new Date(date);
        endDate.setDate(endDate.getDate() + 1);
    
        try {
          const posts = await ZhovtiVody.findAll({
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
      getZhovtiVodyNewsByIdOrUrl: async (req, res) => {
        const param = req.params.param;
        try {
          let post;
          if (!isNaN(param)) {
            post = await ZhovtiVody.findOne({ where: { id: param } });
          } else {
            post = await ZhovtiVody.findOne({ where: { url: param } });
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
    updateZhovtiVodyNews: async (req, res) => {
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
            const post = await ZhovtiVody.update(
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
    deleteZhovtiVodyNews: async (req, res) => {
        const id = req.params.id
        console.log(req.params.id);
        try {
            const post = await ZhovtiVody.destroy({ where: {id}})
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

export default DniproNewsController