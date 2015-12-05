FlowRouter.route('/',{
  name: 'home',
  action: (params) => {
    renderMainLayoutWith(<Home />);
    setTitle('Home');
  }
});

let renderMainLayoutWith = (component) => {
  ReactLayout.render(MainLayout, {
    component: component
  });
};
