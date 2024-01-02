const fs = require('fs');
const { validateHeaderName } = require('http');

const data = JSON.parse(fs.readFileSync('./dev-data/data.json'));

exports.checkId = (req, res, next, val) => {
  console.log(`data length is  ${data.length}`);
  if (!data.find((el) => el.id === val * 1)) {
    return res.status(400).json({
      status: 'fail',
      message: 'The id is not valid!',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json(data);
};

exports.getTour = (req, res) => {
  const singleRow = data.find((el) => el.id === req.params.id * 1);
  res.status(200).json(singleRow);
};

exports.createTour = (req, res) => {
  res.status(201).json(JSON.parse(data));
};

exports.updateTour = (req, res) => {
  res.status(200).json(JSON.parse(data));
};

exports.deleteTour = (req, res) => {
  res.status(204).json(JSON.parse(data));
};
