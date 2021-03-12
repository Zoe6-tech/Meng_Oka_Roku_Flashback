const express = require('express');
const router = express.Router();

//this is where would add our middleware
const{createProxyMiddleware} = require('http-proxy-middleware');

//middleware is connnect client and server, roku server 5000
//curl localhost:5000/api
//curl localhost:5000/api/movies/1
router.use('/api', createProxyMiddleware({
        target : 'http://localhost:5000',
        header:{
            accept:'application/json, application/x-www-form-urlencoded'
        },
        changeOrigin:true
}))

// http://localhost:5050/
router.get('/', (req, res) => {
    res.render('index', {message :"Trending Now"})
    //res.send('hit the main route');
})
//other routes you might use put here
router.get('/login', (req, res) => {
    res.render('login', {LoginMessage :"LOG IN"})
    //res.send('hit the main route');
})

router.get('/signup', (req, res) => {
    res.render('signup', {SignUpMessage :"SIGN UP"})
    //res.send('hit the main route');
})

router.get('/adult', (req, res) => {
    res.render('adult', {adultMessage :"Welcome to adult page"})
    //res.send('hit the main route');
})

router.get('/childern', (req, res) => {
    res.render('childern', {adultMessage :"Welcome to childern page"})
    //res.send('hit the main route');
})


//handle 404 error 
router.use((req, res) => {
    res.status(404);
    res.render("error", {
        layout:"errorLayout.hbs", errormessage: `You have lost your way, "${req.url}" does not exist`});
})

module.exports = router;