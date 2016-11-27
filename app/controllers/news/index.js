import Ember from 'ember';
import DS from 'ember-data';
const {computed, inject: {service}} = Ember;
const {PromiseArray} = DS;

export default Ember.Controller.extend({
  website: service(),

  news: computed(function() {
    const promise = this.get('website').getNews();

    return PromiseArray.create({promise});
  }),
});
