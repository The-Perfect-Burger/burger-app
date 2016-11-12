import Ember from 'ember';
import injectService from 'ember-service/inject';

export default Ember.Route.extend({

	ajax: injectService(),

	beforeModel(transition) {
		if (!this.get('session.isAuthenticated')) {
			this.transitionTo('index');
		}
		// if (transition.targetName === 'index') {
		// 	this.transitionTo('reviews');
		// }
  },

  actions: {

		login() {
			var provider = window.facebookConnectPlugin ?
				'facebook-cordova' :
				'facebook-connect';

			// return this.get('ajax').post('/users/login', {
			// 	data: {
	    //     data: {
	    //       type: 'users',
	    //       attributes: {}
	    //     }
	    //   }
			// }).then(result => {
			// 	alert(`Respnse from lux: ${Object.keys(result)}`);
			// }).catch(error => {
			// 	alert(`Erro from lux: ${error}`);
			// });

			this.get('session').open('facebook-cordova').then(result => {
				var session = this.get('session');
				if (session.attemptedTransition) {
					session.attemptedTransition.retry();
				} else {
					this.transitionTo('reviews');
				}
			}).catch(error => {
				alert(error);
			});
		},

		logout() {
      this.get('session').close()
        .then(() => {
					alert("logout");
					this.transitionTo('index');
				});
    },

		accessDenied(transition) {
			this.transitionTo('index');
		},







    startPlaceSearch() {
      this.controllerFor('application').set('placeSearchIsActive', true);
    },

		startReview(item) {
			this.transitionTo('reviews.create', item);
		},

    cancelPlaceSearch() {
      this.controllerFor('application').set('placeSearchIsActive', false);
    },

    tried(item) {
      alert('Tried!');
    }

  }

});
