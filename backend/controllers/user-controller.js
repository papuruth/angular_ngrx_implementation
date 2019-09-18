const userModel = require('../models/user');

exports.getUsers = async function (req, res) {
    await userModel.find({}, function (err, data) {
        if (err) {
            console.log(err.message)
        } else {
            res.json(data);
        }
    })
};