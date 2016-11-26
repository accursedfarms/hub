import Ember from 'ember';

export function youtubeVideo([videoId]) {
  return `https://youtube.com/watch?v=${videoId}`;
}

export default Ember.Helper.helper(youtubeVideo);
