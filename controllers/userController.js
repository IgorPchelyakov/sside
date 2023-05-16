import User from "../models/user.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const UserController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll()
            res.status(200).json(users)
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    getUserById: async (req, res) => {
        const id = req.params.id
        try {
            const user = await User.findOne({where: {id: id}})
            if (user) {
                res.status(200).json(user)
            } else {
                res.status(404).json({ message: 'User not found' })
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    login: async (req, res) => {
        try {
            const { login, password } = req.body

            if (!login || !password) {
                return res.status(400).json({ message: 'Please fill in the required fields' })
            }

            const user = await User.findOne({ where: { login }})
            if (!login) {
                return res.status(404).json({ message: 'User not found' })
            }

            const isPasswordCorrect = await bcrypt.compare(password, user.password)
            if (!isPasswordCorrect) {
                return res.status(401).json({ message: 'Invalid password' })
            }

            /* TODO: take the function outside the controller */
            const token = jwt.sign(
                { id: user.id }, 
                process.env.JWT_SECRET_KEY,
                { expiresIn: '1d' }
            )

            res.status(200).json({
                id: user.id,
                login: user.login,
                token: token,
                message: 'Authorization successful'
            })
        } catch (error) {
            console.error(error)
            res.status(401).json({ message: 'Authorization failed' })
        }
    },
    checkMe: async (req, res) => {
        try {
            const user = await User.findByPk(req.id)
            if (!user) {
                return res.status(401).json({ message: 'User not found' })
            }

            const token = jwt.sign(
                { id: user.id },
                process.env.JWT_SECRET_KEY,
                { expiresIn: '1d' }
            )

            res.status(200).json({
                token,
                id: user.id,
                login: user.login,
                lastName: user.lastName,
                firstName: user.firstName,
                role: user.role,
            })
        } catch (error) {
            console.error(error)
            res.status(401).json({ message: 'No access' })
        }
    },
    createUser: async (req, res) => {
        const {
            login,
            password,
            email,
            role,
            firstName,
            middleName,
            lastName,
            nickName,
            job,
            city,
            tel,
            telegramLink,
            facebookLink,
            instagramLink,
            twitterLink,
            descUser,
            avatarUrl,
            accessRights
        } = req.body
        try {
            const isUsedLogin = await User.findOne({ where: { login } })
            const isUsedEmail = await User.findOne({ where: { email }})

            if (isUsedLogin) {
                return res.status(400).json({ message: 'This login is already in use'})
            }

            if (isUsedEmail) {
                return res.status(400).json({ message: 'This email is already in use'})
            }

            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            const user = await User.create({ 
                login,
                password: hash,
                email,
                role,
                firstName,
                middleName,
                lastName,
                nickName,
                job,
                city,
                tel,
                telegramLink,
                facebookLink,
                instagramLink,
                twitterLink,
                descUser,
                avatarUrl,
                accessRights
            })
            res.status(201).json({
                user,
                message: 'User creation successful'
            })
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    updateUser: async (req, res) => {
        const id = req.params.id
        const {
            password,
            email,
            role,
            firstName,
            middleName,
            lastName,
            nickName,
            job,
            city,
            tel,
            telegramLink,
            facebookLink,
            instagramLink,
            twitterLink,
            descUser,
            avatarUrl,
            accessRights
        } = req.body
        try {
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)

            const result = await User.update(
                {
                    password: hash,
                    email,
                    role,
                    firstName,
                    middleName,
                    lastName,
                    nickName,
                    job,
                    city,
                    tel,
                    telegramLink,
                    facebookLink,
                    instagramLink,
                    twitterLink,
                    descUser,
                    avatarUrl,
                    accessRights
                },
                { where: { id }}
            )
            if (result[0]) {
                res.status(200).json({ message: 'User updated' })
            } else {
                res.status(404).json({ message: 'User not found' })
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: 'Server error' })
        }
    },
    deleteUser: async (req, res) => {
        const id = req.params.id
        try {
            const result = await User.destroy({ where: { id } })
            if (result) {
                res.status(200).json({ message: 'User deleted' })
            } else {
                res.status(404).json({ message: 'User not found'})                
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({ message: 'Server error' })
        }
    }
}

export default UserController