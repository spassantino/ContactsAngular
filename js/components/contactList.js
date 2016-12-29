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
  `,
bindings : {
  data : "=",
  showComplete : "<"
}
});
