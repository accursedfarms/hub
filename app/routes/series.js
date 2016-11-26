import Ember from 'ember';
import serieses from '../fixtures/serieses';
const {inject: {service}} = Ember;

export default Ember.Route.extend({
  youtube: service(),

  model(params) {
    return serieses.findBy('playlist', params.playlist);
  },
});
