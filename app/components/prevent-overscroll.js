import Ember from 'ember';

export default Ember.Component.extend({

	isVisible: false,

	preventOverscroll: Ember.on('didInsertElement', function() {

		Ember.$('body').on('touchstart', 'screen content', function() {
			var el = this,
				top = el.scrollTop,
				totalScroll = el.scrollHeight,
				currentScroll = top + el.offsetHeight;

				// If we're at the top or the bottom of the containers scroll, push up or down one pixel.
				// This prevents the scroll from "passing through" to the body.
				if (top === 0) {
					el.scrollTop = 1;
				}
				else if (currentScroll === totalScroll) {
					el.scrollTop = top - 1;
				}
		});

		Ember.$('body').on('touchmove', 'screen content', function(evt) {
			// if the content is actually scrollable, i.e. the content is long enough
		    // that scrolling can occur
		    var el = this;

		    if (el.offsetHeight < el.scrollHeight) {
		    	evt.originalEvent._isScroller = true;
		    }
		});

		window.document.body.addEventListener('touchmove', function(evt) {
			// In this case, the default behavior is scrolling the body, which
			// would result in an overflow.  Since we don't want that, we preventDefault.
			if (!evt._isScroller) {
				evt.preventDefault();
			}
		});

	})

});
