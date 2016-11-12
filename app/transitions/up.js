import Ember from 'ember';
import { animate } from 'liquid-fire';

export default function () {
	var self = this,
		duration = 600;

	self.oldElement.css({
		'z-index': -1
	});

	Ember.$('body').addClass('abyss');

	return Ember.RSVP.Promise.all([
		animate(self.oldElement, {blur: [5, 0], scale: [0.85, 1]}, {easing: 'easeOutCubic', duration: duration}),
		animate(self.newElement, {top: [0, Ember.$(window).height()]}, {easing: [0.1, 1, 0.1, 1], duration: duration})
	]).then(function() {
		Ember.$('body').removeClass('abyss');
	});

}
