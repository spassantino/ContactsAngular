angular.module("ngContacts")
.component('contactList', {
  controller : function(contactService) {
    var vm = this;
    vm.remove = function(t){
      contactService.deleteContact(t);
      console.log("in remove");
    }
  },
  template :
  `
  <div ng-repeat="contact in $ctrl.data">
  <h2>{{contact.firstname}} {{contact.lastname}}</h2>
  <h4>{{contact.email}}</h4>
  <h4>{{contact.phone}}</h4>
  <h4>{{contact.address.street}}</h4>
  <h4>{{contact.address.city}} {{contact.address.state}} {{contact.address.zip}}</h4>

  </div>
  `,
bindings : {
  data : "=",
}
});
