import express from 'express'
import dotenv from 'dotenv'
import sequelize from './DBConnect.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

import userRouter from './routes/users.js'
import newsRouter from './routes/news.js'
import mediaRouter from './routes/media.js'
import bannerRouter from './routes/banners.js'
import bodyParser from 'body-parser'
import fileUpload from 'express-fileupload'

import regionKyivRouter from './routes/regionFeeds/regionKyiv.js'
import regionOdesaRouter from './routes/regionFeeds/regionOdesa.js'
import connectionRouter from './routes/connection.js'

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
app.use('/api', newsRouter)
app.use('/api', mediaRouter)
app.use('/api', bannerRouter)
app.use('/api', regionKyivRouter)
app.use('/api', regionOdesaRouter)
app.use('/api', connectionRouter)

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