/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'burger-app',
    environment: environment,
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    cordova: {
      rebuildOnChange: false,
      emulate: false,
      emberUrl: 'http://192.168.2.10:4200',
      liveReload: {
        enabled: true,
        platform: 'ios'
      }
    },

    torii: {
    	sessionServiceName: 'session',
    	remoteServiceName: 'iframe',
      providers: {
        'facebook-connect': {
          appId: '1464321663860012',
          scope: 'email,user_birthday'
        }
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV.api = {
    development: {
      host: 'http://localhost:4000',
      namespace: 'api'
    }
  }[environment];

  if (environment === 'development') {
    ENV['ember-cli-mirage'] = {
      enabled: true
    }
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
