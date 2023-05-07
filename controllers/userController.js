import User from "../models/user.js"

const UserController = {
    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll()
            res.status(200).json(users)
        } catch (error) {
            console.error(error)
            res.status(500).json({
                message: 'Server error'
            })
        }
    },
    getUserById: async (req, res) => {
        const id = req.params.id
        try {
            const user = await User.findByPk(id)
            if (user) {
                res.status(200).json(user)
            } else {
                res.status(404).json({
                    message: 'User not found'
                })
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({
                message: 'Server error'
            })
        }
    },
    createUser: async (req, res) => {
        const { login, password, email } = req.body
        try {
            const user = await User.create({ login, password, email })
            res.status(201).json(user)
        } catch (error) {
            console.error(error)
            res.status(500).json({
                message: 'Server error'
            })
        }
    },
    updateUser: async (req, res) => {
        const id = req.params.id
        const { login, password, email } = req.body
        try {
            const result = await User.update(
                { login, password, email },
                { where: { id }}
            )
            if (result[0]) {
                res.status(200).json({
                    message: 'User updated'
                })
            } else {
                res.status(404).json({
                    message: 'User not found'
                })
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({
                message: 'Server error'
            })
        }
    },
    deleteUser: async (req, res) => {
        const id = req.params.id
        try {
            const result = await User.destroy({ where: { id } })
            if (result) {
                res.status(200).json({
                    message: 'User deleted'
                })
            } else {
                res.status(404).json({
                    message: 'User not found'
                })                
            }
        } catch (error) {
            console.error(error)
            res.status(500).json({
                message: 'Server error'
            })
        }
    }
}

export default UserController