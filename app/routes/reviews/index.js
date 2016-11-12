import Ember from 'ember';

export default Ember.Route.extend({

  places: Ember.inject.service(),

  model() {
		return this.store.findAll('post').catch(error => {
			//alert(error);
		});
	},

	setupController(controller, model) {
    this._super(...arguments);
  }

});
