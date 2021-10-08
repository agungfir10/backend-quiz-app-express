const express = require('express');
const router = express.Router();

router
  .route('/articles')
  .get((req, res) => {
    // articles.forEach((article) => {
    //   if(article.body)
    //   article.body.replace(/(<([^>]+)>)/gi, '');
    // });
    res.json({
      status: 200,
      message: 'success',
      data: articles,
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
  })
  .put((req, res) => {
    const { title, body, category } = req.body;
    const date = new Date();
    const updatedAt = date;
    res.send('PUT /api/articles/');
  });
router.delete('/articles/:id', (req, res) => {
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
});

router.get('/articles/:id', (req, res) => {
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
});
module.exports = router;
