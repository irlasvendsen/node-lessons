const express = require('express');
const router = express.Router();
const Place = require('../models/places.model');

router.get('/place', (req, res) => {res.send('place')});

router.route('/add').post( (req, res) => {
    const newPlace = new Place(req.body)
    newPlace.save().then(place => {
        res.json('Place added with success!'+ place);
        }, error => {
            res.status(400).send('unable to create a new place');
        });
});

router.route('/delete').delete((req, res) => {
    console.log('inicializing deletion...');
    Place.deleteOne(req.body, (error) => {
        if (error){
            console.log('Error'+error);
            res.status(400).send('Error trying to delete an item');
        } 
    })
    res.json('Item deleted successfull');
});

router.get('/home/name/:placeName', async (req, res) => {
    try {
       const placeName = req.params.placeName;
       console.log('looking for the place: '+req.params.placeName);
    
      await Place.find({'name': placeName});
      res.send(places);
    } catch(error) {
        next(error);
    }
});

router.route('/alter').patch((req, res)=>{
    const placeName = req.body.name;
    console.log('looking for the place: '+placeName);
    
    Place.findOne({'name': placeName}, (err, place) => {
        if(err) {
            console.log('error'+err);
            res.status(400).send(err);
        }
        console.log(place);
        if(place) {
            place.visited = req.body.visited;
            console.log(place);
            place.save( (err) => {
                if (err) return res.status(400).send(err); // saved!
             });
             res.send('Upadate Successfull'+place);
        }
        //res.status(400).send('place not found');
        
      });
})

module.exports = router;