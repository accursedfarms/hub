import Ember from 'ember';
const {$, inject: {service}, RSVP} = Ember;
const url = 'http://www.accursedfarms.com/';

export default Ember.Service.extend({
  ajax: service(),

  getNews() {
    return this._fetch().then(res => {
      return $(res).find('.post').map((_, _raw) => {
        const raw = $(_raw);
        const post = {};
        post.url = raw.find('.title h2 a').attr('href');
        post.title = raw.find('.title h2 a').text();
        post.text = raw.find('.entry').text();
        post.publishedAt = this._parseDate(raw.find('.date').text());
        return post;
      });
    });
  },

  _parseDate(date) {
    const year = date.match(/(\d{4})/)[1];
    const month = date.match(/(\d{2})\./)[1];
    const day = date.match(/\.(\d{2})/)[1];

    return new Date(year, month, day);
  },

  _fetch() {
    return new RSVP.Promise((res, rej) => {
      $.getJSON('//whateverorigin.org/get?url=' + encodeURIComponent(url) + '&callback=?', data => {
        res(data.contents);
      }).catch(e => {
        rej(e);
      });
    });
  },
});
