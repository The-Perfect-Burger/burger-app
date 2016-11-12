import AjaxService from 'ember-ajax/services/ajax';
import injectService from 'ember-service/inject';
import computed from 'ember-computed-decorators';

export default AjaxService.extend({

  namespace: '/api',

  session: injectService(),

  @computed('session.token')
  headers(token) {
    return {
      // 'X-CSRF-Token': token,
      'Content-Type': 'application/vnd.api+json'
    };
  }

});
