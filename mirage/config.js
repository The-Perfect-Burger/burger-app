export default function() {

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */

  // this.urlPrefix = 'http://localhost:4000';
  this.namespace = 'api';

  this.get('/posts');
  this.get('/users/:id');

  this.get('/items', function(schema, request) {
    if (request.queryParams.place) {
      return schema.items.where({
        placeId: request.queryParams.place
      });
    } else {
      return null;
    }
  });
  this.get('/items/:id');

  this.get('/places');
  this.get('/places/:id');


  this.get('/reviews/:id');

  this.passthrough('/users/login');

  // this.post('/users/login', function(schema, request) {
	// 	return {
  // 		token: 'JSON.parse(request.requestBody).authorizationCode',
  // 		user: this.serialize(schema.users.create(JSON.parse(request.requestBody)))
  // 	};
  // });

  this.passthrough('http://graph.facebook.com/**');
}
