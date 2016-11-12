import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['place-search'],

  classNameBindings: ['isOpen:open'],

  isOpen: true,

  location: Ember.inject.service(),

  places: Ember.inject.service(),

  store: Ember.inject.service(),

  items: Ember.RSVP.resolve(),

  actions: {

    close() {
      this.sendAction('close');
    },

    loadItems(place) {
      this.set('items', this.get('store').query('item', {
        place: place.id
      }));
    },

    startReview(item) {
      this.send('close');
      this.sendAction('onStartReview', item);
    },

    requestLocation() {
      this.get('location').getCurrentPosition()
      .catch(error => {
        alert(`Oh shit ${error}`);
      })
      .then(coords => {
        alert(`Booya longitude:${coords.longitude} latitude:${coords.latitude}`);
      });
    }

  }

});
