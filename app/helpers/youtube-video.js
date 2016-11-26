import Ember from 'ember';

export function youtubeVideo([videoId], {time}) {
  let link = `https://youtu.be/${videoId}`;

  if (time) {
    link += '?t=' + time;
  }

  return link;
}

export default Ember.Helper.helper(youtubeVideo);
