import Ember from 'ember';
import serieses from '../fixtures/serieses';

export default Ember.Route.extend({
  model() {
    return serieses;
  },
});
