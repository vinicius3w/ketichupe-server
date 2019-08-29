const express = require('express');
const authMiddleware = require('../middlewares/auth');

const User = require('../models/User');

const router = express.Router();

router.use(authMiddleware);

//List
router.get('/', async (req, res) => {
  const user = await User.findById(req.body);
  res.send({ user });
});

module.exports = app => app.use('/users', router);
