import Ember from 'ember';

// const availableStates = [
//   { start: 0 },
//   { outcome: 1 },
//   { comment: 2 }
// ];

const states = [
  'start',
  'outcome',
  'comment'
];

export default Ember.Component.extend({

  index: 0,

  activeState: Ember.computed('index', function() {
    return {
      index: this.get('index'),
      componentName: states[this.get('index')]
    }
  }),

  quickReview: Ember.computed(function() {
    return {

    }
  }),

  actions: {

    addOutcome(value) {
      this.set('quickReview.reaction', value);
    },

    addComment(value) {
      this.set('quickReview.body', value);
    },

    next() {
      this.incrementProperty('index');
    },

    prev() {
      this.decrementProperty('index');
    },

    changeState(value) {
      this.set('activeComponentName', value);
    }

  }
});
