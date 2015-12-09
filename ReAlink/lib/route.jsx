
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
loggedIn.route('/AddLink',{
  name: 'AddLink',
  action: (params) =>{
    renderMainLayoutWith(<AddLink />);
    setTitle('Add Link');
  }
});
loggedIn.route('/LinkDetail/:id',{
  name: 'LinkDetail',
  action: (params) =>{
    renderMainLayoutWith(<LinkDetail id={params.id} />);
    setTitle('Link Detail');
  }
});
loggedIn.route('/LinkEdit/:id',{
  name: 'LinkEdit',
  action: (params) =>{
    renderMainLayoutWith(<LinkEdit id={params.id} />);
    setTitle('Link Edit');
  }
});

let renderMainLayoutWith = (component) => {
  ReactLayout.render(MainLayout, {
    component: component
  });
};
