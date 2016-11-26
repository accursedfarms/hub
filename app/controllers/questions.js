import Ember from 'ember';
const {inject: {service}, computed} = Ember;

export default Ember.Controller.extend({
  questionsService: service('questions'),

  questions: computed('query', function() {
    return this.get('questionsService').find(this.get('query'));
  }),
});
