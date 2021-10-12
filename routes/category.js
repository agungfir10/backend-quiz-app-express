const express = require('express');
const categories = require('../data/categories');
const category = require('../data/categories');
const router = express.Router();

router
  .route('/categories')
  .get((req, res) => {
    res.status(200).json({
      status: 200,
      message: 'success',
      data: categories,
    });
  })
  .post((req, res) => {
    const { category } = req.body;
    const foundCategory = categories.findIndex(
      (e) => e.toLowerCase() == category.toLowerCase()
    );
    if (foundCategory === -1) {
      if (category !== '') {
        categories.push(category);

        res.status(200).json({
          status: 200,
          message: 'success add category',
        });
      } else {
        res.status(400).json({
          status: 200,
          message: "category can't be empty",
        });
      }
    } else {
      res.status(400).json({
        status: 400,
        message: 'category already exists',
      });
    }
  });

module.exports = router;
