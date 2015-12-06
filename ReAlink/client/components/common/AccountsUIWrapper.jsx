Accounts.onLogin((user)=>{
  redirect = Session.get('redirectAfterLogin');
  if(redirect != null) {
    if(redirect !== '/AccessDenied'){
      return FlowRouter.go(redirect);
    }
  }
});
accountsUIBootstrap3.logoutCallback = function(error) {
  if(error) console.log("Error:" + error);
  FlowRouter.go('/');
}
AccountsUIWrapper = React.createClass({
  componentDidMount() {
    // Use Meteor Blaze to render login buttons
    debugger;
    this.view = Blaze.render(Template._loginButtons,
      ReactDOM.findDOMNode(this.refs.container));
  },
  componentWillUnmount() {
    // Clean up Blaze view
    Blaze.remove(this.view);
  },
  render() {
    // Just render a placeholder container that will be filled in
    return (
      <ul className="nav navbar-nav navbar-right" ref="container">
      </ul>
    )
  }
})
