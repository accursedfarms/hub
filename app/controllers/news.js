import Ember from 'ember';
import nextChatFromDate from '../utils/next-chat-from-date';
import moment from 'moment';
import DS from 'ember-data';
const {computed, inject: {service}} = Ember;
const {PromiseObject} = DS;


export default Ember.Controller.extend({
  youtube: service(),

  nextGameDungeon: computed(function() {
    const promise = this.get('youtube').getNextGameDungeon();

    return PromiseObject.create({promise});
  }),

  nextVideoChat: computed(() => nextChatFromDate(moment())),
});
