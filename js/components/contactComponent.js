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
    vm.newState= "";
    vm.newAddressZip = "";
    vm.states= STATES_LIST.states;
    vm.contacts = contactService.getContacts();
    vm.addContact = function(firstname, lastname, email, phone, str, cit, stat, zi){
      contactService.createContact(firstname, lastname, email, phone, str, cit, stat, zi);
      vm.newFirstname = "";
      vm.newLastname = "";
      vm.newEmail = "";
      vm.newPhone = "";
      vm.newAddressStreet = "";
      vm.newAddressCity = "";
      vm.newState= "";
      vm.newAddressZip = "";
    };
  },
template :
          `
          <h1 class="contactClass">
            Contacts
          </h1>
          <form id="contactAdd">
          <input type="text" placeholder="First Name" ng-model="$ctrl.newFirstname" /><br>
          <input type="text" placeholder="Last Name" ng-model="$ctrl.newLastname" /><br>
          <input type="text" placeholder= "Email" ng-model="$ctrl.newEmail" /><br>
          <input type="text" placeholder= "Phone" ng-model="$ctrl.newPhone" /><br>
          <input type="text" placeholder= "Street" ng-model="$ctrl.newAddressStreet" /><br>
          <input type="text" placeholder= "City" ng-model="$ctrl.newAddressCity" /><br>
          <select ng-model="selectedState" ng-options="state.abbreviation for state in $ctrl.states track by state.name">
          </select><br>
          <input type="text" placeholder= "Zip" ng-model="$ctrl.newAddressZip" /><br>
          <button ng-click="$ctrl.addContact($ctrl.newFirstname, $ctrl.newLastname, $ctrl.newEmail, $ctrl.newPhone, $ctrl.newAddressStreet, $ctrl.newAddressCity, selectedState.name, $ctrl.newAddressZip); selectedState='$ctrl.newState'">Create</button>
          </form>
          <contact-list data="$ctrl.contacts"></contact-list>
          `
});
