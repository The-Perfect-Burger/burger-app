import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  body() {
    return faker.lorem.paragraph();
  },
  photo() {
		return `burgers/${faker.random.number(12)}.jpg`;
	},
  reaction() {
    return faker.random.arrayElement([
      'liked',
      'disliked',
      'favourited'
    ]);
  }
});
