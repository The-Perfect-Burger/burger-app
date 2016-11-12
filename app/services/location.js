import Ember from 'ember';

export default Ember.Service.extend({

  getCurrentPosition: function() {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          resolve(position.coords);
        },
        function(error) {
          alert(error.message);
        }
      );
    });
  },

});
