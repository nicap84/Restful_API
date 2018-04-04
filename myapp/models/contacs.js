/*var mongoose = require ('mongoose');

var contactSchema = new mongoose.Schema ({
    primarycontactnumber: {type: String, index:{unique: true}},
    firstname: String,
    lastname: String,
    title: String,
    company: String,
    jobtitle: String,
    othercontactnumbers: [String],
    primarymailadress: String,
    emailadresses: [String],
    groups: [String]
});

var contact = mongoose.model('Contact', contactSchema);

var daniel_smith = new contact({
    "firstname": "Daniel",
    "lastname": "Smith",
    "title": "Mr.",
    "company": "Amazing company",
    "jobtitle": "Developer",
    "primarycontactnumber": "666666666",
    "othercontactnumbers": ["678678678", "567567567"],
    "primarymailadress": "daniel@asd.com",
    "emailadresses": ["smith@asd.com"],
    "groups": ["Dev", "Family"]
});

var db = mongoose.connection;
mongoose.connect = ('mongodb://localhost/contacts');

daniel_smith.save(function(error) {
    if (error)
        console.log('Error while saving contact Daniel Smith');
    else{
        daniel_smith.save();
        console.log('Contact for Daniel Smith has been successfully stored');
    }    
});

contact.find({groups: 'Dev', title: 'Mr.'}, function (error, result){
    if (error)
        console.error (error);
    else    
        console.dir(result);
});*/
