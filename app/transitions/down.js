import Ember from 'ember';
import { animate } from 'liquid-fire';

export default function () {
	var self = this,
		duration = 500;

	if (self.newElement) {
		self.newElement.css('z-index', -1);
	}

	return Ember.RSVP.Promise.all([
		self.newElement ? animate(self.newElement, {blur: [0, 5], scale: [1, 0.85]}, {easing: 'easeOutCubic', duration: duration}) :  null,
		animate(self.oldElement, {top: [Ember.$(window).height(), 0]}, {easing: 'easeOutCubic', duration: duration})
	]);

}
