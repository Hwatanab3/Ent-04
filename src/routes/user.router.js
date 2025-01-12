const { getAll, create, getOne, remove, update, login, logged } = require('../controllers/user.controllers');
const { add, removeAdd } = require('../controllers/favorite.controllers')
const express = require('express');
const { verifyJwt } = require('../utils/verifyJWT');

const routerUser = express.Router();

routerUser.route('/')
    .get(verifyJwt, getAll)
    .post(create);

routerUser.route('/login')
    .post(login);

routerUser.route('/me')
    .get(verifyJwt, logged)

routerUser.route('/:id')
    .get(verifyJwt, getOne)
    .delete(verifyJwt, remove)
    .put(verifyJwt, update);

routerUser.route('/:id/post')
    .post(verifyJwt, add)

routerUser.route('/:id/post/:postId')
    .delete(verifyJwt, removeAdd);

module.exports = routerUser;