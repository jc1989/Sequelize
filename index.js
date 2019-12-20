const express = require("express");
const app = express();
const models = require('./models');
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//get endpoint for artists, songs and albums
//get id for artists and id for album and songs
app.get("/artist", function (req, response){
    console.log(artists)
    models.artist.findAll().then(function(artists){
        response.send(artists);
    });
});
//then post for artists, songs and albums
app.post("/artist", function(req, response){
    console.log("creating artists")
    console.log(req.body);
    models.artist.create({name: req.body.name, dob: req.body.dob})
    .then(function(artist){
        response.send("new artist created with id: " + artist.id);
    });
});

app.listen(3000, function(){
    console.log('server listening on port 3000');
})