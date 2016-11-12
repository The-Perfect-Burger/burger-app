import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  author: belongsTo('user'),
  item: belongsTo('item'),
  reviews: hasMany('review')
});
