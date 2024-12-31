const express = require('express');
const { Product } = require('../models/Product');
const router = express.Router();
const mongoose = require('mongoose');


router.get(`/`, async (req, res) => {
    try {
        const products = await Product.find();
        if (!products) {
            return res.status(404).json({ success: false, message: 'No products found' });
        }
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/search', async (req, res) => {
    try {
        const { q, category } = req.query;
        const query = {};
        if (q) {
            query.name = { $regex: q, $options: 'i' };
        }
        if (category) {
            query.category = category;
        }
        const products = await Product.find(query).select('-__v');
        res.json(products);
    } catch (error) {
        res.status.apply(500).json({ error: 'Error, Try Again!' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findbyId(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching product' });
    }
});

router.post(`/`, async (req, res) => {
    try {
        let product = new Product({
            name: req.body.name,
            image: req.body.image,
            description: req.body.description,
            rating: req.body.rating,
            price: req.body.price,
            category: req.body.category,
            countInStock: req.body.countInStock,
            dateCreated: req.body.dateCreated,
        })
        product = await product.save();
        if (!product) {
            return res.status(500).json({ success: false, message: 'The product cannot be created!' });
        }
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

const validateP = (req, res, next) => {
    const { name, price } = req.body;
    if (!name || !price) {
      return res.status(400).json({ error: 'Name and price are required' });
    }
    next();
  };
  
router.put('/:id', validateP, async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, 
            {
                name: req.body.name,
                image: req.body.image,
                description: req.body.description,
                rating: req.body.rating,
                price: req.body.price,
                category: req.body.category,
                countInStock: req.body.countInStock,
                dateCreated: req.body.dateCreated,
            },
            { new: true }
        );
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: 'Error updating product' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ success: false, message: 'Product not found!' });
        }
        res.status(200).json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

router.get('/category/:category',)

module.exports= router;