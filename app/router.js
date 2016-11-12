import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts');
  this.route('reviews', function() {
    this.route('create', { path: 'create/:burger_id' });
  })
});

export default Router;
