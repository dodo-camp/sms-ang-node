var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var Nexmo = require('nexmo');

var usersMessages = [];

const nexmo = new Nexmo({
    apiKey: "8141ecac",
    apiSecret: "R8fOewOluEmC2nOs"
});

function getContacts() {
    let rawData = fs.readFileSync(path.join(__dirname, '../contacts.json'));
    let contacts = JSON.parse(rawData);
    return contacts;
}

router.get('/getContacts', (req, res) => {
    let data = getContacts();
    let contacts = data.contacts.map((contact) => {
        return { "name": contact.name, "code": contact.code }
    });
    res.json({ "contacts": contacts });
});

router.get('/getContactInfo/:code', (req, res) => {
    let data = getContacts();
    let contacts = data.contacts;
    let code = req.params.code;
    let contactInfo = contacts.find(contact => contact.code == code);
    res.json({ "contactInfo": contactInfo });
});

router.get('/getMessages', (req, res) => {
    res.json({ "usersMessages": usersMessages });
})

router.post('/sendMessage', (req, res) => {
    let { text, code } = req.body;
    let reciever = getContacts().contacts.find(contact => contact.code == code);
    let { name, number } = reciever;
    let realNumber = '91' + number;
    nexmo.message.sendSms(
        "Nexmo", realNumber, text,
        (err, responseData) => {
            if (err) {
                console.log(err);
                res.json({ "success": true });
            } else {
                let obj = {
                    "to": name,
                    "text": text,
                    "date": new Date().toUTCString()
                }
                usersMessages.splice(0, 0, obj);
                usersMessages.join();
                res.json({ "success": true });
            }
        }
    );
});

module.exports = router;