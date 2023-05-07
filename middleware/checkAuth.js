import jwt from 'jsonwebtoken'

export const checkAuth = (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '')

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)

            req.id = decoded.id

            next()
        } catch (error) {
            console.error(error)
            return res.status(401).json('No access')
        }
    } else {
        return res.status(401).json('No access')
    }
}