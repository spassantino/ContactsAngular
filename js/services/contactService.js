angular.module("ngContacts")
.factory('contactService', function(){
  var contacts = [
    {firstname:"Sarah", lastname:"P", email:"sp@gmail.com", phone:"555-5555", address:
    {       street:"246 South Paw Ln", city:"Aurora", state:"CO", zip:"80010"    }
  },
    {firstname:"Megan", lastname:"V", email:"megone@hotmail.com", phone:"555-3555", address:
    {       street:"141 Olive St", city:"Denver", state:"CO", zip:"80207"    }
  },
  ];
      var getContacts= function(){
        return contacts;
      }
      var createContact = function(fn, ln, em, ph, str, ci, stat, zi){
        // var id1 = contacts.length + 1;
        var newContact = {firstname:fn , lastname:ln, email:em, phone:ph, address:
        {       street:str, city:ci, state:stat, zip:zi    }
      }
      console.log(newContact);
        contacts.push(newContact);
      }
      var deleteContact = function(dContact){
        var index = contacts.indexOf(dContact);
        contacts.splice(index, 1);
      }
      return {
        getContacts : getContacts,
        createContact : createContact,
        deleteContact : deleteContact
      };
    });
