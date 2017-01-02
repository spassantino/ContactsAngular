angular.module("ngContacts")
.component('contactComponent', {
  controller : function(contactService, STATES_LIST) {
    var vm = this;
    vm.newFirstname = "";
    vm.newLastname = "";
    vm.newEmail = "";
    vm.newPhone = "";
    vm.newAddressStreet = "";
    vm.newAddressCity = "";
    vm.newAddressZip = "";
    console.log(STATES_LIST.states);
    vm.states= STATES_LIST.states;
    console.log(vm.states);
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
          <input type="text" placeholder="First Name" ng-model="$ctrl.newFirstname" /><br>
          <input type="text" placeholder="Last Name" ng-model="$ctrl.newLastname" /><br>
          <input type="text" placeholder= "Email" ng-model="$ctrl.newEmail" /><br>
          <input type="text" placeholder= "Phone" ng-model="$ctrl.newPhone" /><br>
          <input type="text" placeholder= "Street" ng-model="$ctrl.newAddressStreet" /><br>
          <input type="text" placeholder= "City" ng-model="$ctrl.newAddressCity" /><br>
          <select ng-model="selectedState" ng-options="state.abbreviation for state in $ctrl.states track by state.name">
          </select><br>
          <input type="text" placeholder= "Zip" ng-model="$ctrl.newAddressZip" /><br>
          <button ng-click="$ctrl.addContact($ctrl.newContact);">Create</button>
          <contact-list data="$ctrl.contacts"></contact-list>
          `
});
