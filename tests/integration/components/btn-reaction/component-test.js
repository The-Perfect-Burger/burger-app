import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('btn-reaction', 'Integration | Component | btn reaction', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{btn-reaction}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#btn-reaction}}
      template block text
    {{/btn-reaction}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
