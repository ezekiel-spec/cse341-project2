const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection('movies').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createMovie = async (req, res) => {
  try {
    const movie = {
      title: req.body.title,
      director: req.body.director,
      releaseYear: req.body.releaseYear,
      genre: req.body.genre,
      rating: req.body.rating,     // Field 5
      runtime: req.body.runtime,   // Field 6
      description: req.body.description // Field 7
    };
    const response = await mongodb.getDb().db().collection('movies').insertOne(movie);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res.status(500).json('Some error occurred while creating the movie.');
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, createMovie };