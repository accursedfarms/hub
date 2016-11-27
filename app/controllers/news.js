import Ember from 'ember';
import nextChatFromDate from '../utils/next-chat-from-date';
import moment from 'moment';
const {computed, inject: {service}} = Ember;

export default Ember.Controller.extend({
  youtube: service(),

  nextGameDungeon: computed(function() {
    return this.get('youtube').getNextGameDungeon();
  }),

  nextVideoChat: computed(() => nextChatFromDate(moment())),
});
