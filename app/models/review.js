import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({

	author: belongsTo('user'),
	item: belongsTo('item'),
	createdAt: attr('date'),
  photo: attr('string'),
  body: attr('string'),
  reaction: attr('string'),

});
