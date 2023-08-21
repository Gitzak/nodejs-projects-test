const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecommerce')
    .then(
        () => {
            console.log('Connected');
        }
    ).catch(
        (err) => {
            console.log(err);
        }
    )

module.exports = mongoose;