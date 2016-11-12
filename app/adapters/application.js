import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.JSONAPIAdapter.extend({
	host: ENV.api.host,
	namespace: ENV.api.namespace
});
