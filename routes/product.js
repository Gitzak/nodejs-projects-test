const express = require('express');

const router = express.Router();

const Product = require('../models/product');

const multer = require('multer');

fileName = '';

const myStorage = multer.diskStorage({
    destination: "./uploads",
    fileName: (req, file, redirect) => {
        let date = Date.now();
        let fl = date + '.' + file.mimetype.split('/')[1];
        redirect(null, fl);
        fileName = fl;
        console.log(file);
    }
})

const upload = multer({ storage: myStorage })

router.post('/create', upload.any('image'), async (req, res) => {
    try {
        data = req.body;
        
        productReq = new Product(data);

        productReq.image = fileName;

        savedProduct = await productReq.save();

        fileName = ""

        res.status(200).send(savedProduct)

    } catch (error) {
        res.status(400).send(error);
    }
});

// Read
router.get('/get_all', async (req, res) => {
    try {
        product = await Product.find();
        res.status(200).send(product)
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get Product by ID
router.get('/get_single_product/:id', async (req, res) => {
    try {
        myId = req.params.id;
        product = await Product.findOne({ _id: myId });
        res.status(200).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Update Product
router.put('/update/:id', async (req, res) => {
    try {
        id = req.params.id;
        newData = req.body;

        updatedProduct = await Product.findByIdAndUpdate({ _id: id }, newData);
        res.status(200).send(updatedProduct);
    } catch (error) {
        res.status(400).send(error)
    }
});

// Delete product
router.delete('/delete/:id', async (req, res) => {
    try {
        id = req.params.id;
        deletedProduct = await Product.findOneAndDelete({ _id: id });
        res.status(200).send(deletedProduct);
    } catch (error) {
        res.status(400).send(error)
    }
});

module.exports = router;