const express = require('express');
const router = express.Router();
const Place = require('../models/places.model');

router.get('/place', async (req, res, next) => { 
    try{
        const allPlaces = await Place.find({});
        res.json(allPlaces);
    } catch(error){
        next(error);
    }
});

router.route('/add').post( async (req, res, next) => {
    try {
        const newPlace = new Place(req.body)
        const place = await newPlace.save();
        res.json(place);
           
    } catch(error) {
        next(error);
    }
    
});

router.route('/delete').delete( async (req, res, next) => {
    try {
        console.log('inicializing deletion...');
        const deletePlace = await Place.deleteOne(req.body);
        res.json(deletePlace);
    } catch(error) {
        next(error);
    }
});

router.get('/home/name/:placeName', async (req, res, next) => {
    try {
    const placeName = req.params.placeName;
    console.log('looking for the place: '+req.params.placeName);
    
    const place = await Place.find({'name': placeName});
      res.json(place);
    } catch(error) {
        next(error);
    }
});

router.route('/alter').patch( async (req, res, next) => {
    try {
        const placeName = req.body.name;
        console.log('looking for the place: '+placeName);
        
        const place = await Place.findOne({'name': placeName});
        if(place) {
            place.visited = req.body.visited;
            console.log(place);
            await place.save();
            res.json(place);
        }
    } catch(error) {
        next(error);
    }
})

module.exports = router;