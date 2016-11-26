import Ember from 'ember';
const {computed} = Ember;

export default Ember.Controller.extend({
  isInside: computed('currentPath', function() {
    return this.get('currentPath') !== 'index';
  }),
});
