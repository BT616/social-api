const router = require('express').Router()
const apiRoutes = require('./api')
//^^^^  thisimports all api routes
router.use('/api',apiRoutes);
//^^ prefix
router.use((req,res)=> {res.send(404).send('<h1>wrong route buddy</h1>')});

module.exports = router;