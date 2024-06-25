const catchError = require('../utils/catchError');
const Favorite = require('../models/Favorite');

const add = catchError(async (req, res) => {
    const { postId } = req.body;
    const userId = req.user.id;

    const existingAdd = await Favorite.findOne({ where: { userId, postId } })
    if (existingAdd) {
        return res.status(400).json({ error: 'Post already add' })
    }

    const result = await Favorite.create({ userId, postId });
    return res.status(201).json(result);
});

const removeAdd = catchError(async (req, res) => {
    const { postId } = req.params;
    const userId = req.user.id;

    const result = await Favorite.destroy({ where: { userId, postId } });
    if (!result) return res.sendStatus(404);
    return res.sendStatus(204);
});

module.exports = {
    add,
    removeAdd
}