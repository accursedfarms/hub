import Ember from 'ember';
import youtubeTime from '../../utils/youtube-time';
const {computed, observer, ObjectProxy} = Ember;

export default Ember.Controller.extend({
  queryParams: ['time'],
  time: null,

  startSeconds: computed('time', function() {
    const time = this.get('time');

    if (time) {
      return youtubeTime(time);
    }

    return undefined;
  }),

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
