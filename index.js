import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4200;

// mongoose connection
// connecting to local DB -> would be different if hosted elsewhere (cloud)
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
	useMongoClient: true
});

// body-parser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// ES6 syntax = `backtick(left of number 1, far left) ${enter something here}`
app.get('/', (req, res) =>
	res.send(`Node & express server running on port ${PORT}`)
);

app.listen(PORT, () => 
	console.log(`your server is listening on port ${PORT}`)
);