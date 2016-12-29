angular.module("ngContacts")
.component('contactComponent', {
  controller : function(contactService) {
    var vm = this;
    vm.newContact = "";
    vm.contacts = contactService.getContacts();
    vm.addContact = function(t){
      contactService.createContact(t);
      vm.newContact = "";
    };
  },
template :
          `
          <h1>
            ngContacts
          </h1>
          <input type="text" placeholder="First Name" ng-model="$ctrl.newContact" />
          <input type="text" placeholder="Last Name" ng-model="$ctrl.newContact" />
          <input type="text" placeholder= "Email" ng-model="$ctrl.newContact" />
          <input type="text" placeholder= "Phone" ng-model="$ctrl.newContact" />
          <input type="text" placeholder= "Street" ng-model="$ctrl.newContact" />
          <input type="text" placeholder= "City" ng-model="$ctrl.newContact" />
          <input type="text" placeholder= "Zip" ng-model="$ctrl.newContact" />
          <button ng-click="$ctrl.addContact($ctrl.newContact);">Create</button>
          <contact-list data="$ctrl.contacts" show-complete="$ctrl.showComplete"></contact-list>
          `
});
