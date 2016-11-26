import Ember from 'ember';

const {computed, observer, ObjectProxy} = Ember;

export default Ember.Controller.extend({
  proxiedQuestions: computed('questions', function() {
    return this.get('questions')
      .map(question => ObjectProxy.create({
        content: question,
        isActive: true,
      }));
  }),

  playerTimeObserver: observer('player.currentTime', function() {
    this.get('proxiedQuestions').forEach(question => {
      question.set('isActive', question.get('timeInSeconds') > this.get('player.currentTime'));
    });
  }),
});
