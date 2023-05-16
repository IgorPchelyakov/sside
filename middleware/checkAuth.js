import jwt from 'jsonwebtoken'
import User from '../models/user.js'

export const checkAuth = async (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

            const user = await User.findOne({where: {id: decoded.id}})
            
            req.id = user.id;

            next()
        } catch (error) {
            console.error(error)
            return res.status(401).json('No access')
        }
    } else {
        return res.status(401).json('No access')
    }
}