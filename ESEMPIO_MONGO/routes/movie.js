var express = require('express');
var router = express.Router();

const MongoClient = require('mongodb').MongoClient; //Importo la libreria mongodb

/* GET users listing. */
router.get('/movie_from_title/:title', function (req, res, next) {
    console.log(req.params); //Leggo i parametri passati all'url
    title = req.params.title;
    const uri = "mongodb+srv://andrewjm:andrewko08@cluster0.glqtn.mongodb.net/Cluster0?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(err => {
        const collection = client.db("sample_mflix").collection("movies"); //Mi connetto alla collection movies
        // perform actions on the collection object
        collection.find({ 'title': `${title}` }).toArray((err, result) => {
        if (err) console.log(err.message); //Se c'è qualche errore lo stampo
        else res.send(result);
        client.close(); //Quando ho terminato la find chiudo la sessione con il db
        }); //Eseguo la query e passo una funzione di callback


    });
});
module.exports = router;