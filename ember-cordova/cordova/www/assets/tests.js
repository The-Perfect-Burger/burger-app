define('burger-app/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('burger-app/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('burger-app/tests/components/container-header/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/container-header/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container-header/component.js should pass jshint.');
  });
});
define('burger-app/tests/components/container-screen/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/container-screen/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/container-screen/component.js should pass jshint.');
  });
});
define('burger-app/tests/components/item-post/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/item-post/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/item-post/component.js should pass jshint.');
  });
});
define('burger-app/tests/components/item-review/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/item-review/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/item-review/component.js should pass jshint.');
  });
});
define('burger-app/tests/components/modal-actions/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/modal-actions/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/modal-actions/component.js should pass jshint.');
  });
});
define('burger-app/tests/components/navigation/footer-main/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/navigation/footer-main/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/navigation/footer-main/component.js should pass jshint.');
  });
});
define('burger-app/tests/components/navigation/header-search.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/navigation/header-search.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/navigation/header-search.js should pass jshint.');
  });
});
define('burger-app/tests/components/navigation/screen-container.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/navigation/screen-container.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/navigation/screen-container.js should pass jshint.\ncomponents/navigation/screen-container.js: line 34, col 21, \'$\' is not defined.\n\n1 error');
  });
});
define('burger-app/tests/components/navigation/screen-header.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/navigation/screen-header.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/navigation/screen-header.js should pass jshint.');
  });
});
define('burger-app/tests/components/place-search.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/place-search.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/place-search.js should pass jshint.');
  });
});
define('burger-app/tests/components/post-renderer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/post-renderer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/post-renderer.js should pass jshint.');
  });
});
define('burger-app/tests/components/prevent-overscroll.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/prevent-overscroll.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/prevent-overscroll.js should pass jshint.');
  });
});
define('burger-app/tests/components/start-review/component.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/start-review/component.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/start-review/component.js should pass jshint.\ncomponents/start-review/component.js: line 34, col 21, \'name\' is defined but never used.\ncomponents/start-review/component.js: line 4, col 3, \'get\' is defined but never used.\n\n2 errors');
  });
});
define('burger-app/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('burger-app/tests/controllers/reviews.js/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/reviews.js/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/reviews.js/index.js should pass jshint.');
  });
});
define('burger-app/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
    server.shutdown();
  }
});
define('burger-app/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('burger-app/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'burger-app/tests/helpers/start-app', 'burger-app/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _burgerAppTestsHelpersStartApp, _burgerAppTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _burgerAppTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _burgerAppTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('burger-app/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('burger-app/tests/helpers/resolver', ['exports', 'burger-app/resolver', 'burger-app/config/environment'], function (exports, _burgerAppResolver, _burgerAppConfigEnvironment) {

  var resolver = _burgerAppResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _burgerAppConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _burgerAppConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('burger-app/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('burger-app/tests/helpers/start-app', ['exports', 'ember', 'burger-app/app', 'burger-app/config/environment'], function (exports, _ember, _burgerAppApp, _burgerAppConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _burgerAppConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _burgerAppApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('burger-app/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('burger-app/tests/integration/components/container-header/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('container-header', 'Integration | Component | container header', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': null,
      'block': '{"statements":[["append",["unknown",["container-header"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': null,
      'block': '{"statements":[["text","\\n"],["block",["container-header"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('burger-app/tests/integration/components/container-header/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/container-header/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/container-header/component-test.js should pass jshint.');
  });
});
define('burger-app/tests/integration/components/container-screen/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('container-screen', 'Integration | Component | container screen', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': null,
      'block': '{"statements":[["append",["unknown",["container-screen"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': null,
      'block': '{"statements":[["text","\\n"],["block",["container-screen"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('burger-app/tests/integration/components/container-screen/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/container-screen/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/container-screen/component-test.js should pass jshint.');
  });
});
define('burger-app/tests/integration/components/hello-world/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('hello-world', 'Integration | Component | hello world', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': null,
      'block': '{"statements":[["append",["unknown",["hello-world"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': null,
      'block': '{"statements":[["text","\\n"],["block",["hello-world"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('burger-app/tests/integration/components/hello-world/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/hello-world/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/hello-world/component-test.js should pass jshint.');
  });
});
define('burger-app/tests/integration/components/item-ninja/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('item-ninja', 'Integration | Component | item ninja', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': null,
      'block': '{"statements":[["append",["unknown",["item-ninja"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': null,
      'block': '{"statements":[["text","\\n"],["block",["item-ninja"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('burger-app/tests/integration/components/item-ninja/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/item-ninja/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/item-ninja/component-test.js should pass jshint.');
  });
});
define('burger-app/tests/integration/components/item-post/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('item-post', 'Integration | Component | item post', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': null,
      'block': '{"statements":[["append",["unknown",["item-post"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': null,
      'block': '{"statements":[["text","\\n"],["block",["item-post"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('burger-app/tests/integration/components/item-post/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/item-post/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/item-post/component-test.js should pass jshint.');
  });
});
define('burger-app/tests/integration/components/item-review/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('item-review', 'Integration | Component | item review', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': null,
      'block': '{"statements":[["append",["unknown",["item-review"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': null,
      'block': '{"statements":[["text","\\n"],["block",["item-review"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('burger-app/tests/integration/components/item-review/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/item-review/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/item-review/component-test.js should pass jshint.');
  });
});
define('burger-app/tests/integration/components/modal-actions/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('modal-actions', 'Integration | Component | modal actions', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': null,
      'block': '{"statements":[["append",["unknown",["modal-actions"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': null,
      'block': '{"statements":[["text","\\n"],["block",["modal-actions"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('burger-app/tests/integration/components/modal-actions/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/modal-actions/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/modal-actions/component-test.js should pass jshint.');
  });
});
define('burger-app/tests/integration/components/navigation/footer-main/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('navigation/footer-main', 'Integration | Component | navigation/footer main', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': null,
      'block': '{"statements":[["append",["unknown",["navigation/footer-main"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': null,
      'block': '{"statements":[["text","\\n"],["block",["navigation/footer-main"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('burger-app/tests/integration/components/navigation/footer-main/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/navigation/footer-main/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/navigation/footer-main/component-test.js should pass jshint.');
  });
});
define('burger-app/tests/integration/components/start-review/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('start-review', 'Integration | Component | start review', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      'id': null,
      'block': '{"statements":[["append",["unknown",["start-review"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      'id': null,
      'block': '{"statements":[["text","\\n"],["block",["start-review"],null,null,0],["text","  "]],"locals":[],"named":[],"yields":[],"blocks":[{"statements":[["text","      template block text\\n"]],"locals":[]}],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('burger-app/tests/integration/components/start-review/component-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/start-review/component-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/start-review/component-test.js should pass jshint.');
  });
});
define('burger-app/tests/models/item.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/item.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/item.js should pass jshint.');
  });
});
define('burger-app/tests/models/place.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/place.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/place.js should pass jshint.');
  });
});
define('burger-app/tests/models/post.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/post.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/post.js should pass jshint.');
  });
});
define('burger-app/tests/models/review.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/review.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/review.js should pass jshint.\nmodels/review.js: line 3, col 21, \'hasMany\' is defined but never used.\n\n1 error');
  });
});
define('burger-app/tests/models/user.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/user.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass jshint.');
  });
});
define('burger-app/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('burger-app/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 12, col 5, Missing semicolon.\n\n1 error');
  });
});
define('burger-app/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/application.js should pass jshint.\nroutes/application.js: line 25, col 11, \'item\' is defined but never used.\n\n1 error');
  });
});
define('burger-app/tests/routes/reviews.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/reviews.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/reviews.js should pass jshint.');
  });
});
define('burger-app/tests/routes/reviews/create.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/reviews/create.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/reviews/create.js should pass jshint.\nroutes/reviews/create.js: line 9, col 14, \'error\' is defined but never used.\n\n1 error');
  });
});
define('burger-app/tests/routes/reviews/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/reviews/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/reviews/index.js should pass jshint.\nroutes/reviews/index.js: line 8, col 49, \'error\' is defined but never used.\nroutes/reviews/index.js: line 13, col 33, \'model\' is defined but never used.\nroutes/reviews/index.js: line 13, col 21, \'controller\' is defined but never used.\n\n3 errors');
  });
});
define('burger-app/tests/services/location.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/location.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/location.js should pass jshint.\nservices/location.js: line 6, col 53, \'reject\' is defined but never used.\n\n1 error');
  });
});
define('burger-app/tests/services/places.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/places.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/places.js should pass jshint.\nservices/places.js: line 7, col 18, \'coords\' is defined but never used.\n\n1 error');
  });
});
define('burger-app/tests/test-helper', ['exports', 'burger-app/tests/helpers/resolver', 'ember-qunit'], function (exports, _burgerAppTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_burgerAppTestsHelpersResolver['default']);
});
define('burger-app/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('burger-app/tests/transitions.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | transitions.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'transitions.js should pass jshint.\ntransitions.js: line 2, col 9, \'duration\' is defined but never used.\n\n1 error');
  });
});
define('burger-app/tests/transitions/down.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | transitions/down.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transitions/down.js should pass jshint.');
  });
});
define('burger-app/tests/transitions/modals.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | transitions/modals.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transitions/modals.js should pass jshint.');
  });
});
define('burger-app/tests/transitions/up.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | transitions/up.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'transitions/up.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('burger-app/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map