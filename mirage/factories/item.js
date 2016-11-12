import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

	name() {
		return faker.commerce.productName();
	},
	photo() {
		return faker.image.avatar();
	},

});
