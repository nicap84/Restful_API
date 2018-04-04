/*exports.remove = function (model, _primarycontactnumber, response) {
    console.log ('Delete contact with primary number: ' + _primarycontactnumber);
    model.findOne({primarycontactnumber: _primarycontactnumber}, function (error, data){    
        if (error){
            console.log ('error');
            if (response != null){
                response.writeHead(500, {'Content-type' : 'text/plain'});
                response.end('Internal server error');
            }
            return;
        } else{
            if (!data){
                console.log ('not found');
                if (response != mull) {
                    response.writeHead(400, {'Content-Type' : 'test/plain'});
                    response.end ('Not found');
                }
                return;
            } else {
                data.remove(function(error) {
                    if (!error)
                        data.remove; 
                    else    
                        console.log('error'); 
                });
                if (response != null)
                    response.send('Deleted');
                return;
            }
        }
    });     
}

exports.update = function (model, resquesBody, response){
    var primarynumber = request.body.primarycontactnumber;
    model.findOne({primarycontactnumber : primarynumber}, function (error, data) {
        if (error){
            console.log ('error');
            if (response != null){
                response.writeHead (500, {'Content-type' : 'text/plain'});
                response.end('Internal server error');
            }
            return;
        } else{
            var contact = toContact (requestBody, model);
            if (!data){
                console.log ('Contact with primary number: ' + primarynumber + 'does not exist. The contact will be created');
                contact.save (function (error) {
                    if (!error)
                        contact.save();
                });
                if (response != null){
                    response.writeHead(201, {'Content-type' : 'text/plain'});
                    response.end ('Created');
                }
                return;
            }
            //populate the document with the updated value
            data.firstname = contact.firstname;
            data.lastname = contact.lastname;
            data.title = contact.title;
            data.company = contact.company;
            data.jobtitle = contact.jobtitle;
            data.primarycontactnumber = contact.primarycontactnumber;
            data.othercontactnumbers = contact.othercontactnumbers;
            data.emailaddresses = contact.emailaddresses;
            data.primaryemailaddress = contact.primaryemailaddress;
            data.groups = contact.groups;
            //now save
            data.save(function (error){
                if (!error){
                    console.log('Successfully updated contact with primary number: ' + primarynumber);
                    data.save();
                }else
                    console.log('error on save');
            });
            if (response != null)
                response.send('Updated');
        }        
    });
}

exports.create = function (model, requestBody, response){
    var contact = toContact(requestBody, response);
    var primarynumber = requestBody.primarycontactnumber;
    contact.save(function (error){
        if (!error)
            contact.save();
        else {
            console.log('Checking if contact saving number failed due to already existing primary number: ' + primarynumber);
            model.findOne({primarycontactnumber : primarynumber}, function (error, data) {
                if (error){
                    console.log ('error');
                    if (response != null){
                        response.writeHead(500, {'Content-type' : 'text/plain'});
                        response.end('Internal server error');
                    }
                    return;
                } else {
                    var contact = toContact(requestBody, model);
                    if (!data){
                        console.log('The contact does not exist. It will be created');
                        contact.save(function (error){
                            if (!error){
                                contact.save();
                            } else
                                console.log('error');
                        });
                        if (response != null){
                            response.writeHead(201, {'Content-type' : 'text/plain'});
                            response.end('Created');
                        }
                        return;
                    } else {
                        console.log('Updating contact with primary contact number: ' + primarynumber);
                        data.firstname = contact.firstname;
                        data.lastname = contact.lastname;
                        data.title = contact.title;
                        data.company = contact.company;
                        data.jobtitle = contact.jobtitle;
                        data.primarycontactnumber = contact.primarycontactnumber;
                        data.othercontactnumbers = contact.othercontactnumbers;
                        data.emailaddresses = contact.emailaddresses;
                        data.primaryemailaddress = contact.primaryemailaddress;
                        data.groups = contact.groups;

                        data.save(function (error){
                            if (!error){
                                console.log('Successfully updated contact with primary contact number: ' + primarynumber);
                                data.save();
                            }else{
                                console.log('error while saving contact with primary contact number: ' + primarynumber);
                                console.log (error);
                            }    
                        });
                    }
                }
            });
        }
    });
}

function toContact(body, contact){
    return new contact({
        firstname : body.firstname,
        lastname : body.lastname,
        title : body.title,
        company : body.company,
        jobtitle : body.jobtitle, 
        primarycontactnumber : body.primarycontactnumber,
        othercontactnumbers : body.othercontactnumbers,
        emailaddresses : body.emailaddresses,
        primaryemailaddress : body.primaryemailaddress,
        groups : body.groups
    });
}*/

exports.findByNumber = function (model, _primarycontactnumber, response){
    model.findOne ({primarycontactnumber : _primarycontactnumber}, function (error, result){
        if (error){
            console.log (error);
            response.writeHead(500, {'Content-type' : 'text/plain'});
            response.end('Internal server error');
            return;
        } else {
            if (!result){
                if (response != null){
                    response.writeHead (404, {'Content-type' : 'text/plain'});
                    response.end ('Not found');
                }
                return;
            } 
            if (response != null){
                response.setHeader ('Content-Type', 'application/json');
                response.end(result);
            }
            console.log(result);
        }
    });
}

exports.list = function (model, response){
    model.find ({}, function (error, result){
        console.log('find');
        if (error){
            console.log(error);
            return null;
        }
        if (response != null){
            response.setHeader ('Content-Type', 'application/json');
            response.end(JSON.stringify(result));
        }
        return JSON.stringify(result);
    });
}