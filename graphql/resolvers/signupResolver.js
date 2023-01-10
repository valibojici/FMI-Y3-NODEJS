const models = require("../../models");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config/jwt');

const SALT_ROUNDS = 8;

module.exports = async (source, { username, password }, { tokenPayload }) => {
    if (!tokenPayload) {
        throw new Error('not logged in');
    }

    password = await bcrypt.hash(password, SALT_ROUNDS);
    const user = models.User.create({
        username,
        password
    });

    const token = jwt.sign({ userID: user.id }, JWT_SECRET);

    return {
        token
    };
}
