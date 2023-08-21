const express = require('express');

const router = express.Router();

const User = require('../models/user');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

// router.post('/add', (req, res) => {
//     data = req.body;

//     user = new User(data);

//     user.save()
//         .then((savedUser) => {
//             res.status(200).send(savedUser);
//         }).catch((err) => {
//             res.send(err);
//         });

// })

router.post('/register', async (req, res) => {
    try {
        data = req.body;

        user = new User(data);

        salt = bcrypt.genSaltSync(10);

        cryptedPassword = await bcrypt.hashSync(data.password, salt);

        user.password = cryptedPassword;

        savedUser = await user.save();

        res.status(200).send(savedUser)

    } catch (error) {
        res.status(400).send(err);
    }
})

router.post('/login', async (req, res) => {
    try {
        
        data = req.body;

        user = await User.findOne(
            {
                email: data.email
            }
        )

        if (!user) {
            res.status(404).send('email or password is incorrect!');
        } else {
            validPass = bcrypt.compareSync(data.password, user.password)

            if (!validPass) {
                res.status(401).send('email or password is incorrect!');
            } else {
                payload = {
                    _id: user._id,
                    email: user.email,
                    name: user.name
                }
                token = jwt.sign(payload, '123Secret')

                res.status(200).send({
                    myToken: token
                })
            }
        }

    } catch (error) {
        res.status(400).send(error);
    }
})

router.post('/create', async (req, res) => {
    try {
        data = req.body;
        user = new User(data);

        savedUser = await user.save();

        res.send(savedUser)

    } catch (error) {
        res.send(error);
    }
})

router.get('/getAll', (req, res) => {
    User.find()
        .then(
            (users) => {
                res.send(users)
            }
        ).catch((error) => {
            res.send(error);
        });
});

router.get('/all', async (req, res) => {
    try {
        users = await User.find(
            {
                age: 28
            }
        );
        res.send(users)
    } catch (error) {
        res.send(error);
    }
});

router.get('/getById/:id', (req, res) => {
    myId = req.params.id;

    User.findOne({ _id: myId })
        .then((user) => {
            res.send(user);
        }).catch((error) => {
            res.send(error);
        });
});

router.get('/getDataById/:id', async (req, res) => {
    try {
        myId = req.params.id;
        user = await User.findOne({ _id: myId });
        res.send(user);
    } catch (error) {
        res.send(error);
    }
});

router.put('/update/:id', (req, res) => {
    id = req.params.id;

    newData = req.body;

    User.findByIdAndUpdate({ _id: id }, newData)
        .then(
            (updated) => {
                res.send(updated);
            }
        ).catch((error) => {
            res.send(error);
        });
});

router.put('/updateById/:id', async (req, res) => {
    try {
        id = req.params.id;
        newData = req.body;

        updatedUser = await User.findByIdAndUpdate({ _id: id }, newData);
        res.send(updatedUser);
    } catch (error) {
        res.send(error)
    }
});

router.delete('/delete/:id', (req, res) => {
    id = req.params.id;

    User.findOneAndDelete({ _id: id })
        .then((deletedUser) => {
            res.send(deletedUser)
        }).catch((error) => {
            res.send(error)
        });
});

router.delete('/deleteById/:id', async (req, res) => {
    try {
        id = req.params.id;
        deletedUser = await User.findOneAndDelete({ _id: id });
        res.send(deletedUser);
    } catch (error) {
        res.send(error)
    }
});


module.exports = router;