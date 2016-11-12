import Ember from 'ember';

const {
  get,
  set
} = Ember;

export default Ember.Component.extend({

  places: Ember.inject.service(),

  location: Ember.inject.service(),

  store: Ember.inject.service(),

  results: null,

  selectedPlace: null,

  actions: {

    selectPlace(place) {
      set(this, 'selectedPlace', place);
    },

    findPlacesNearby() {

      set(this, 'results', this.get('store').findAll('place'));


      // get(this, 'location').getCurrentPosition()
      //   .then(coords => {
      //     return get(this, 'places').findByLocation(coords);
      //   })
      //   .then(places => {
      //     set(this, 'results', places)
      //   });
    },

    findPlaceByName(name) {

    }

  }

});
