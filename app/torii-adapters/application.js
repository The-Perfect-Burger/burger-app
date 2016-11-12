import Ember from 'ember';
import ENV from '../config/environment';
import injectService from 'ember-service/inject';
import RSVP from 'rsvp';


export default Ember.Object.extend({

  store: injectService(),

  ajax: injectService(),

	// The authorization argument passed in to `session.open` here is
	// the result of the `torii.open(providerName)` promise
  open(authorization) {
  	const ajax = this.get('ajax');
  	const store = this.get('store');

    // return new RSVP.Promise((resolve, reject) => {
    //   facebookConnectPlugin.getAccessToken((token) => {
    //     alert(`getAccessToken ${token} : ${authorization.accessToken}`);
    //   });
    // });



    // alert(`Hell loging ${Object.keys(authorization)}`);

    this.get('ajax').post('/users/login', {
    	data: {
        data: {
          type: 'users',
          attributes: authorization
        }
      }
		}).then(result => {
			alert(`Respnse from lux: ${Object.keys(result)}`);
		}).catch(error => {
			alert(`Erro from lux: ${error}`);
		});

  	// return new Promise((resolve, reject) => {
	  // 	facebookConnectPlugin.api('me', null,
		//   	result => {
		//   		this.get('ajax').post('users/login', {
		//   			data: JSON.stringify({
		// 		  		facebookId: result.id,
		// 		  		name: result.name,
		// 		  		email: result.email,
		// 		  		picture: result.picture.data.url
		// 		  	})
		// 		  }).then(result => {
		// 		  	store.pushPayload(result.user);
		// 		  	resolve(Ember.RSVP.hash({
		// 					token: result.token,
		// 					user: this.get('store').findRecord('user', result.user.data.id)
		// 				}));
		// 		  }).catch(error => {
		// 		  	alert(error);
		// 		  });
		//   	},
		//   	error => {
		//   		alert(error);
		//   		return resolve(error);
		//   	}
		//   );
  	// });


  	/*
    return Ember.$.ajax({
			url: adapter.settings[ENV.environment].host + '/users/signin',
      type: 'POST',
      data: {
      	session: {
      		instagram_auth_code: authorization.authorizationCode,
      		instagram_redirect_uri: window.location.href
      	}
      },
      cache: false,
      dataType: 'json'
		}).then(result => {
			window.localStorage.setItem('session', JSON.stringify({
				token: result.session.token,
				user: result.session.user
			}));
			this.get('store').pushPayload({user: result.session.user});
			return Ember.RSVP.hash({
				token: result.session.token,
				user: this.get('store').findRecord('user', result.session.user.uuid)
			});
		});
	  */
  },

  fetch() {
		return new Ember.RSVP.Promise((resolve, reject) => {
  		var session = JSON.parse(window.localStorage.getItem('session'));

			if (session) {
	  		this.get('store').pushPayload({user: session.user});
				resolve(Ember.RSVP.hash({
					token: session.token,
					user: this.get('store').findRecord('user', session.user.uuid)
				}));
			} else {
				reject();
			}
  	});
  },

	close() {
		// window.localStorage.clear();
		// this.get('store').unloadAll();
    alert("close");
		return new Ember.RSVP.Promise((resolve) => {
			resolve({
				isAuthenticated: false
			});
		});
	}

});
