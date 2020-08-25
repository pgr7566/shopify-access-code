const express=require('express');
const app=express();
const bodyParser = require('body-parser');
const config=require('./config/config.json');


// Parse request of content-type - application/json
app.use( bodyParser.json() );

app.use('/api', require('./routes/route'));

/* app.get('/', (req,res) => {
    console.log('this is get');
  return   res.json( {
		status: "OK"
	} );
}) */

app.listen(config.applicationport ,function () {
    console.log('App is listening on 3000...');
})