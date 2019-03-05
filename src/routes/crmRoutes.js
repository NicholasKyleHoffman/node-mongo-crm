import { addNewContact, getContacts } from '../controllers/crmController' 

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

	// Reworked using addNewContact controller logic
	// POST endpoint
	.post(addNewContact);

	app.route('/contact/:contactId')
	.put((req, res) => 
	res.send('PUT request successful'))

	.delete((req, res) =>
	res.send('DELETE request exitoso'));
}

// ES6 syntax
export default routes;