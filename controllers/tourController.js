const fs = require('fs');

const data = fs.readFileSync('./dev-data/data.json');

exports.getAllTours = (req, res) => {
  res.status(200).json(JSON.parse(data));
};

exports.getTour = (req, res) => {
  res.status(200).json(JSON.parse(data));
};

exports.createTour = (req, res) => {
  res.status(200).json(JSON.parse(data));
};

exports.updateTour = (req, res) => {
  res.status(200).json(JSON.parse(data));
};

exports.deleteTour = (req, res) => {
  res.status(200).json(JSON.parse(data));
};
