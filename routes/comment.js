const express = require('express');
const router = express.Router();
const storyCtrl = require('../controllers/comment');

// comments
router.get('/story/comment/:id', storyCtrl.commentDisplay);
router.post('/story/comment/:id', storyCtrl.commentCreate);
router.get('/story/comment/:id/view', storyCtrl.commentView);

module.exports = router;


