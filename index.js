const express = require('express');
const app = express();

app.use(express.json());

// Sample initial data (you can use a database in a real-world scenario)
let contacts = [
    {
        id: 1,
        firstName: 'Abiyyu',
        lastName: 'Ihsan',
        numberPhone: '081386387821',
        address: 'Jakarta Timur',
    },
    {
        id: 2,
        firstName: 'Ihsan',
        lastName: 'Abiyyu',
        numberPhone: '081386387821',
        address: 'Jakarta Timur',
    },
];

// Create a new contact
app.post('/contacts', (req, res) => {
    const newContact = req.body;
    newContact.id = contacts.length + 1;
    contacts.push(newContact);
    res.json(newContact);
});

// Read all contacts
app.get('/contacts', (req, res) => {
    res.json(contacts);
});

// Read a single contact by ID
app.get('/contacts/:id', (req, res) => {
    const contactId = parseInt(req.params.id);
    const contact = contacts.find((contact) => contact.id === contactId);
    if (!contact) {
        res.status(404).json({ error: 'Contact not found' });
    } else {
        res.json(contact);
    }
});

// Update a contact by ID
app.put('/contacts/:id', (req, res) => {
    const contactId = parseInt(req.params.id);
    const updatedContact = req.body;
    const index = contacts.findIndex((contact) => contact.id === contactId);
    if (index === -1) {
        res.status(404).json({ error: 'Contact not found' });
    } else {
        contacts[index] = { ...contacts[index], ...updatedContact };
        res.json(contacts[index]);
    }
});

// Delete a contact by ID
app.delete('/contacts/:id', (req, res) => {
    const contactId = parseInt(req.params.id);
    const index = contacts.findIndex((contact) => contact.id === contactId);
    if (index === -1) {
        res.status(404).json({ error: 'Contact not found' });
    } else {
        const deletedContact = contacts.splice(index, 1);
        res.json(deletedContact[0]);
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
