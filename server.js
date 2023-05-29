import express from 'express'
import dotenv from 'dotenv'
import sequelize from './DBConnect.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import userRouter from './routes/users.js'
import postRouter from './routes/posts.js'
import mediaRouter from './routes/media.js'
import bannerRouter from './routes/banners.js'
import bodyParser from 'body-parser'
import fileUpload from 'express-fileupload'
import multer from 'multer'

dotenv.config()

const PORT = process.env.PORT || 5656

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}))
app.use(cookieParser())
app.use(cors())
app.use(fileUpload())
app.use('/api/uploads', express.static('uploads'))

app.use('/api', userRouter)
app.use('/api', postRouter)
app.use('/api', mediaRouter)
app.use('/api', bannerRouter)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Укажите путь к папке, в которую вы хотите сохранить файлы
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      // Генерируйте уникальное имя файла
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      // Получите расширение файла
      const fileExtension = file.originalname.split('.').pop();
      // Сохраните файл с уникальным именем и его расширением
      cb(null, uniqueSuffix + '.' + fileExtension);
    }
  });
  
  // Создание экземпляра Multer с использованием настроек хранилища
  const upload = multer({ storage: storage });
  
  // Маршрут для обработки загрузки файла
  app.post('/upload-url', upload.single('avatarUrl'), (req, res) => {
    // Здесь можно выполнить дополнительную обработку загруженного файла, например, сохранить его путь в базе данных
  
    // Отправить ответ клиенту
    res.json({ message: 'Файл успешно загружен' });
  });

const start = () => {
    try {
        sequelize.authenticate()
            .then(() => {
                console.log('Connection to database has been established successfully.')
            })
            .catch((error) => {
                console.error('Unable to connect to the database:', error)
            })

        sequelize.sync()
            .then(() => {
                console.log('All models were synchronized successfully.')
            })
            .catch((error) => {
                console.error('An error occurred while synchronizing the models:', error)
            })

        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

start()