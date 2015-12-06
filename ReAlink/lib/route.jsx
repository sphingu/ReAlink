FlowRouter.route('/',{
  name: 'home',
  action: (params) => {
    renderMainLayoutWith(<Home />);
    setTitle('Home');
  }
});

FlowRouter.route('/Contact',{
  name: 'Contact',
  action: (params) => {
    renderMainLayoutWith(<Contact />);
    setTitle('Contact');
  }
});

FlowRouter.route('/Feature',{
  name: 'Feature',
  action: (params) => {
    renderMainLayoutWith(<Feature />);
    setTitle('Feature');
  }
});

let renderMainLayoutWith = (component) => {
  ReactLayout.render(MainLayout, {
    component: component
  });
};
