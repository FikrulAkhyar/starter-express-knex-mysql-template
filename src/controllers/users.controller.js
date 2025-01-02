import * as userService from '../services/users.service.js';

export const getUsers = async (req, res) => {
    try {
        const result = await userService.getUsers();

        res.status(200).json({ ...result });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Failed to fetch users',
            error: error.message,
        });
    }
};