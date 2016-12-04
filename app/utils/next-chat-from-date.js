import moment from 'moment';

const chatDates = [
  '2016-12-03 16:00-05',
  '2017-01-07 16:00-05',
  '2017-02-04 16:00-05',
];

export default function nextChatFromDate(date) {
  let last = null;

  chatDates.forEach(chat => {
    // is closer to today && is in future
    if ((!last || moment(last).isAfter(chat)) && moment(date).isBefore(chat)) {
      last = chat;
    }
  });

  return moment(last);
}
