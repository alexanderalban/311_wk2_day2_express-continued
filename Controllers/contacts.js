const contacts = require('../data/contacts');

const list = ('/contacts/', function (req, res) {
    res.json(contacts)
});

const show = ('/contacts/:id', function (req, res) {
    const contactsID = req.params.id;
    for (let contact of contacts) {
    if (contact._id === parseInt(contactsID)) {
        res.json(contact)
    }
    }
});

const create = ('/contacts/', (req, res) => {
    const newContact = {
      _id: contacts.length + 1,
      name: req.body.name,
      occupation: req.body.occupation,
      avatar: req.body.avatar, 
    };
  
    contacts.push(newContact);
    res.json(contacts)
  });

  module.exports = {
    list,
    show,
    create
}