import { addNewContact, getContacts, getContactWithID } from '../controllers/crmController' 

// Define API endpoints in crmRoutes.js (this)

const routes = (app) => {
	app.route('/contact')
	.get((req, res, next) => {
		// middleware here using template strings ES6 syntax
		// returns original URL that sent request
		console.log(`Request from: ${req.originalUrl}`)
		console.log(`Request type: ${req.method}`)
		// exit middleware & move onto next function
		next();
	}, getContacts)

	// POST endpoint
	// Reworked using addNewContact controller logic
	.post(addNewContact);

	// GET SPECIFIC contact endpoint
	app.route('/contact/:contactId')
	.get(getContactWithID)

	// PUT request endpoint
	.put((req, res) => 
	res.send('PUT request successful'))

	// DELETE request endpoint
	.delete((req, res) =>
	res.send('DELETE request exitoso'));
}

// ES6 syntax
export default routes;
