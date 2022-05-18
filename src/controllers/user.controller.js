const parentController = require('./_parent.controller');
const {User} = require('../models');

module.exports = {
    ...parentController(User)
};