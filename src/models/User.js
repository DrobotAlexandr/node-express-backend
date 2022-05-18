const {
    model, Schema, Schema: {
        Types: {}
    }
} = require('mongoose');

const schema = new Schema(
    {
        name: {
            type: String,
            default: '',
        },
        lastName: {
            type: String,
            default: '',
        },
        patronymic: {
            type: String,
            default: '',
        },
        login: {
            type: String,
            default: '',
        },
        email: {
            type: String,
            default: '',
        },
        phone: {
            type: String,
            default: '',
        }
    }
);

module.exports = model('User', schema);