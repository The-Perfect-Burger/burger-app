import Ember from 'ember';

export default Ember.Component.extend({

	tagName: 'screen',

	attributeBindings: ['isSubmitting:data-submitting'],

	bgImageUrl: null,

	isSubmitting: false,

	/**
	 * @private
	 */
	submittingMessage: 'Submitting...',

	reset: Ember.on('init', function() {
		this.setProperties({
			isSubmitting: false
		});
	}),

	setBackground: Ember.on('didInsertElement', function () {
		if (this.get('bgImageUrl')) {
			this.$().css({
				'background-image': `url('${this.get('bgImageUrl')}')`
			});
		}
	}),

	setHeight: Ember.on('didInsertElement', function () {
		this.$().css({
			height: $(window).height()
		});
	}),

	onBgImageUrlChange: Ember.observer('bgImageUrl', function () {
		this.setBackground();
	}),

	actions: {
		submit(action, ...args) {
			if (this.validateForm()) {
				this.sendAction(action, ...args);
			}
		},

		submitAsync(action, submittingMessage, ...args) {
			if (this.validateForm()) {
				this.setProperties({
					isSubmitting: true,
					submittingMessage: submittingMessage
				});
				this.sendAction(action, ...args);
			}
		}
	}

});
