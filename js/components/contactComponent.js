angular.module("ngContacts")
.component('contactComponent', {
  controller : function(contactService) {
    var vm = this;
  };
},
template :
          `
          <h1>
            ngContacts

          </h1>
          <input type="text" ng-model="$ctrl." />
          <input type="text" ng-model="$ctrl." />
          <input type="text" ng-model="$ctrl." />
          <input type="text" ng-model="$ctrl." />
          <input type="text" ng-model="$ctrl." />
          <button ng-click="$ctrl.addContact($ctrl.newContact);">Create</button>
          <contact-list data="$ctrl.contacts" show-complete="$ctrl.showComplete"></contact-list>
          `
});
