import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    createReview(item) {
      this.transitionToRoute('reviews.create',
        this.store.createRecord('review', {
          item
      }));

      ;
    }

  }

});
