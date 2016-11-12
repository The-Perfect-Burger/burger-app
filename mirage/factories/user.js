import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

	name() {
		return faker.name.findName();
	},
	email: faker.internet.email,
	picture() {
		return faker.image.avatar();
	}

});
