import Ember from 'ember';

export default Ember.Route.extend({

  places: Ember.inject.service(),

  // model(params) {
	// 	return this.store.findRecord('item', params.burger_id)
  //     .catch(error => {
	// 		//alert(error);
	// 	  });
	// },

});
