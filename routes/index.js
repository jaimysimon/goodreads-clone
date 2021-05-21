const express = require('express');

const router = express.Router();

//Login
router.get ('/',(req,res)=>
{
    res.render('login')


})

//Home
router.get ('/home',(req,res)=>
{
    res.render('home');
})
module.exports = router;