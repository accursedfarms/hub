import nextChatFromDate from 'hub/utils/next-chat-from-date';
import {module, test} from 'qunit';
import moment from 'moment';

module('Unit | Utility | next chat from date');

// Replace this with your real tests.
test('it works', assert => {
  const tests = [
    {current: '2016-11-07', expected: '2016-12-04'},
    {current: '2016-11-17', expected: '2016-12-04'},
    {current: '2016-11-27', expected: '2016-12-04'},
    {current: '2016-12-05', expected: '2017-01-01'},
    {current: '2016-12-10', expected: '2017-01-01'},
    {current: '2016-12-27', expected: '2017-01-01'},
  ];

  tests.forEach(dates => {
    assert.ok(
      nextChatFromDate(moment(dates.current)).isSame(dates.expected, 'day'),
      `Current: ${dates.current}, expected: ${dates.expected}, GC: ${nextChatFromDate(moment(dates.current)).format('l')}`
    );
  });
});
