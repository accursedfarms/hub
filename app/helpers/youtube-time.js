import Ember from 'ember';
import youtubeTimeUtil from '../utils/youtube-time';

export function youtubeTime(params) {
  if (params.length === 1) {
    return youtubeTimeUtil(params[0]);
  }

  return undefined;
}

export default Ember.Helper.helper(youtubeTime);
