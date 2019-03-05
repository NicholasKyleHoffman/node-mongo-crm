import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4200;

routes(app);

// ES6 syntax = `backtick(left of number 1, far left) ${enter something here}`
app.get('/', (req, res) =>
	res.send(`Node & express server running on port ${PORT}`)
);

app.listen(PORT, () => 
	console.log(`your server is listening on port ${PORT}`)
);