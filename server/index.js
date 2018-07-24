const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send({
    hi: 'there',
    bye: 'buddy'
  });
});

app.listen(PORT);

console.log(`Listening on ${PORT}`);


//deployment insturctions: use heroku
//heroku login if needed. Don't think it is.
//heroku create
//git remote add heroku {link}
//git push heroku master

//additional deployments: git push heroku master
