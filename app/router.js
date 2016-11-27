import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
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
