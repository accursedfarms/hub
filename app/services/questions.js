import Ember from 'ember';
import rawQuestions from '../fixtures/questions/loader';
import lunr from "npm:lunr";
import youtubeTime from '../utils/youtube-time';
const {computed} = Ember;

export default Ember.Service.extend({
  getObjectForVideo(videoId) {
    return this.get('questions').find(question => question.batch.videoId === videoId).batch;
  },

  getQuestionsForVideo(videoId) {
    return this.get('questions').filter(question => question.batch.videoId === videoId);
  },

  find(query, date) {
    const results = this.get('index').search(query);
    const questions = this.get('questions');

    const answers = results.map(result => questions.findBy('id', result.ref));

    if (!date) {
      return answers;
    }

    return answers.filter(answer => answer.batch.publishedAt === date);
  },

  questions: computed(() => {
    const questions = [];

    rawQuestions.forEach(batch => {
      batch.questions.forEach((question, index) => {
        question.batch = batch;
        question.id = batch.publishedAt + index;
        question.timeInSeconds = youtubeTime(question.time);
        questions.push(question);
      });
    });

    return questions;
  }),

  index: computed(function() {
    const idx = lunr(function() {
      this.field('question');
    });

    this.get('questions').forEach(question => idx.add(question));

    return idx;
  }),
});
