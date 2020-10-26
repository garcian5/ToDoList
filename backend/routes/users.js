/**
 * User routes
 * */

// we need the express router because this is the route that we're creating
const router = require('express').Router();
// we're also going to need the mongoose model that we created.
let User = require('../models/user.model');

// first route
// first endpoint that handles incoming http get requests on the /users url path
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// second route endpoint handles http post requests
router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({
        username
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;