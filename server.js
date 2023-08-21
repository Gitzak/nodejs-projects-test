const express = require('express');

const productRoute = require('./routes/product')

const userRoute = require('./routes/user')

// const User = require('./models/user');

// const Product = require('./models/product');

require('./config/connect')

const app = express();

app.use(express.json());

app.use('/product', productRoute);

app.use('/user', userRoute);

app.use('/getImage', express.static('./uploads'));

// app.post('/add', (req, res) => {
//     data = req.body;

//     user = new User(data);

//     user.save()
//         .then((savedUser) => {
//             res.status(200).send(savedUser);
//         }).catch((err) => {
//             res.send(err);
//         });

// })

// app.post('/create', async (req, res) => {
//     try {
//         data = req.body;
//         user = new User(data);

//         savedUser = await user.save();

//         res.send(savedUser)

//     } catch (error) {
//         res.send(error);
//     }
// })

// app.get('/getAll', (req, res) => {
//     User.find()
//         .then(
//             (users) => {
//                 res.send(users)
//             }
//         ).catch((error) => {
//             res.send(error);
//         });
// });

// app.get('/all', async (req, res) => {
//     try {
//         users = await User.find(
//             {
//                 age: 28
//             }
//         );
//         res.send(users)
//     } catch (error) {
//         res.send(error);
//     }
// });

// app.get('/getById/:id', (req, res) => {
//     myId = req.params.id;

//     User.findOne({ _id: myId })
//         .then((user) => {
//             res.send(user);
//         }).catch((error) => {
//             res.send(error);
//         });
// });

// app.get('/getDataById/:id', async (req, res) => {
//     try {
//         myId = req.params.id;
//         user = await User.findOne({ _id: myId });
//         res.send(user);
//     } catch (error) {
//         res.send(error);
//     }
// });

// app.put('/update/:id', (req, res) => {
//     id = req.params.id;

//     newData = req.body;

//     User.findByIdAndUpdate({ _id: id }, newData)
//         .then(
//             (updated) => {
//                 res.send(updated);
//             }
//         ).catch((error) => {
//             res.send(error);
//         });
// });

// app.put('/updateById/:id', async (req, res) => {
//     try {
//         id = req.params.id;
//         newData = req.body;

//         updatedUser = await User.findByIdAndUpdate({ _id: id }, newData);
//         res.send(updatedUser);
//     } catch (error) {
//         res.send(error)
//     }
// });

// app.delete('/delete/:id', (req, res) => {
//     id = req.params.id;

//     User.findOneAndDelete({ _id: id })
//         .then((deletedUser) => {
//             res.send(deletedUser)
//         }).catch((error) => {
//             res.send(error)
//         });
// });

// app.delete('/deleteById/:id', async (req, res) => {
//     try {
//         id = req.params.id;
//         deletedUser = await User.findOneAndDelete({ _id: id });
//         res.send(deletedUser);
//     } catch (error) {
//         res.send(error)
//     }
// });

// product CRUD methods

// Create a new product

// app.post('/createProduct', async (req, res) => {
//     try {
//         data = req.body;
//         product = new Product(data);

//         savedProduct = await product.save();

//         res.status(200).send(savedProduct)

//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

// // Read
// app.get('/getAllProduct', async (req, res) => {
//     try {
//         product = await Product.find();
//         res.status(200).send(product)
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

// // Get Product by ID
// app.get('/getSinglePorduct/:id', async (req, res) => {
//     try {
//         myId = req.params.id;
//         product = await Product.findOne({ _id: myId });
//         res.status(200).send(product);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

// // Update Product
// app.put('/updateProductById/:id', async (req, res) => {
//     try {
//         id = req.params.id;
//         newData = req.body;

//         updatedProduct = await Product.findByIdAndUpdate({ _id: id }, newData);
//         res.status(200).send(updatedProduct);
//     } catch (error) {
//         res.status(400).send(error)
//     }
// });

// // Delete product
// app.delete('/deleteProductById/:id', async (req, res) => {
//     try {
//         id = req.params.id;
//         deletedProduct = await Product.findOneAndDelete({ _id: id });
//         res.status(200).send(deletedProduct);
//     } catch (error) {
//         res.status(400).send(error)
//     }
// });

app.listen(3000, () => {
    console.log('listening on port 3000');
})