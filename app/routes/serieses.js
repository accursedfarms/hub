import Ember from 'ember';
const civilProtectionDescription = `Civil Protection is a science-fiction comedy series named after the policing force from the game Half-Life 2. It takes place in an alternate future where the Earth has been conquered by aliens. Its protagonists are Mike and Dave, two patrol officers that belong to the Civil Protection force. Episodes are non-sequential and can be watched in any order. Due to language and violence, most episodes will be in a PG to PG-13 rating, however I make no promises.`;
const freemansMindDescription = `Ross’s Game Dungeon is a sort-of games review show. Usually no one dies.`;
const gameDungeonDescription = `Ross’s Game Dungeon is a sort-of games review show. Usually no one dies.`;
const othersDescription = `This is where all non-series videos will appear.`;

export default Ember.Route.extend({
  model() {
    return Ember.A([
      {
        name: 'Ross\'s Game Dungeon ',
        description: gameDungeonDescription,
        thumbnail: 'http://www.accursedfarms.com/images/other/rgd_strife_th.jpg',
        playlist: 'PL6PNZBb6b9Ltgl6WM5rn2pjrXd_qdit2S',
      },
      {
        name: 'Freeman\'s mind',
        description: freemansMindDescription,
        thumbnail: 'http://www.accursedfarms.com/wp-content/uploads/2010/10/ep028.jpg',
        playlist: 'PL6PNZBb6b9Ltgl6WM5rn2pjrXd_qdit2S',
      },
      {
        name: 'Civil protection',
        description: civilProtectionDescription,
        thumbnail: 'http://www.accursedfarms.com/wp-content/uploads/2010/10/ep0051.jpg',
        playlist: 'PL6PNZBb6b9Ltgl6WM5rn2pjrXd_qdit2S',
      },
      {
        name: 'Others',
        description: othersDescription,
        thumbnail: 'http://www.accursedfarms.com/images/other/rossrants3d_th.jpg',
        playlist: 'PL6PNZBb6b9Ltgl6WM5rn2pjrXd_qdit2S',
      },
    ]);
  },
});
