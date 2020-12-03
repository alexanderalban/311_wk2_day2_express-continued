const vehicles = require('../data/vehicles');

const list = ('/vehicles/', function (req, res) {
    res.json(vehicles)
});

const show = ('/vehicles/:id', function (req, res) {
    const vehiclesID = req.params.id;
    for (let vehicle of vehicles) {
    if (vehicle._id === parseInt(vehiclesID)) {
        res.json(vehicle)
    }
    }
});

const create = ('/vehicles/', (req, res) => {
    const newVehicle = {
      _id: vehicles.length + 1,
      year: req.body.year,
      make: req.body.make,
      model: req.body.model, 
    };
  
    vehicles.push(newVehicle);
    res.json(vehicles)
  });

  module.exports = {
    list,
    show,
    create
}