import Ember from 'ember';
import moment from 'moment';
const {computed, inject: {service}} = Ember;
const key = 'AIzaSyDldy9MSzDgX9dbLNJFpT2bTTsoI9XbSFM';
const url = 'https://www.googleapis.com/youtube/v3/playlistItems';
const gameDungeon = 'PL6PNZBb6b9Ltgl6WM5rn2pjrXd_qdit2S';

export default Ember.Service.extend({
  ajax: service(),

  getVideosFromPlaylist(playlistId) {
    if (playlistId === gameDungeon) {
      return this.get('_gameDungeon');
    }

    return this._loadVideoFromPlaylist(playlistId);
  },

  _loadVideoFromPlaylist(playlistId) {
    return this.get('ajax').request(url, {
      data: {
        maxResults: 50,
        part: 'id,snippet',
        playlistId,
        key,
      },
    });
  },

  _gameDungeon: computed(function() {
    return this._loadVideoFromPlaylist('PL6PNZBb6b9Ltgl6WM5rn2pjrXd_qdit2S');
  }),

  getNextGameDungeon() {
    return this.get('_gameDungeon').then(res => {
      const releases = res.items.map(video => video.snippet.publishedAt).sort();
      const diff = [];

      for (let i = 0; i < releases.length - 1; ++i) {
        const start = moment(releases[i + 1]);
        const end = moment(releases[i]);
        const duration = moment.duration(start.diff(end));
        diff.push(duration.asDays());
      }

      const filteredDiff = diff.filter(diff => diff > 1);
      const avg = filteredDiff.reduce((carry, next) => carry + next, 0) / filteredDiff.length;
      const max = releases.reduce((carry, next) => carry > next ? carry : next);

      return moment(max).add(avg, 'days');
    });
  },
});
