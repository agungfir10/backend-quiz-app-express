const express = require('express');
const router = express.Router();

router
  .route('/articles')
  .get((req, res) => {
    artilesFormatted = [];
    articles.forEach((article) => {
      const articleFormatted = {
        id: article.id,
        title: article.title,
        body: article.body,
        createdAt: article.createdAt,
        updatedAt: article.updatedAt,
      };
      if (article.body) {
        articleFormatted.body = article.body.replace(/(<([^>]+)>)/gi, '');
      }

      artilesFormatted.push(articleFormatted);
    });
    res.json({
      status: 200,
      message: 'success',
      data: artilesFormatted,
    });
  })
  .post((req, res) => {
    const { title, body, category } = req.body;
    const id = articles.length + 1;
    const date = new Date();
    const createdAt = date;
    const updatedAt = date;
    const article = {
      id,
      title,
      body,
      category,
      createdAt,
      updatedAt,
    };
    articles.push(article);
    res.status(200).send({
      status: 200,
      message: 'Success add article',
      data: article,
    });
  });

router
  .route('/articles/:id')
  .get((req, res) => {
    const { id } = req.params;
    const findID = articles.findIndex((e) => e.id == id);

    if (findID !== -1) {
      res.status(200).json({
        status: 200,
        message: 'success',
        data: articles[findID],
      });
    } else {
      res.status(400).json({
        status: 400,
        message: 'Article not found',
      });
    }
  })
  .delete((req, res) => {
    const { id } = req.params;

    const findID = articles.findIndex((e) => e.id == id);
    if (findID === -1) {
      res.status(400).json({
        status: 400,
        message: 'Article not found',
      });
    } else {
      articles.splice(findID, findID + 1);
      res.status(200).json({
        status: 200,
        message: 'Delete article success',
      });
    }
  })
  .put((req, res) => {
    const { id } = req.params;
    const { title, body, category } = req.body;
    const updatedAt = new Date();

    const foundID = articles.findIndex((e) => e.id == id);
    if (foundID !== -1) {
      articles[foundID].title = title;
      articles[foundID].body = body;
      articles[foundID].category = category;
      articles[foundID].updatedAt = updatedAt;

      res.status(200).json({
        status: 200,
        message: 'success updated',
        data: articles[foundID],
      });
    }
  });
module.exports = router;
