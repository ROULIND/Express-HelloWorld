const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get('/', function (req, res) {
   res.send('Hello World - sucessfully deployed on Heroku');
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));

