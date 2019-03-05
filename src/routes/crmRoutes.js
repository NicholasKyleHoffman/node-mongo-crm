// Define API endpoints in crmRoutes.js (this)

const routes = (app) => {
	app.route('/contact')
	.get((req, res) => 
	res.send('GET request successful :p'))

	.post((req, res) =>
	res.send('POST request exitoso :)'));

	app.route('/contact/:contactId')
	.put((req, res) => 
	res.send('PUT request successful'))

	.delete((req, res) =>
	res.send('DELETE request exitoso'));
}

// ES6 syntax
export default routes;