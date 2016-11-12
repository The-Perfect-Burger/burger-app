"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('burger-app/adapters/application', ['exports', 'ember-data', 'burger-app/config/environment'], function (exports, _emberData, _burgerAppConfigEnvironment) {
	exports['default'] = _emberData['default'].JSONAPIAdapter.extend({
		host: _burgerAppConfigEnvironment['default'].api.host,
		namespace: _burgerAppConfigEnvironment['default'].api.namespace
	});
});
define('burger-app/app', ['exports', 'ember', 'burger-app/resolver', 'ember-load-initializers', 'burger-app/config/environment'], function (exports, _ember, _burgerAppResolver, _emberLoadInitializers, _burgerAppConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _burgerAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _burgerAppConfigEnvironment['default'].podModulePrefix,
    Resolver: _burgerAppResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _burgerAppConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define("burger-app/components/-lf-get-outlet-state", ["exports", "liquid-fire/components/-lf-get-outlet-state"], function (exports, _liquidFireComponentsLfGetOutletState) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLfGetOutletState["default"];
    }
  });
});
define('burger-app/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'burger-app/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _burgerAppConfigEnvironment) {

  var name = _burgerAppConfigEnvironment['default'].APP.name;
  var version = _burgerAppConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('burger-app/components/container-header/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("burger-app/components/container-header/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "burger-app/components/container-header/template.hbs" } });
});
define('burger-app/components/container-screen/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("burger-app/components/container-screen/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"yield\",\"default\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "burger-app/components/container-screen/template.hbs" } });
});
define('burger-app/components/deferred-content', ['exports', 'ember-deferred-content/components/deferred-content'], function (exports, _emberDeferredContentComponentsDeferredContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDeferredContentComponentsDeferredContent['default'];
    }
  });
});
define('burger-app/components/deferred-content/fulfilled-content', ['exports', 'ember-deferred-content/components/deferred-content/fulfilled-content'], function (exports, _emberDeferredContentComponentsDeferredContentFulfilledContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDeferredContentComponentsDeferredContentFulfilledContent['default'];
    }
  });
});
define('burger-app/components/deferred-content/pending-content', ['exports', 'ember-deferred-content/components/deferred-content/pending-content'], function (exports, _emberDeferredContentComponentsDeferredContentPendingContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDeferredContentComponentsDeferredContentPendingContent['default'];
    }
  });
});
define('burger-app/components/deferred-content/rejected-content', ['exports', 'ember-deferred-content/components/deferred-content/rejected-content'], function (exports, _emberDeferredContentComponentsDeferredContentRejectedContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDeferredContentComponentsDeferredContentRejectedContent['default'];
    }
  });
});
define('burger-app/components/deferred-content/settled-content', ['exports', 'ember-deferred-content/components/deferred-content/settled-content'], function (exports, _emberDeferredContentComponentsDeferredContentSettledContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberDeferredContentComponentsDeferredContentSettledContent['default'];
    }
  });
});
define("burger-app/components/illiquid-model", ["exports", "liquid-fire/components/illiquid-model"], function (exports, _liquidFireComponentsIlliquidModel) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsIlliquidModel["default"];
    }
  });
});
define('burger-app/components/item-post/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("burger-app/components/item-post/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"header\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"post\",\"item\",\"place\",\"picture\"]]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"description\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"title\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"post\",\"item\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"sub-title\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"post\",\"item\",\"place\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"comment\",\" <button>Tried</button> \"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"collection-h\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"post\",\"reviews\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"actions\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"flush-element\"],[\"text\",\"Tried\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"flush-element\"],[\"text\",\"Want\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"item-review\"],null,[[\"review\"],[[\"get\",[\"review\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"review\"]}],\"hasPartials\":false}", "meta": { "moduleName": "burger-app/components/item-post/template.hbs" } });
});
define('burger-app/components/item-review/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("burger-app/components/item-review/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"review\",\"photo\"]]]]],[\"static-attr\",\"width\",\"100%\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"details\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"span\",[]],[\"dynamic-attr\",\"class\",[\"concat\",[\"reaction \",[\"unknown\",[\"review\",\"reaction\"]]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"author\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"review\",\"author\",\"name\"]],false],[\"text\",\" did not like this burger\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"truncate\"],[[\"get\",[\"review\",\"body\"]],100],null],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "burger-app/components/item-review/template.hbs" } });
});
define('burger-app/components/liquid-append', ['exports', 'liquid-wormhole/components/liquid-append'], function (exports, _liquidWormholeComponentsLiquidAppend) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidWormholeComponentsLiquidAppend['default'];
    }
  });
});
define("burger-app/components/liquid-bind", ["exports", "liquid-fire/components/liquid-bind"], function (exports, _liquidFireComponentsLiquidBind) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidBind["default"];
    }
  });
});
define("burger-app/components/liquid-child", ["exports", "liquid-fire/components/liquid-child"], function (exports, _liquidFireComponentsLiquidChild) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidChild["default"];
    }
  });
});
define("burger-app/components/liquid-container", ["exports", "liquid-fire/components/liquid-container"], function (exports, _liquidFireComponentsLiquidContainer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidContainer["default"];
    }
  });
});
define('burger-app/components/liquid-destination', ['exports', 'liquid-wormhole/components/liquid-destination'], function (exports, _liquidWormholeComponentsLiquidDestination) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidWormholeComponentsLiquidDestination['default'];
    }
  });
});
define("burger-app/components/liquid-if", ["exports", "liquid-fire/components/liquid-if"], function (exports, _liquidFireComponentsLiquidIf) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidIf["default"];
    }
  });
});
define("burger-app/components/liquid-measured", ["exports", "liquid-fire/components/liquid-measured"], function (exports, _liquidFireComponentsLiquidMeasured) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured["default"];
    }
  });
  Object.defineProperty(exports, "measure", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidMeasured.measure;
    }
  });
});
define("burger-app/components/liquid-outlet", ["exports", "liquid-fire/components/liquid-outlet"], function (exports, _liquidFireComponentsLiquidOutlet) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidOutlet["default"];
    }
  });
});
define("burger-app/components/liquid-spacer", ["exports", "liquid-fire/components/liquid-spacer"], function (exports, _liquidFireComponentsLiquidSpacer) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSpacer["default"];
    }
  });
});
define('burger-app/components/liquid-sync', ['exports', 'liquid-fire/components/liquid-sync'], function (exports, _liquidFireComponentsLiquidSync) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidSync['default'];
    }
  });
});
define('burger-app/components/liquid-tether', ['exports', 'liquid-tether/components/liquid-tether'], function (exports, _liquidTetherComponentsLiquidTether) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidTetherComponentsLiquidTether['default'];
    }
  });
});
define("burger-app/components/liquid-unless", ["exports", "liquid-fire/components/liquid-unless"], function (exports, _liquidFireComponentsLiquidUnless) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidUnless["default"];
    }
  });
});
define("burger-app/components/liquid-versions", ["exports", "liquid-fire/components/liquid-versions"], function (exports, _liquidFireComponentsLiquidVersions) {
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function get() {
      return _liquidFireComponentsLiquidVersions["default"];
    }
  });
});
define('burger-app/components/liquid-wormhole', ['exports', 'liquid-wormhole/components/liquid-wormhole'], function (exports, _liquidWormholeComponentsLiquidWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidWormholeComponentsLiquidWormhole['default'];
    }
  });
});
define('burger-app/components/modal-actions/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("burger-app/components/modal-actions/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"isActive\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"append\",[\"helper\",[\"liquid-wormhole\"],null,[[\"stack\",\"class\",\"click\"],[\"modal-backdrop\",\"modal\",[\"helper\",[\"action\"],[[\"get\",[null]],[\"get\",[\"cancel\"]]],null]]]],false],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"liquid-tether\"],null,[[\"send\",\"target\",\"attachment\",\"targetAttachment\",\"class\"],[[\"get\",[\"component\"]],\"document.body\",\"bottom center\",\"bottom center\",\"start-review\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "burger-app/components/modal-actions/template.hbs" } });
});
define('burger-app/components/navigation/footer-main/component', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define("burger-app/components/navigation/footer-main/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn-link btn-footer\"],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"toggle\"],[\"hasStartedReview\",[\"get\",[null]]],null]]],[\"flush-element\"],[\"text\",\"Start a burger review\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"modal-actions\"],null,[[\"component\",\"cancel\",\"isActive\"],[[\"helper\",[\"component\"],[\"start-review\"],[[\"cancel\"],[[\"helper\",[\"toggle\"],[\"hasStartedReview\",[\"get\",[null]]],null]]]],[\"helper\",[\"toggle\"],[\"hasStartedReview\",[\"get\",[null]]],null],[\"get\",[\"hasStartedReview\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "burger-app/components/navigation/footer-main/template.hbs" } });
});
define('burger-app/components/navigation/header-search', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({

		tagName: 'header-search'

	});
});
define('burger-app/components/navigation/screen-container', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({

		tagName: 'screen',

		attributeBindings: ['isSubmitting:data-submitting'],

		bgImageUrl: null,

		isSubmitting: false,

		/**
   * @private
   */
		submittingMessage: 'Submitting...',

		reset: _ember['default'].on('init', function () {
			this.setProperties({
				isSubmitting: false
			});
		}),

		setBackground: _ember['default'].on('didInsertElement', function () {
			if (this.get('bgImageUrl')) {
				this.$().css({
					'background-image': 'url(\'' + this.get('bgImageUrl') + '\')'
				});
			}
		}),

		setHeight: _ember['default'].on('didInsertElement', function () {
			this.$().css({
				height: $(window).height()
			});
		}),

		onBgImageUrlChange: _ember['default'].observer('bgImageUrl', function () {
			this.setBackground();
		}),

		actions: {
			submit: function submit(action) {
				if (this.validateForm()) {
					for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
						args[_key - 1] = arguments[_key];
					}

					this.sendAction.apply(this, [action].concat(args));
				}
			},

			submitAsync: function submitAsync(action, submittingMessage) {
				if (this.validateForm()) {
					this.setProperties({
						isSubmitting: true,
						submittingMessage: submittingMessage
					});

					for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
						args[_key2 - 2] = arguments[_key2];
					}

					this.sendAction.apply(this, [action].concat(args));
				}
			}
		}

	});
});
define('burger-app/components/navigation/screen-header', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({

        tagName: 'header',

        textboxResizese: _ember['default'].on('didInsertElement', function () {
            //el.removeEventListener('click', ScrollTop, false);
            //el.addEventListener('click', ScrollTop, false);

            var leftbtn = this.$('button.left, .btn.left, a.left')[0];
            var rightbtn = this.$('button.right, .btn.right, a.rigth')[0];
            if (typeof leftbtn === 'undefined') {
                leftbtn = {
                    offsetWidth: 0,
                    className: ''
                };
            }
            if (typeof rightbtn === 'undefined') {
                rightbtn = {
                    offsetWidth: 0,
                    className: ''
                };
            }

            var margin = Math.max(leftbtn.offsetWidth, rightbtn.offsetWidth);

            this.$('h1').css({
                marginLeft: margin + 'px',
                marginRight: margin + 'px'
            });

            /*
            var tooLong = (el.offsetWidth < el.scrollWidth) ? true : false;
            if (tooLong) {
                if (leftbtn.offsetWidth < rightbtn.offsetWidth) {
                    el.style.marginLeft = leftbtn.offsetWidth + 'px';
                    el.style.textAlign = 'right';
                } else {
                    el.style.marginRight = rightbtn.offsetWidth + 'px';
                    el.style.textAlign = 'left';
                }
                tooLong = (el.offsetWidth<el.scrollWidth) ? true : false;
                if (tooLong) {
                    if (new RegExp('arrow').test(leftbtn.className)) {
                        clearNode(leftbtn.childNodes[1]);
                        el.style.marginLeft = '26px';
                    }
                    if (new RegExp('arrow').test(rightbtn.className)) {
                        clearNode(rightbtn.childNodes[1]);
                        el.style.marginRight = '26px';
                    }
                }
            }
            */
        })

    });
});
define('burger-app/components/place-search', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    classNames: ['place-search'],

    classNameBindings: ['isOpen:open'],

    isOpen: true,

    location: _ember['default'].inject.service(),

    places: _ember['default'].inject.service(),

    store: _ember['default'].inject.service(),

    items: _ember['default'].RSVP.resolve(),

    actions: {

      close: function close() {
        this.sendAction('close');
      },

      loadItems: function loadItems(place) {
        this.set('items', this.get('store').query('item', {
          place: place.id
        }));
      },

      startReview: function startReview(item) {
        this.send('close');
        this.sendAction('onStartReview', item);
      },

      requestLocation: function requestLocation() {
        this.get('location').getCurrentPosition()['catch'](function (error) {
          alert('Oh shit ' + error);
        }).then(function (coords) {
          alert('Booya longitude:' + coords.longitude + ' latitude:' + coords.latitude);
        });
      }

    }

  });
});
define('burger-app/components/post-renderer', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({

    classNames: ['post-renderer']

  });
});
define('burger-app/components/prevent-overscroll', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({

		isVisible: false,

		preventOverscroll: _ember['default'].on('didInsertElement', function () {

			_ember['default'].$('body').on('touchstart', 'screen content', function () {
				var el = this,
				    top = el.scrollTop,
				    totalScroll = el.scrollHeight,
				    currentScroll = top + el.offsetHeight;

				// If we're at the top or the bottom of the containers scroll, push up or down one pixel.
				// This prevents the scroll from "passing through" to the body.
				if (top === 0) {
					el.scrollTop = 1;
				} else if (currentScroll === totalScroll) {
					el.scrollTop = top - 1;
				}
			});

			_ember['default'].$('body').on('touchmove', 'screen content', function (evt) {
				// if the content is actually scrollable, i.e. the content is long enough
				// that scrolling can occur
				var el = this;

				if (el.offsetHeight < el.scrollHeight) {
					evt.originalEvent._isScroller = true;
				}
			});

			window.document.body.addEventListener('touchmove', function (evt) {
				// In this case, the default behavior is scrolling the body, which
				// would result in an overflow.  Since we don't want that, we preventDefault.
				if (!evt._isScroller) {
					evt.preventDefault();
				}
			});
		})

	});
});
define('burger-app/components/start-review/component', ['exports', 'ember'], function (exports, _ember) {
  var get = _ember['default'].get;
  var set = _ember['default'].set;
  exports['default'] = _ember['default'].Component.extend({

    places: _ember['default'].inject.service(),

    location: _ember['default'].inject.service(),

    store: _ember['default'].inject.service(),

    results: null,

    actions: {

      findPlacesNearby: function findPlacesNearby() {

        set(this, 'results', this.get('store').findAll('place'));

        // get(this, 'location').getCurrentPosition()
        //   .then(coords => {
        //     return get(this, 'places').findByLocation(coords);
        //   })
        //   .then(places => {
        //     set(this, 'results', places)
        //   });
      },

      findPlaceByName: function findPlaceByName(name) {}

    }

  });
});
define("burger-app/components/start-review/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"search\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"placeholder\",\"Search\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"results\"]]],null,6,0],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"footer\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn-link btn-footer\"],[\"modifier\",[\"action\"],[[\"get\",[null]],[\"helper\",[\"action\"],[[\"get\",[null]],[\"get\",[\"cancel\"]]],null]]],[\"flush-element\"],[\"text\",\"Cancel\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"message\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn-link\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"findPlacesNearby\"]],[\"flush-element\"],[\"text\",\"Find places nearby\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        Could not load places nearby: \"],[\"append\",[\"unknown\",[\"reason\"]],false],[\"text\",\"\\n\"]],\"locals\":[\"reason\"]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"place\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"loadItems\",[\"get\",[\"place\"]]]],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"place\",\"picture\"]]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"small\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"place\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"place\"]},{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"places\"]]],null,2]],\"locals\":[\"places\"]},{\"statements\":[[\"text\",\"        Loading results...\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"d\",\"pending\"],null,null,4],[\"block\",[\"d\",\"fulfilled\"],null,null,3],[\"block\",[\"d\",\"rejected\"],null,null,1]],\"locals\":[\"d\"]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"places collection-h\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"deferred-content\"],[[\"get\",[\"results\"]]],null,5],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "burger-app/components/start-review/template.hbs" } });
});
define('burger-app/controllers/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    placeSearchIsActive: false

  });
});
define('burger-app/controllers/reviews.js/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('burger-app/helpers/append', ['exports', 'ember-composable-helpers/helpers/append'], function (exports, _emberComposableHelpersHelpersAppend) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersAppend['default'];
    }
  });
  Object.defineProperty(exports, 'append', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersAppend.append;
    }
  });
});
define('burger-app/helpers/array', ['exports', 'ember-composable-helpers/helpers/array'], function (exports, _emberComposableHelpersHelpersArray) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersArray['default'];
    }
  });
  Object.defineProperty(exports, 'array', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersArray.array;
    }
  });
});
define('burger-app/helpers/camelize', ['exports', 'ember-composable-helpers/helpers/camelize'], function (exports, _emberComposableHelpersHelpersCamelize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCamelize['default'];
    }
  });
  Object.defineProperty(exports, 'camelize', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCamelize.camelize;
    }
  });
});
define('burger-app/helpers/capitalize', ['exports', 'ember-composable-helpers/helpers/capitalize'], function (exports, _emberComposableHelpersHelpersCapitalize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCapitalize['default'];
    }
  });
  Object.defineProperty(exports, 'capitalize', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCapitalize.capitalize;
    }
  });
});
define('burger-app/helpers/chunk', ['exports', 'ember-composable-helpers/helpers/chunk'], function (exports, _emberComposableHelpersHelpersChunk) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersChunk['default'];
    }
  });
  Object.defineProperty(exports, 'chunk', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersChunk.chunk;
    }
  });
});
define('burger-app/helpers/classify', ['exports', 'ember-composable-helpers/helpers/classify'], function (exports, _emberComposableHelpersHelpersClassify) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersClassify['default'];
    }
  });
  Object.defineProperty(exports, 'classify', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersClassify.classify;
    }
  });
});
define('burger-app/helpers/compact', ['exports', 'ember-composable-helpers/helpers/compact'], function (exports, _emberComposableHelpersHelpersCompact) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompact['default'];
    }
  });
  Object.defineProperty(exports, 'compact', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompact.compact;
    }
  });
});
define('burger-app/helpers/compute', ['exports', 'ember-composable-helpers/helpers/compute'], function (exports, _emberComposableHelpersHelpersCompute) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompute['default'];
    }
  });
  Object.defineProperty(exports, 'compute', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersCompute.compute;
    }
  });
});
define('burger-app/helpers/contains', ['exports', 'ember-composable-helpers/helpers/contains'], function (exports, _emberComposableHelpersHelpersContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersContains['default'];
    }
  });
  Object.defineProperty(exports, 'contains', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersContains.contains;
    }
  });
});
define('burger-app/helpers/dasherize', ['exports', 'ember-composable-helpers/helpers/dasherize'], function (exports, _emberComposableHelpersHelpersDasherize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDasherize['default'];
    }
  });
  Object.defineProperty(exports, 'dasherize', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDasherize.dasherize;
    }
  });
});
define('burger-app/helpers/dec', ['exports', 'ember-composable-helpers/helpers/dec'], function (exports, _emberComposableHelpersHelpersDec) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDec['default'];
    }
  });
  Object.defineProperty(exports, 'dec', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDec.dec;
    }
  });
});
define('burger-app/helpers/drop', ['exports', 'ember-composable-helpers/helpers/drop'], function (exports, _emberComposableHelpersHelpersDrop) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDrop['default'];
    }
  });
  Object.defineProperty(exports, 'drop', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersDrop.drop;
    }
  });
});
define('burger-app/helpers/filter-by', ['exports', 'ember-composable-helpers/helpers/filter-by'], function (exports, _emberComposableHelpersHelpersFilterBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFilterBy['default'];
    }
  });
  Object.defineProperty(exports, 'filterBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFilterBy.filterBy;
    }
  });
});
define('burger-app/helpers/filter', ['exports', 'ember-composable-helpers/helpers/filter'], function (exports, _emberComposableHelpersHelpersFilter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFilter['default'];
    }
  });
  Object.defineProperty(exports, 'filter', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFilter.filter;
    }
  });
});
define('burger-app/helpers/find-by', ['exports', 'ember-composable-helpers/helpers/find-by'], function (exports, _emberComposableHelpersHelpersFindBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFindBy['default'];
    }
  });
  Object.defineProperty(exports, 'findBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFindBy.findBy;
    }
  });
});
define('burger-app/helpers/flatten', ['exports', 'ember-composable-helpers/helpers/flatten'], function (exports, _emberComposableHelpersHelpersFlatten) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFlatten['default'];
    }
  });
  Object.defineProperty(exports, 'flatten', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersFlatten.flatten;
    }
  });
});
define('burger-app/helpers/group-by', ['exports', 'ember-composable-helpers/helpers/group-by'], function (exports, _emberComposableHelpersHelpersGroupBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersGroupBy['default'];
    }
  });
  Object.defineProperty(exports, 'groupBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersGroupBy.groupBy;
    }
  });
});
define('burger-app/helpers/has-next', ['exports', 'ember-composable-helpers/helpers/has-next'], function (exports, _emberComposableHelpersHelpersHasNext) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHasNext['default'];
    }
  });
  Object.defineProperty(exports, 'hasNext', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHasNext.hasNext;
    }
  });
});
define('burger-app/helpers/has-previous', ['exports', 'ember-composable-helpers/helpers/has-previous'], function (exports, _emberComposableHelpersHelpersHasPrevious) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHasPrevious['default'];
    }
  });
  Object.defineProperty(exports, 'hasPrevious', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHasPrevious.hasPrevious;
    }
  });
});
define('burger-app/helpers/html-safe', ['exports', 'ember-composable-helpers/helpers/html-safe'], function (exports, _emberComposableHelpersHelpersHtmlSafe) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHtmlSafe['default'];
    }
  });
  Object.defineProperty(exports, 'htmlSafe', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersHtmlSafe.htmlSafe;
    }
  });
});
define('burger-app/helpers/inc', ['exports', 'ember-composable-helpers/helpers/inc'], function (exports, _emberComposableHelpersHelpersInc) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInc['default'];
    }
  });
  Object.defineProperty(exports, 'inc', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInc.inc;
    }
  });
});
define('burger-app/helpers/intersect', ['exports', 'ember-composable-helpers/helpers/intersect'], function (exports, _emberComposableHelpersHelpersIntersect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersIntersect['default'];
    }
  });
  Object.defineProperty(exports, 'intersect', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersIntersect.intersect;
    }
  });
});
define('burger-app/helpers/invoke', ['exports', 'ember-composable-helpers/helpers/invoke'], function (exports, _emberComposableHelpersHelpersInvoke) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInvoke['default'];
    }
  });
  Object.defineProperty(exports, 'invoke', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersInvoke.invoke;
    }
  });
});
define('burger-app/helpers/join', ['exports', 'ember-composable-helpers/helpers/join'], function (exports, _emberComposableHelpersHelpersJoin) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersJoin['default'];
    }
  });
  Object.defineProperty(exports, 'join', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersJoin.join;
    }
  });
});
define('burger-app/helpers/lf-lock-model', ['exports', 'liquid-fire/helpers/lf-lock-model'], function (exports, _liquidFireHelpersLfLockModel) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfLockModel['default'];
    }
  });
  Object.defineProperty(exports, 'lfLockModel', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfLockModel.lfLockModel;
    }
  });
});
define('burger-app/helpers/lf-or', ['exports', 'liquid-fire/helpers/lf-or'], function (exports, _liquidFireHelpersLfOr) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfOr['default'];
    }
  });
  Object.defineProperty(exports, 'lfOr', {
    enumerable: true,
    get: function get() {
      return _liquidFireHelpersLfOr.lfOr;
    }
  });
});
define('burger-app/helpers/map-by', ['exports', 'ember-composable-helpers/helpers/map-by'], function (exports, _emberComposableHelpersHelpersMapBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersMapBy['default'];
    }
  });
  Object.defineProperty(exports, 'mapBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersMapBy.mapBy;
    }
  });
});
define('burger-app/helpers/map', ['exports', 'ember-composable-helpers/helpers/map'], function (exports, _emberComposableHelpersHelpersMap) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersMap['default'];
    }
  });
  Object.defineProperty(exports, 'map', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersMap.map;
    }
  });
});
define('burger-app/helpers/next', ['exports', 'ember-composable-helpers/helpers/next'], function (exports, _emberComposableHelpersHelpersNext) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersNext['default'];
    }
  });
  Object.defineProperty(exports, 'next', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersNext.next;
    }
  });
});
define('burger-app/helpers/object-at', ['exports', 'ember-composable-helpers/helpers/object-at'], function (exports, _emberComposableHelpersHelpersObjectAt) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersObjectAt['default'];
    }
  });
  Object.defineProperty(exports, 'objectAt', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersObjectAt.objectAt;
    }
  });
});
define('burger-app/helpers/optional', ['exports', 'ember-composable-helpers/helpers/optional'], function (exports, _emberComposableHelpersHelpersOptional) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersOptional['default'];
    }
  });
  Object.defineProperty(exports, 'optional', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersOptional.optional;
    }
  });
});
define('burger-app/helpers/pipe-action', ['exports', 'ember-composable-helpers/helpers/pipe-action'], function (exports, _emberComposableHelpersHelpersPipeAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPipeAction['default'];
    }
  });
});
define('burger-app/helpers/pipe', ['exports', 'ember-composable-helpers/helpers/pipe'], function (exports, _emberComposableHelpersHelpersPipe) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPipe['default'];
    }
  });
  Object.defineProperty(exports, 'pipe', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPipe.pipe;
    }
  });
});
define('burger-app/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('burger-app/helpers/previous', ['exports', 'ember-composable-helpers/helpers/previous'], function (exports, _emberComposableHelpersHelpersPrevious) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPrevious['default'];
    }
  });
  Object.defineProperty(exports, 'previous', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersPrevious.previous;
    }
  });
});
define('burger-app/helpers/queue', ['exports', 'ember-composable-helpers/helpers/queue'], function (exports, _emberComposableHelpersHelpersQueue) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersQueue['default'];
    }
  });
  Object.defineProperty(exports, 'queue', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersQueue.queue;
    }
  });
});
define('burger-app/helpers/range', ['exports', 'ember-composable-helpers/helpers/range'], function (exports, _emberComposableHelpersHelpersRange) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRange['default'];
    }
  });
  Object.defineProperty(exports, 'range', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRange.range;
    }
  });
});
define('burger-app/helpers/reduce', ['exports', 'ember-composable-helpers/helpers/reduce'], function (exports, _emberComposableHelpersHelpersReduce) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersReduce['default'];
    }
  });
  Object.defineProperty(exports, 'reduce', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersReduce.reduce;
    }
  });
});
define('burger-app/helpers/reject-by', ['exports', 'ember-composable-helpers/helpers/reject-by'], function (exports, _emberComposableHelpersHelpersRejectBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRejectBy['default'];
    }
  });
  Object.defineProperty(exports, 'rejectBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRejectBy.rejectBy;
    }
  });
});
define('burger-app/helpers/repeat', ['exports', 'ember-composable-helpers/helpers/repeat'], function (exports, _emberComposableHelpersHelpersRepeat) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRepeat['default'];
    }
  });
  Object.defineProperty(exports, 'repeat', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersRepeat.repeat;
    }
  });
});
define('burger-app/helpers/reverse', ['exports', 'ember-composable-helpers/helpers/reverse'], function (exports, _emberComposableHelpersHelpersReverse) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersReverse['default'];
    }
  });
  Object.defineProperty(exports, 'reverse', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersReverse.reverse;
    }
  });
});
define('burger-app/helpers/shuffle', ['exports', 'ember-composable-helpers/helpers/shuffle'], function (exports, _emberComposableHelpersHelpersShuffle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersShuffle['default'];
    }
  });
  Object.defineProperty(exports, 'shuffle', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersShuffle.shuffle;
    }
  });
});
define('burger-app/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('burger-app/helpers/slice', ['exports', 'ember-composable-helpers/helpers/slice'], function (exports, _emberComposableHelpersHelpersSlice) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersSlice['default'];
    }
  });
  Object.defineProperty(exports, 'slice', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersSlice.slice;
    }
  });
});
define('burger-app/helpers/sort-by', ['exports', 'ember-composable-helpers/helpers/sort-by'], function (exports, _emberComposableHelpersHelpersSortBy) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersSortBy['default'];
    }
  });
  Object.defineProperty(exports, 'sortBy', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersSortBy.sortBy;
    }
  });
});
define('burger-app/helpers/take', ['exports', 'ember-composable-helpers/helpers/take'], function (exports, _emberComposableHelpersHelpersTake) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTake['default'];
    }
  });
  Object.defineProperty(exports, 'take', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTake.take;
    }
  });
});
define('burger-app/helpers/titleize', ['exports', 'ember-composable-helpers/helpers/titleize'], function (exports, _emberComposableHelpersHelpersTitleize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTitleize['default'];
    }
  });
  Object.defineProperty(exports, 'titleize', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTitleize.titleize;
    }
  });
});
define('burger-app/helpers/toggle-action', ['exports', 'ember-composable-helpers/helpers/toggle-action'], function (exports, _emberComposableHelpersHelpersToggleAction) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersToggleAction['default'];
    }
  });
});
define('burger-app/helpers/toggle', ['exports', 'ember-composable-helpers/helpers/toggle'], function (exports, _emberComposableHelpersHelpersToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersToggle['default'];
    }
  });
  Object.defineProperty(exports, 'toggle', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersToggle.toggle;
    }
  });
});
define('burger-app/helpers/truncate', ['exports', 'ember-composable-helpers/helpers/truncate'], function (exports, _emberComposableHelpersHelpersTruncate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTruncate['default'];
    }
  });
  Object.defineProperty(exports, 'truncate', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersTruncate.truncate;
    }
  });
});
define('burger-app/helpers/underscore', ['exports', 'ember-composable-helpers/helpers/underscore'], function (exports, _emberComposableHelpersHelpersUnderscore) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersUnderscore['default'];
    }
  });
  Object.defineProperty(exports, 'underscore', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersUnderscore.underscore;
    }
  });
});
define('burger-app/helpers/union', ['exports', 'ember-composable-helpers/helpers/union'], function (exports, _emberComposableHelpersHelpersUnion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersUnion['default'];
    }
  });
  Object.defineProperty(exports, 'union', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersUnion.union;
    }
  });
});
define('burger-app/helpers/w', ['exports', 'ember-composable-helpers/helpers/w'], function (exports, _emberComposableHelpersHelpersW) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersW['default'];
    }
  });
  Object.defineProperty(exports, 'w', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersW.w;
    }
  });
});
define('burger-app/helpers/without', ['exports', 'ember-composable-helpers/helpers/without'], function (exports, _emberComposableHelpersHelpersWithout) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersWithout['default'];
    }
  });
  Object.defineProperty(exports, 'without', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersHelpersWithout.without;
    }
  });
});
define('burger-app/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'burger-app/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _burgerAppConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_burgerAppConfigEnvironment['default'].APP.name, _burgerAppConfigEnvironment['default'].APP.version)
  };
});
define('burger-app/initializers/component-styles', ['exports', 'ember-component-css/initializers/component-styles'], function (exports, _emberComponentCssInitializersComponentStyles) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComponentCssInitializersComponentStyles['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberComponentCssInitializersComponentStyles.initialize;
    }
  });
});
define('burger-app/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('burger-app/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('burger-app/initializers/ember-cli-fastclick', ['exports', 'ember'], function (exports, _ember) {
  var schedule = _ember['default'].run.schedule;

  var EmberCliFastclickInitializer = {
    name: 'fastclick',

    initialize: function initialize() {
      schedule('afterRender', function () {
        FastClick.attach(document.body);
      });
    }
  };

  exports['default'] = EmberCliFastclickInitializer;
});
define('burger-app/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'burger-app/config/environment', 'burger-app/mirage/config', 'ember-cli-mirage/server', 'lodash/object/assign'], function (exports, _emberCliMirageUtilsReadModules, _burgerAppConfigEnvironment, _burgerAppMirageConfig, _emberCliMirageServer, _lodashObjectAssign) {
  exports.startMirage = startMirage;
  exports['default'] = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (arguments.length > 1) {
        // Ember < 2.1
        var container = arguments[0],
            application = arguments[1];
      }

      if (_shouldUseMirage(_burgerAppConfigEnvironment['default'].environment, _burgerAppConfigEnvironment['default']['ember-cli-mirage'])) {
        startMirage(_burgerAppConfigEnvironment['default']);
      }
    }
  };

  function startMirage() {
    var env = arguments.length <= 0 || arguments[0] === undefined ? _burgerAppConfigEnvironment['default'] : arguments[0];

    var environment = env.environment;
    var modules = (0, _emberCliMirageUtilsReadModules['default'])(env.modulePrefix);
    var options = (0, _lodashObjectAssign['default'])(modules, { environment: environment, baseConfig: _burgerAppMirageConfig['default'], testConfig: _burgerAppMirageConfig.testConfig });

    return new _emberCliMirageServer['default'](options);
  }

  function _shouldUseMirage(env, addonConfig) {
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('burger-app/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.ArrayController.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('burger-app/initializers/export-application-global', ['exports', 'ember', 'burger-app/config/environment'], function (exports, _ember, _burgerAppConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_burgerAppConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _burgerAppConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_burgerAppConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('burger-app/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("burger-app/initializers/liquid-fire", ["exports", "liquid-fire/ember-internals"], function (exports, _liquidFireEmberInternals) {

  (0, _liquidFireEmberInternals.initialize)();

  exports["default"] = {
    name: 'liquid-fire',
    initialize: function initialize() {}
  };
});
define('burger-app/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('burger-app/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("burger-app/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('burger-app/mirage/config', ['exports'], function (exports) {
  exports['default'] = function () {

    /*
      Config (with defaults).
       Note: these only affect routes defined *after* them!
    */

    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
      Shorthand cheatsheet:
       this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
       http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
    */

    this.urlPrefix = 'http://localhost:4000';
    this.namespace = 'api';

    this.get('/posts');
    this.get('/users/:id');

    this.get('/items', function (schema, request) {
      if (request.queryParams.place) {
        return schema.items.where({
          placeId: request.queryParams.place
        });
      } else {
        return null;
      }
    });
    this.get('/items/:id');

    this.get('/places');
    this.get('/places/:id');

    this.get('/reviews/:id');

    this.post('/users/login', function (schema, request) {
      return {
        token: 'JSON.parse(request.requestBody).authorizationCode',
        user: this.serialize(schema.users.create(JSON.parse(request.requestBody)))
      };
    });

    this.passthrough('http://graph.facebook.com/**');
  };
});
define('burger-app/mirage/factories/item', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
	exports['default'] = _emberCliMirage.Factory.extend({

		name: function name() {
			return _emberCliMirage.faker.commerce.productName();
		},
		photo: function photo() {
			return _emberCliMirage.faker.image.avatar();
		}

	});
});
define('burger-app/mirage/factories/place', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
	exports['default'] = _emberCliMirage.Factory.extend({

		picture: function picture() {
			return 'places/' + _emberCliMirage.faker.random.number(10) + '.jpg';
		},

		name: function name(i) {
			return ['Bar Luca', 'Batch Burgers', 'Beautiful Burgers', 'Belfield on Botany', 'Benbry Burgers', "Bondi Tony's Burger Joint", 'Buns & Balls', 'Burger Cave', 'Burger Edge', 'Burger Fuel', 'Burger Project', 'Burger10', 'Charlie & Co', 'Cheeky Burger', 'Chicky Char Char', 'Chur Burger', 'Crisp', 'GoodTime Burgers', 'Grilled', 'Jacks Newtown', 'Jazz City', 'Lashings', "Mary's", 'Maxx Burger & Fish', 'Milk Bar', 'Moo Gourmet Burgers', 'Parlour Burger', 'Ribs & Burgers', 'Salt Meats Cheese', 'Soul Burger', 'Stitch Bar', 'The Burger Joint', 'The Burger Shed'][i];
		}

	});
});
define('burger-app/mirage/factories/post', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.Factory.extend({
    title: function title() {
      return _emberCliMirage.faker.lorem.words(2);
    }

  });
});
define('burger-app/mirage/factories/review', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.Factory.extend({
    body: function body() {
      return _emberCliMirage.faker.lorem.paragraph();
    },
    photo: function photo() {
      return 'burgers/' + _emberCliMirage.faker.random.number(12) + '.jpg';
    },
    reaction: function reaction() {
      return _emberCliMirage.faker.random.arrayElement(['liked', 'disliked', 'favourited']);
    }
  });
});
define('burger-app/mirage/factories/user', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
	exports['default'] = _emberCliMirage.Factory.extend({

		name: function name() {
			return _emberCliMirage.faker.name.findName();
		},
		email: _emberCliMirage.faker.internet.email,
		picture: function picture() {
			return _emberCliMirage.faker.image.avatar();
		}

	});
});
define('burger-app/mirage/models/item', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.Model.extend({
    place: (0, _emberCliMirage.belongsTo)('place')
  });
});
define('burger-app/mirage/models/place', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.Model.extend({});
});
define('burger-app/mirage/models/post', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.Model.extend({
    author: (0, _emberCliMirage.belongsTo)('user'),
    item: (0, _emberCliMirage.belongsTo)('item'),
    reviews: (0, _emberCliMirage.hasMany)('review')
  });
});
define('burger-app/mirage/models/review', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.Model.extend({
    author: (0, _emberCliMirage.belongsTo)('user'),
    item: (0, _emberCliMirage.belongsTo)('item')
  });
});
define('burger-app/mirage/models/user', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.Model.extend({});
});
define('burger-app/mirage/scenarios/default', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = function (server) {

    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
       Make sure to define a factory for each model you want to create.
    */

    var users = server.createList('user', 50);
    var places = server.createList('place', 30);

    var items = server.createList('item', 50, {
      place: function place() {
        return _emberCliMirage.faker.random.arrayElement(places);
      }
    });

    var reviews = server.createList('review', 50, {
      item: function item() {
        return _emberCliMirage.faker.random.arrayElement(items);
      },
      author: function author() {
        return _emberCliMirage.faker.random.arrayElement(users);
      }
    });

    var result = [];
    items.forEach(function (item) {
      var reviewsByItem = reviews.filter(function (review) {
        return review.item.id === item.id;
      });
      result.push(reviewsByItem);
    });

    result.filter(function (reviewsByItem) {
      return reviewsByItem.length !== 0;
    }).forEach(function (reviewsByItem) {
      server.create('post', {
        item: items.findBy('id', reviewsByItem[0].itemId),
        placeId: items.findBy('id', reviewsByItem[0].itemId).placeId,
        reviews: reviewsByItem
      });
    });
  };
});
define('burger-app/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  exports['default'] = _emberCliMirage.JSONAPISerializer.extend({});
});
define('burger-app/models/item', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataModel, _emberDataAttr, _emberDataRelationships) {
	exports['default'] = _emberDataModel['default'].extend({

		name: (0, _emberDataAttr['default'])('string'),
		image: (0, _emberDataAttr['default'])('string'),
		place: (0, _emberDataRelationships.belongsTo)('place')

	});
});
define('burger-app/models/place', ['exports', 'ember-data/model', 'ember-data/attr'], function (exports, _emberDataModel, _emberDataAttr) {
	// import { belongsTo, hasMany } from 'ember-data/relationships';

	exports['default'] = _emberDataModel['default'].extend({

		name: (0, _emberDataAttr['default'])('string'),
		locationShort: (0, _emberDataAttr['default'])('string'),
		picture: (0, _emberDataAttr['default'])('string')

	});
});
define('burger-app/models/post', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataModel, _emberDataAttr, _emberDataRelationships) {
	exports['default'] = _emberDataModel['default'].extend({

		createdAt: (0, _emberDataAttr['default'])('date'),
		item: (0, _emberDataRelationships.belongsTo)('item'),
		reviews: (0, _emberDataRelationships.hasMany)('review')

	});
});
define('burger-app/models/review', ['exports', 'ember-data/model', 'ember-data/attr', 'ember-data/relationships'], function (exports, _emberDataModel, _emberDataAttr, _emberDataRelationships) {
  exports['default'] = _emberDataModel['default'].extend({

    author: (0, _emberDataRelationships.belongsTo)('user'),
    item: (0, _emberDataRelationships.belongsTo)('item'),
    createdAt: (0, _emberDataAttr['default'])('date'),
    photo: (0, _emberDataAttr['default'])('string'),
    body: (0, _emberDataAttr['default'])('string'),
    reaction: (0, _emberDataAttr['default'])('string')

  });
});
define('burger-app/models/user', ['exports', 'ember-data/model', 'ember-data/attr'], function (exports, _emberDataModel, _emberDataAttr) {
	// import { belongsTo, hasMany } from 'ember-data/relationships';

	exports['default'] = _emberDataModel['default'].extend({

		name: (0, _emberDataAttr['default'])('string'),
		email: (0, _emberDataAttr['default'])('string'),
		picture: (0, _emberDataAttr['default'])('string')

	});
});
define('burger-app/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('burger-app/router', ['exports', 'ember', 'burger-app/config/environment'], function (exports, _ember, _burgerAppConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _burgerAppConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('posts');
    this.route('reviews', function () {
      this.route('create', { path: 'create/:burger_id' });
    });
  });

  exports['default'] = Router;
});
define('burger-app/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    beforeModel: function beforeModel(transition) {
      if (transition.targetName === 'index') {
        this.transitionTo('reviews');
      }
    },

    actions: {

      startPlaceSearch: function startPlaceSearch() {
        this.controllerFor('application').set('placeSearchIsActive', true);
      },

      startReview: function startReview(item) {
        this.transitionTo('reviews.create', item);
      },

      cancelPlaceSearch: function cancelPlaceSearch() {
        this.controllerFor('application').set('placeSearchIsActive', false);
      },

      tried: function tried(item) {
        alert('Tried!');
      }

    }

  });
});
define('burger-app/routes/reviews', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({});
});
define('burger-app/routes/reviews/create', ['exports', 'ember'], function (exports, _ember) {
		exports['default'] = _ember['default'].Route.extend({

				places: _ember['default'].inject.service(),

				model: function model(params) {
						return this.store.findRecord('item', params.burger_id)['catch'](function (error) {
								//alert(error);
						});
				}

		});
});
define('burger-app/routes/reviews/index', ['exports', 'ember'], function (exports, _ember) {
		exports['default'] = _ember['default'].Route.extend({

				places: _ember['default'].inject.service(),

				model: function model() {
						return this.store.findAll('post')['catch'](function (error) {
								//alert(error);
						});
				},

				setupController: function setupController(controller, model) {
						this._super.apply(this, arguments);
				}

		});
});
define('burger-app/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('burger-app/services/cordova', ['exports', 'ember-cordova/services/cordova'], function (exports, _emberCordovaServicesCordova) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCordovaServicesCordova['default'];
    }
  });
});
define('burger-app/services/device/platform', ['exports', 'ember-cordova/services/device/platform'], function (exports, _emberCordovaServicesDevicePlatform) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCordovaServicesDevicePlatform['default'];
    }
  });
});
define('burger-app/services/device/splashscreen', ['exports', 'ember-cordova/services/device/splashscreen'], function (exports, _emberCordovaServicesDeviceSplashscreen) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCordovaServicesDeviceSplashscreen['default'];
    }
  });
});
define("burger-app/services/liquid-fire-transitions", ["exports", "liquid-fire/action", "liquid-fire/running-transition", "liquid-fire/transition-map", "ember-weakmap"], function (exports, _liquidFireAction, _liquidFireRunningTransition, _liquidFireTransitionMap, _emberWeakmap) {

  var wormholeActionMap = new _emberWeakmap["default"]();

  exports["default"] = _liquidFireTransitionMap["default"].extend({
    transitionFor: function transitionFor(conditions) {
      if (conditions.matchContext && conditions.matchContext.helperName === 'liquid-wormhole' || conditions.helperName === 'liquid-wormhole') {

        var versions = conditions.versions;

        conditions.versions = versions.map(function (version) {
          return version.value || version;
        });
        conditions.parentElement = conditions.parentElement.find('.liquid-wormhole-element');
        conditions.firstTime = 'no';

        var rule = this.constraintsFor(conditions).bestMatch(conditions);
        var action = undefined;

        if (rule) {
          if (wormholeActionMap.has(rule)) {
            action = wormholeActionMap.get(rule);
          } else {
            action = new _liquidFireAction["default"]('wormhole', [{ use: rule.use }]);
            action.validateHandler(this);

            wormholeActionMap.set(rule, action);
          }
        } else {
          action = this.defaultAction();
        }

        return new _liquidFireRunningTransition["default"](this, versions, action);
      } else {
        return this._super(conditions);
      }
    }
  });
});
define('burger-app/services/liquid-wormhole', ['exports', 'liquid-wormhole/services/liquid-wormhole'], function (exports, _liquidWormholeServicesLiquidWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidWormholeServicesLiquidWormhole['default'];
    }
  });
});
define('burger-app/services/location', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({

    getCurrentPosition: function getCurrentPosition() {
      return new _ember['default'].RSVP.Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(function (position) {
          resolve(position.coords);
        }, function (error) {
          alert(error.message);
        });
      });
    }

  });
});
define('burger-app/services/places', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({

    store: _ember['default'].inject.service(),

    findByLocation: function findByLocation(coords) {
      return this.get('store').findAll('place');
    }

  });
});
define("burger-app/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Hello world!\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"append\",[\"unknown\",[\"liquid-outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "burger-app/templates/application.hbs" } });
});
define("burger-app/templates/components/navigation/header-search", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"open-element\",\"status-bar\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"navigation-bar\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"search\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"input\",[]],[\"static-attr\",\"value\",\"Sydney\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"comment\",\" <ul class=\\\"collection-h\\\">\\n\\t\\t<li><a class=\\\"active\\\">Latest reviews</a></li>\\n\\t\\t<li><a>Announcements</a></li>\\n\\t\\t<li><a>Most favourited burgers</a></li>\\n\\t\\t<li><a>Most liked burgers</a></li>\\n\\t\\t<li><a>Most disliked burgers</a></li>\\n\\t</ul> \"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "burger-app/templates/components/navigation/header-search.hbs" } });
});
define("burger-app/templates/components/navigation/screen-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"open-element\",\"status-bar\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"navigation-bar\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"yield\",\"default\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[\"default\"],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "burger-app/templates/components/navigation/screen-header.hbs" } });
});
define("burger-app/templates/components/place-search", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"close\"]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"place-search-container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"search\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"input\",[]],[\"static-attr\",\"placeholder\",\"Search\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"nearby\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"requestLocation\"]],[\"flush-element\"],[\"text\",\"Get location\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"places\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"deferred-content\"],[[\"get\",[\"places\",\"nearby\"]]],null,9],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"burgers\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"deferred-content\"],[[\"get\",[\"items\"]]],null,4],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"cancel\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"modifier\",[\"action\"],[[\"get\",[null]],\"close\"]],[\"flush-element\"],[\"text\",\"Cancel\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"          Could not load places nearby: \"],[\"append\",[\"unknown\",[\"reason\"]],false],[\"text\",\"\\n\"]],\"locals\":[\"reason\"]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"item\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"startReview\",[\"get\",[\"item\"]]]],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"item\",\"image\"]]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"small\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"item\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"item\"]},{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"items\"]]],null,1]],\"locals\":[\"items\"]},{\"statements\":[[\"text\",\"          Loading places nearby...\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"d\",\"pending\"],null,null,3],[\"block\",[\"d\",\"fulfilled\"],null,null,2],[\"block\",[\"d\",\"rejected\"],null,null,0]],\"locals\":[\"d\"]},{\"statements\":[[\"text\",\"          Could not load places nearby: \"],[\"append\",[\"unknown\",[\"reason\"]],false],[\"text\",\"\\n\"]],\"locals\":[\"reason\"]},{\"statements\":[[\"text\",\"            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"place\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"loadItems\",[\"get\",[\"place\"]]]],[\"flush-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"place\",\"picture\"]]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n              \"],[\"open-element\",\"small\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"place\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"place\"]},{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"places\"]]],null,6]],\"locals\":[\"places\"]},{\"statements\":[[\"text\",\"          Loading places nearby...\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"d\",\"pending\"],null,null,8],[\"block\",[\"d\",\"fulfilled\"],null,null,7],[\"block\",[\"d\",\"rejected\"],null,null,5]],\"locals\":[\"d\"]}],\"hasPartials\":false}", "meta": { "moduleName": "burger-app/templates/components/place-search.hbs" } });
});
define("burger-app/templates/components/post-renderer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"header flex-box align-center\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"post\",\"item\",\"place\",\"picture\"]]]]],[\"static-attr\",\"class\",\"picture\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"flex-1\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"item\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"post\",\"item\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"place\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"post\",\"item\",\"place\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"flush-element\"],[\"text\",\"Tried\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"review-collection\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"post\",\"reviews\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"footer\",[]],[\"static-attr\",\"class\",\"flex-box\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"flex-1\"],[\"flush-element\"],[\"text\",\"Tried\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"flex-1\"],[\"flush-element\"],[\"text\",\"Want\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"flex-1\"],[\"flush-element\"],[\"text\",\"Share\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"    \"],[\"append\",[\"helper\",[\"item-review\"],null,[[\"review\",\"class\"],[[\"get\",[\"review\"]],\"review\"]]],false],[\"text\",\"\\n\"]],\"locals\":[\"review\"]}],\"hasPartials\":false}", "meta": { "moduleName": "burger-app/templates/components/post-renderer.hbs" } });
});
define("burger-app/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"block\",[\"navigation/screen-container\"],null,null,2]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Posts\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\\t\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Welcome\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\"],[\"block\",[\"link-to\"],[\"posts\"],[[\"class\"],[\"right\"]],0],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"navigation/screen-header\"],null,null,1]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "burger-app/templates/index.hbs" } });
});
define("burger-app/templates/posts", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"block\",[\"container-screen\"],null,null,2]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Post a burger review\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\\t\\t\"],[\"append\",[\"helper\",[\"post-renderer\"],null,[[\"post\"],[[\"get\",[\"post\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"post\"]},{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"unknown\",[\"navigation/header-search\"]],false],[\"text\",\"\\n\\t\"],[\"open-element\",\"content\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,1],[\"text\",\"\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"footer\",[]],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"block\",[\"link-to\"],[\"reviews.create\"],null,0],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "burger-app/templates/posts.hbs" } });
});
define("burger-app/templates/reviews", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"append\",[\"unknown\",[\"liquid-outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "burger-app/templates/reviews.hbs" } });
});
define("burger-app/templates/reviews/create", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"block\",[\"navigation/screen-container\"],null,null,3]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Posts\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Reviews\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\"],[\"block\",[\"link-to\"],[\"reviews\"],null,1],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"name\"]],false],[\"close-element\"],[\"text\",\"\\n\\t\\t\"],[\"block\",[\"link-to\"],[\"posts\"],[[\"class\"],[\"right\"]],0],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"navigation/screen-header\"],null,null,2],[\"text\",\"  \"],[\"open-element\",\"content\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Post your fucking review bitch\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "burger-app/templates/reviews/create.hbs" } });
});
define("burger-app/templates/reviews/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": null, "block": "{\"statements\":[[\"block\",[\"container-screen\"],null,null,1]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\t\\t\\t\"],[\"append\",[\"helper\",[\"item-post\"],null,[[\"post\"],[[\"get\",[\"post\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"post\"]},{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"unknown\",[\"navigation/header-search\"]],false],[\"text\",\"\\n\\t\"],[\"open-element\",\"content\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"text\",\"\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"append\",[\"unknown\",[\"navigation/footer-main\"]],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "burger-app/templates/reviews/index.hbs" } });
});
define('burger-app/tests/mirage/mirage/config.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/config.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass jshint.');
  });
});
define('burger-app/tests/mirage/mirage/factories/item.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/factories/item.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/factories/item.js should pass jshint.');
  });
});
define('burger-app/tests/mirage/mirage/factories/place.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/factories/place.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/factories/place.js should pass jshint.');
  });
});
define('burger-app/tests/mirage/mirage/factories/post.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/factories/post.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/factories/post.js should pass jshint.');
  });
});
define('burger-app/tests/mirage/mirage/factories/review.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/factories/review.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/factories/review.js should pass jshint.');
  });
});
define('burger-app/tests/mirage/mirage/factories/user.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/factories/user.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/factories/user.js should pass jshint.');
  });
});
define('burger-app/tests/mirage/mirage/models/item.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/models/item.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/item.js should pass jshint.');
  });
});
define('burger-app/tests/mirage/mirage/models/place.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/models/place.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/place.js should pass jshint.');
  });
});
define('burger-app/tests/mirage/mirage/models/post.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/models/post.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/post.js should pass jshint.');
  });
});
define('burger-app/tests/mirage/mirage/models/review.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/models/review.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/review.js should pass jshint.');
  });
});
define('burger-app/tests/mirage/mirage/models/user.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/models/user.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/user.js should pass jshint.');
  });
});
define('burger-app/tests/mirage/mirage/scenarios/default.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/scenarios/default.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass jshint.');
  });
});
define('burger-app/tests/mirage/mirage/serializers/application.jshint', ['exports'], function (exports) {
  QUnit.module('JSHint | mirage/serializers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass jshint.');
  });
});
define('burger-app/transitions', ['exports'], function (exports) {
  exports['default'] = function () {
    var duration = 300;
    var animation = {
      duration: 300,
      easing: 'easeInOutCubic'
    };

    this.transition(this.toRoute(['reviews.create']), this.use('up'), this.reverse('down'));

    this.transition(this.matchSelector('#modal-backdrop'), this.use('fade', animation));

    this.transition(this.hasClass('start-review'), this.fromValue(function (value) {
      return value === null;
    }), this.toValue(function (value) {
      return value === true;
    }), this.use('toUp', animation), this.reverse('toDown', animation));
  };
});
define('burger-app/transitions/cross-fade', ['exports', 'liquid-fire/transitions/cross-fade'], function (exports, _liquidFireTransitionsCrossFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsCrossFade['default'];
    }
  });
});
define('burger-app/transitions/default', ['exports', 'liquid-fire/transitions/default'], function (exports, _liquidFireTransitionsDefault) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsDefault['default'];
    }
  });
});
define('burger-app/transitions/down', ['exports', 'ember', 'liquid-fire'], function (exports, _ember, _liquidFire) {
	exports['default'] = function () {
		var self = this,
		    duration = 500;

		if (self.newElement) {
			self.newElement.css('z-index', -1);
		}

		return _ember['default'].RSVP.Promise.all([self.newElement ? (0, _liquidFire.animate)(self.newElement, { blur: [0, 5], scale: [1, 0.85] }, { easing: 'easeOutCubic', duration: duration }) : null, (0, _liquidFire.animate)(self.oldElement, { top: [_ember['default'].$(window).height(), 0] }, { easing: 'easeOutCubic', duration: duration })]);
	};
});
define('burger-app/transitions/explode', ['exports', 'liquid-fire/transitions/explode'], function (exports, _liquidFireTransitionsExplode) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsExplode['default'];
    }
  });
});
define('burger-app/transitions/fade', ['exports', 'liquid-fire/transitions/fade'], function (exports, _liquidFireTransitionsFade) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFade['default'];
    }
  });
});
define('burger-app/transitions/flex-grow', ['exports', 'liquid-fire/transitions/flex-grow'], function (exports, _liquidFireTransitionsFlexGrow) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlexGrow['default'];
    }
  });
});
define('burger-app/transitions/fly-to', ['exports', 'liquid-fire/transitions/fly-to'], function (exports, _liquidFireTransitionsFlyTo) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsFlyTo['default'];
    }
  });
});
define("burger-app/transitions/modals", ["exports"], function (exports) {
  exports["default"] = function () {};
});
define('burger-app/transitions/move-over', ['exports', 'liquid-fire/transitions/move-over'], function (exports, _liquidFireTransitionsMoveOver) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsMoveOver['default'];
    }
  });
});
define("burger-app/transitions/reveal-down", ["exports", "burger-app/transitions/reveal"], function (exports, _burgerAppTransitionsReveal) {
  exports["default"] = function (opts) {
    return _burgerAppTransitionsReveal["default"].call(this, 'y', 1, opts);
  };
});
define("burger-app/transitions/reveal-left", ["exports", "burger-app/transitions/reveal"], function (exports, _burgerAppTransitionsReveal) {
  exports["default"] = function (opts) {
    return _burgerAppTransitionsReveal["default"].call(this, 'x', -1, opts);
  };
});
define("burger-app/transitions/reveal-right", ["exports", "burger-app/transitions/reveal"], function (exports, _burgerAppTransitionsReveal) {
  exports["default"] = function (opts) {
    return _burgerAppTransitionsReveal["default"].call(this, 'x', 1, opts);
  };
});
define("burger-app/transitions/reveal-up", ["exports", "burger-app/transitions/reveal"], function (exports, _burgerAppTransitionsReveal) {
  exports["default"] = function (opts) {
    return _burgerAppTransitionsReveal["default"].call(this, 'y', -1, opts);
  };
});
define('burger-app/transitions/reveal', ['exports', 'liquid-fire'], function (exports, _liquidFire) {
  exports['default'] = reveal;

  function reveal(dimension, direction, opts) {
    var _this = this;

    var property = undefined,
        measure = undefined,
        firstStep = undefined;
    var oldParams = {};
    var revealingElement = findRevealingElement(this);

    if (dimension.toLowerCase() === 'x') {
      property = 'translateX';
      measure = 'width';
    } else {
      property = 'translateY';
      measure = 'height';
    }

    if (revealingElement) {
      // We still have some older version that is in the process of
      // revealing, so our first step is waiting for it to finish.
      firstStep = (0, _liquidFire.finish)(revealingElement, 'revealing-out');
    } else {
      firstStep = _liquidFire.Promise.resolve();
    }

    return firstStep.then(function () {
      var bigger = biggestSize(_this, measure);
      oldParams[property] = bigger * direction + 'px';

      _this.oldElement.css({ visibility: '', zIndex: 1 });
      _this.newElement.css({ visibility: '', zIndex: 0 });
      return (0, _liquidFire.animate)(_this.oldElement, oldParams, opts, 'revealing-out');
    });
  }

  function biggestSize(context, dimension) {
    var sizes = [];
    if (context.newElement) {
      sizes.push(parseInt(context.newElement.css(dimension), 10));
      sizes.push(parseInt(context.newElement.parent().css(dimension), 10));
    }
    if (context.oldElement) {
      sizes.push(parseInt(context.oldElement.css(dimension), 10));
      sizes.push(parseInt(context.oldElement.parent().css(dimension), 10));
    }
    return Math.max.apply(null, sizes);
  }

  function findRevealingElement(context) {
    for (var i = 0; i < context.older.length; i++) {
      var entry = context.older[i];
      if ((0, _liquidFire.isAnimating)(entry.element, 'revealing-out')) {
        return entry.element;
      }
    }
    if ((0, _liquidFire.isAnimating)(context.oldElement, 'revealing-out')) {
      return context.oldElement;
    }
  }
});
define('burger-app/transitions/scale', ['exports', 'liquid-fire/transitions/scale'], function (exports, _liquidFireTransitionsScale) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScale['default'];
    }
  });
});
define('burger-app/transitions/scroll-then', ['exports', 'liquid-fire/transitions/scroll-then'], function (exports, _liquidFireTransitionsScrollThen) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsScrollThen['default'];
    }
  });
});
define('burger-app/transitions/to-down', ['exports', 'liquid-fire/transitions/to-down'], function (exports, _liquidFireTransitionsToDown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToDown['default'];
    }
  });
});
define('burger-app/transitions/to-left', ['exports', 'liquid-fire/transitions/to-left'], function (exports, _liquidFireTransitionsToLeft) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToLeft['default'];
    }
  });
});
define('burger-app/transitions/to-right', ['exports', 'liquid-fire/transitions/to-right'], function (exports, _liquidFireTransitionsToRight) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToRight['default'];
    }
  });
});
define('burger-app/transitions/to-up', ['exports', 'liquid-fire/transitions/to-up'], function (exports, _liquidFireTransitionsToUp) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsToUp['default'];
    }
  });
});
define('burger-app/transitions/up', ['exports', 'ember', 'liquid-fire'], function (exports, _ember, _liquidFire) {
	exports['default'] = function () {
		var self = this,
		    duration = 600;

		self.oldElement.css({
			'z-index': -1
		});

		_ember['default'].$('body').addClass('abyss');

		return _ember['default'].RSVP.Promise.all([(0, _liquidFire.animate)(self.oldElement, { blur: [5, 0], scale: [0.85, 1] }, { easing: 'easeOutCubic', duration: duration }), (0, _liquidFire.animate)(self.newElement, { top: [0, _ember['default'].$(window).height()] }, { easing: [0.1, 1, 0.1, 1], duration: duration })]).then(function () {
			_ember['default'].$('body').removeClass('abyss');
		});
	};
});
define('burger-app/transitions/wait', ['exports', 'liquid-fire/transitions/wait'], function (exports, _liquidFireTransitionsWait) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _liquidFireTransitionsWait['default'];
    }
  });
});
define('burger-app/transitions/wormhole', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = wormhole;

  function wormhole(_ref) {
    var _this = this;

    var use = _ref.use;

    var oldWormholeElement = undefined,
        newWormholeElement = undefined;

    if (this.oldElement) {
      oldWormholeElement = this.oldElement.find('.liquid-wormhole-element:last-child');

      this.oldElement = null;

      if (oldWormholeElement.length > 0) {
        var newChild = oldWormholeElement.clone();
        newChild.addClass('liquid-wormhole-temp-element');

        oldWormholeElement.css({ visibility: 'hidden' });

        var offset = oldWormholeElement.offset();

        newChild.css({
          position: 'absolute',
          top: offset.top,
          left: offset.left,
          bottom: '',
          right: '',
          margin: '0px',
          transform: ''
        });

        newChild.appendTo(oldWormholeElement.parent());
        this.oldElement = newChild;
      }
    }

    if (this.newElement) {
      newWormholeElement = this.newElement.find('.liquid-wormhole-element:last-child');

      this.newElement = null;

      if (newWormholeElement.length > 0) {
        var newChild = newWormholeElement.clone();

        newWormholeElement.css({ visibility: 'hidden' });

        var offset = newWormholeElement.offset();

        newChild.css({
          position: 'absolute',
          top: offset.top,
          left: offset.left,
          bottom: '',
          right: '',
          margin: '0px',
          transform: ''
        });

        newChild.appendTo(newWormholeElement.parent());
        this.newElement = newChild;
      }
    }

    var animation;
    if (typeof use.handler === 'function') {
      animation = use.handler;
    } else {
      animation = context.lookup(use.name);
    }

    return animation.apply(this, use.args)['finally'](function () {
      if (_this.oldElement && oldWormholeElement) {
        _this.oldElement.remove();
        oldWormholeElement.css({ visibility: 'visible' });
      }
      if (_this.newElement && newWormholeElement) {
        _this.newElement.remove();
        newWormholeElement.css({ visibility: 'visible' });
      }
    });
  }

  ;
});
define('burger-app/utils/titleize', ['exports', 'ember-composable-helpers/utils/titleize'], function (exports, _emberComposableHelpersUtilsTitleize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberComposableHelpersUtilsTitleize['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('burger-app/config/environment', ['ember'], function(Ember) {
  var prefix = 'burger-app';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("burger-app/app")["default"].create({"name":"burger-app","version":"0.0.0+f44994ab"});
}

/* jshint ignore:end */
//# sourceMappingURL=burger-app.map