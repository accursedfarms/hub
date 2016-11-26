import Ember from 'ember';
const {inject: {service}} = Ember;

export default Ember.Route.extend({
  youtube: service(),

  model() {
    return this.get('youtube').getVideosFromPlaylist(this.modelFor('series').playlist);
  },

  setupController(controller, model) {
    return this._super(controller, model.items.map(item => item.snippet));
  },
});
