import Ember from 'ember';

export default Ember.Service.extend({

  store: Ember.inject.service(),

  findByLocation(coords) {
    return this.get('store').findAll('place');
  },

});
