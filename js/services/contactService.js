angular.module("ngContacts")
.factory('contactService', function(){
  var contacts = [
    {firstname:"Forrest", lastname:"Green", email:"forgreen@gmail.com", phone:"555-555-5555", address:
    {       street:"246 South Paw Ln", city:"Schuyler", state:"VA", zip:"22969"    }
  },
    {firstname:"Paige", lastname:"Turner", email:"turnpaige@hotmail.com", phone:"545-553-3555", address:
    {       street:"141 Olive St", city:"Nashville", state:"TN", zip:"37115"    }
  },
    {firstname:"Russell", lastname:"Sprout", email:"rsprout@yahoo.com", phone:"545-523-3545", address:
    {       street:"2340 Buckley Rd", city:"Nashville", state:"TN", zip:"37204"    }
  },
    {firstname:"Sue", lastname:"Flay", email:"suflay123209@earthlink.com", phone:"525-553-3539", address:
    {       street:"23 Pockee St", city:"Columbus", state:"OH", zip:"43085"    }
  },
    {firstname:"Chandler", lastname:"Waitts", email:"4chanwaitts@yahoo.com", phone:"545-553-3559", address:
    {       street:"141 Olive St", city:"Nashville", state:"TN", zip:"37115"    }
  },
  ];
      var getContacts= function(){
        return contacts;
      }
      var createContact = function(fn, ln, em, ph, str, ci, stat, zi){
        var newContact = {firstname:fn , lastname:ln, email:em, phone:ph, address: {
          street:str, city:ci, state:stat, zip:zi    }
      };
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
