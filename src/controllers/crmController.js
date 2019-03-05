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

// some req/res -> either errors or 
// responds & sends json data from contact object
export const getContacts = (req, res) => {
	Contact.find({}, (err, contact) => {
		if (err) {
			res.send(err);
		}
		res.json(contact);
	});
};

// findById is built in with mongoose
// req.params.contactId => returns 
// load Contact (collection) -> findById(request)
// err response sends err
// success responds contact with that contactId
export const getContactWithID = (req, res) => {
	Contact.findById(req.params.contactId, (err, contact) => {
		if (err) {
			res.send(err);
		}
		res.json(contact);
	});		
}

// using built in findOneAndUpdate 
export const updateContact = (req, res) => {
	Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, (err, contact) => {
		if (err) {
			res.send(err);
		}
		res.json(contact);		
	});
}
