angular.module("ngContacts").
component('appComponent', {
  controller : function(){
    var vm = this;
  },
  template : `
    <contact-component></contact-component>
  `
});
