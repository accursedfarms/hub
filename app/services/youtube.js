import Ember from 'ember';
const {inject: {service}} = Ember;
const key = 'AIzaSyDldy9MSzDgX9dbLNJFpT2bTTsoI9XbSFM';
const url = 'https://www.googleapis.com/youtube/v3/playlistItems';

export default Ember.Service.extend({
  ajax: service(),

  getVideosFromPlaylist(playlistId) {
    return this.get('ajax').request(url, {
      data: {
        maxResults: 50,
        part: 'id,snippet',
        playlistId,
        key,
      },
    });
  },
});
