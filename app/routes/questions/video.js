import Ember from 'ember';
const {inject: {service}} = Ember;

export default Ember.Route.extend({
  questionsService: service('questions'),

  model(params) {
    return this.get('questionsService').getObjectForVideo(params.video);
  },

  setupController(controller, model) {
    this._super(controller, model);

    const questions = this.get('questionsService').getQuestionsForVideo(model.videoId);
    controller.set('questions', questions);
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      controller.set('time', null);
      controller.set('autoplay', 0);
    }
  },
});
