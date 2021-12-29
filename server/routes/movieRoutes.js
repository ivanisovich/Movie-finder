const { Router } = require('express');
const client = require('../http-client');
const catchError = require('../utils/catchError');

const router = Router();


router.get(
  '/api/movie/:id',
  catchError(async (req, res) => {
    const { id } = req.params;
    const options = req.query;
    const movie = await client.get(`/movie/${id}`, options);
    res.json(movie);
  })
);

router.get(
  '/api/discover/movie',
  catchError(async (req, res) => {
    const options = req.query;
    const movies = await client.get('/discover/movie', options);
    res.json(movies);
  })
);

module.exports = router;
