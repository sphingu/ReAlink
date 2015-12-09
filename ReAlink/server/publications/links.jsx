/*     ## Link Publication ##
          ----------------
All publication related code.

*/
Meteor.publish('links', function () {
  if (this.userId) {
    return Links.find({}, { fields: { 'tags': 1,'title': 1,'color': 1, 'createdAt': 1 } });
  } else {
    this.ready();
  }
});
Meteor.publish('link', function (linkId) {
  if (this.userId) {
    return Links.find({_id: linkId});
  } else {
    this.ready();
  }
});
