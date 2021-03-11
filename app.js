//impost package we will using
const express = require('express');

const app = express();

const port = process.env.PORT || 6060;


app.listen(port, () => {
    console.log(`server is running on ${port}`);
});