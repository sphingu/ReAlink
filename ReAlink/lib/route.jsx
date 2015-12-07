
exposed = FlowRouter.group({});

exposed.route('/',{
  name: 'Home',
  action: (params) => {
    renderMainLayoutWith(<Home />);
    setTitle('Home');
  }
});

exposed.route('/AccessDenied',{
  name: 'AccessDenied',
  action: (params) => {
    renderMainLayoutWith(<AccessDenied />);
    setTitle('AccessDenied');
  }
});

loggedIn = FlowRouter.group({
  triggersEnter: [
    () => {
      if(!(Meteor.loggingIn() || Meteor.userId())){
        route = FlowRouter.current();
        if(route.route.name !== 'AccessDenied'){
          Session.set('redirectAfterLogin', route.path);
        }
        return FlowRouter.go('/AccessDenied');
      }
    }
  ]
});

loggedIn.route('/Links',{
  name: 'Links',
  triggersEnter: [ function() {
   console.log( "Something to do on ENTER." );
 }],
 subscriptions : function () {
   console.log('subscription goes here.');
 },
  action: (params) => {
    renderMainLayoutWith(<LinkList />);
    setTitle('Links');
  },
  triggersExit: [ function() {
    console.log( "Something to do on EXIT." );
  }]
});

let renderMainLayoutWith = (component) => {
  ReactLayout.render(MainLayout, {
    component: component
  });
};
