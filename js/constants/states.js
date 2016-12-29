var app = angular.module('ngContact');

app.constant('STATES_LIST', {
    states : [
        {
            "name": "Alabama",
            "abbreviation": "AL"
        },
        {
            "name": "Alaska",
            "abbreviation": "AK"
        },
        {
            "name": "American Samoa",
            "abbreviation": "AS"
        },
// etc...etc
    ]
});

app.component('contactComponent', {
  controller : function(STATES_LIST) {},
  // etc..etc
});
