const express = require('express');
const router = express.Router();
const commentController = require('../Controllers/comments')

router.get('/comments', commentController.list);
router.get('/comments/:id', commentController.show);
router.post('/comments', commentController.create);


  module.exports = router