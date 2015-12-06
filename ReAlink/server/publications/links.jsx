/*     ## Link Publication ##
          ----------------
All publication related code.

*/
Meteor.publish('links', function () {
  if (this.userId) {
    return Links.find({ createdBy: this.userId }, { fields: { 'tags': 1,'title': 1,'color': 1, 'createdAt': 1 } });
  } else {
    this.ready();
  }
});
Meteor.publish('linksWithDetail', function () {
  if (this.userId) {
    return Links.find({ createdBy: this.userId });
  } else {
    this.ready();
  }
});
