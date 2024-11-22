const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.tags=['Hello world']
    res.send("Web services Project-Jessica Terry");
});

router.use('/contacts', require('./contacts'));

module.exports = router;
