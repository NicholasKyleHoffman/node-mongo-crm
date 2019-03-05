import express from 'express';

const app = express();
const PORT = 4200;

// es6 syntax = `backtick ${enter something here}`
app.get('/', (req, res) =>
	res.send(`Node & express server running on port ${PORT}`)
);

app.listen(PORT, () => 
	console.log(`your server is listening on port ${PORT}`)
);