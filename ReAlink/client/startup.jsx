Meteor.startup(() => {
  sAlert.config({
    effect: 'flip',
    position: 'left-bottom',
    timeout: 5000
  });
  trackCollection(Links, LinkListActions.linksChanged)
});
