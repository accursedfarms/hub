import Ember from 'ember';
const {inject: {service}} = Ember;

export default Ember.Route.extend({
  youtube: service(),

  model(params) {
    return this.get('youtube').getVideosFromPlaylist(params.playlist);
  },

  setupController(controller, model) {
    return this._super(controller, model.items.map(item => item.snippet));
  },
});
