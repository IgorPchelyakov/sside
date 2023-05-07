import express from 'express'
import dotenv from 'dotenv'
import sequelize from './DBConnect.js'
import cors from 'cors'

import userRouter from './routes/users.js'

dotenv.config()

const PORT = process.env.PORT || 5656

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', userRouter)

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