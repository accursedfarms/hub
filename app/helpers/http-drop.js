import Ember from 'ember';

const remove = [
  'Download the full game for free below!',
  'www.accursedfarms.com',
];

function reverseString(str) {
  const strArray = str.split("");
  strArray.reverse();
  return strArray.join("");
}

function strReplaceMap(text, filter) {
  let str = text;

  filter.forEach(key => {
    str = str.replace(key, '');
  });

  return str;
}

export function httpDrop([text]) {
  const http = text.indexOf('http');
  if (http === -1) {
    return strReplaceMap(text, remove);
  }

  const snippet = text.substring(0, http);
  const tail = reverseString(snippet).search(/[.?!]/);
  const cleanerText = snippet.substring(0, snippet.length - tail);

  return strReplaceMap(cleanerText, remove);
}

export default Ember.Helper.helper(httpDrop);
