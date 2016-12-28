import Ember from 'ember';
import config from './config/environment';
const {get, on} = Ember;

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,

  pageviewToGA: on('didTransition', function(page = this.get('url'), title = this.get('url')) {
    if (get(config, 'googleAnalytics.webPropertyId') !== null) {
      ga('send', 'pageview', {page, title});
    }
  }),
});

Router.map(function() {
  this.route('news', () => {});
  this.route('series', {path: '/series/:playlist'}, () => {});
  this.route('serieses', {path: '/series'});
  this.route('questions', function() {
    this.route('video', {path: '/video/:video'});
  });
});

export default Router;
