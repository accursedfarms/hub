import Ember from 'ember';
const {inject: {service}} = Ember;

export default Ember.Route.extend({
  website: service(),

  model() {
    return this.get('website').getNews();
  },
});
