import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

// create contact collection & leverage schema from crmModel
const Contact = mongoose.model('Contact', ContactSchema);

// recreate some req/res routes from crmRoutes.js & pass
// that controller to POST req
export const addNewContact = (req, res) => {
	let newContact = new Contact(req.body);

	newContact.save((err, contact) => {
		if (err) {
			res.send(err);
		}
		res.json(contact);
	});
};

