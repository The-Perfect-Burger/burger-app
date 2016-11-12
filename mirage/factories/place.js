import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({

	picture() {
		return `places/${faker.random.number(10)}.jpg`;
	},

	name(i) {
		return [
			'Bar Luca',
			'Batch Burgers',
			'Beautiful Burgers',
			'Belfield on Botany',
			'Benbry Burgers',
			"Bondi Tony's Burger Joint",
			'Buns & Balls',
			'Burger Cave',
			'Burger Edge',
			'Burger Fuel',
			'Burger Project',
			'Burger10',
			'Charlie & Co',
			'Cheeky Burger',
			'Chicky Char Char',
			'Chur Burger',
			'Crisp',
			'GoodTime Burgers',
			'Grilled',
			'Jacks Newtown',
			'Jazz City',
			'Lashings',
			"Mary's",
			'Maxx Burger & Fish',
			'Milk Bar',
			'Moo Gourmet Burgers',
			'Parlour Burger',
			'Ribs & Burgers',
			'Salt Meats Cheese',
			'Soul Burger',
			'Stitch Bar',
			'The Burger Joint',
			'The Burger Shed'
		][i];
	}

});
