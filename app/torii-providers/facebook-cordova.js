import Ember from "ember";

export default Ember.Object.extend({
  // create a new authorization
  open: function(options) {
    return new Ember.RSVP.Promise(function(resolve, reject){
      facebookConnectPlugin.login(["email", "public_profile"],
        function(response) { Ember.run(null, resolve, response.authResponse); },
        function(response) { Ember.run(null, reject, response.status); });
    });
  }
});
