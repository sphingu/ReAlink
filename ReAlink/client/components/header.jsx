Header = React.createClass({

  // componentWillMount(){
  //   // this.setState({
  //   //   muiTheme: newTheme
  //   // });
  // },

  // getInitialState() {
  //   return {
  //     muiTheme: ThemeManager.getMuiTheme(DefaultRawTheme)
  //   };
  // },

  // contextTypes : {
  //   router: React.PropTypes.func
  // },

  // childContextTypes : {
  //   muiTheme: React.PropTypes.object
  // },

  // getChildContext() {
  //  return {
  //    muiTheme: this.state.muiTheme
  //  };
  // },

  // getMenuItems() {
  //   return [
  //     { target: "/", text: "Home" },
  //     { target: "/feature", text: "Feature" },
  //     { target: "/contact", text: "Contact" }
  //   ];
  // },
  // _onLeftNavChange(e, selectedIndex, menuItem) {
  //    if(menuItem.target){
  //      FlowRouter.go(menuItem.target);
  //      //this._toggleLeftNav();
  //   }
  // },
  // _toggleLeftNav(){
  //   this.refs.leftNav.toggle();
  // },
  render(){
    return (
      <header>
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#"><i className="fa fa-shield fa-fw"></i>URL Store</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li className="active">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/Contact">Contact</a>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
});
