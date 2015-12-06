const { AppBar, IconButton, IconMenu, LeftNav } = mui;
const { MenuItem } = mui.Menus;
const { NavigationMoreVert } = mui.SvgIcons;

const Styles = mui.Styles;
const Colors = Styles.Colors;
const ThemeManager = Styles.ThemeManager;
const DefaultRawTheme = Styles.DarkRawTheme;

Header = React.createClass({

  componentWillMount(){
    let Theme = this.state.muiTheme;
    const appPalette = {
      textColor: Colors.darkBlack,
      alternateTextColor: Colors.white,
      canvasColor: Colors.white,
    };
    var newTheme = ThemeManager.modifyRawThemePalette(Theme,appPalette);
    this.setState({
      muiTheme: newTheme
    });
  },

  getInitialState() {
    return {
      muiTheme: ThemeManager.getMuiTheme(DefaultRawTheme)
    };
  },

  contextTypes : {
    router: React.PropTypes.func
  },

  childContextTypes : {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
   return {
     muiTheme: this.state.muiTheme
   };
  },

  getMenuItems() {
    return [
      { target: "/", text: "Home" },
      { target: "/feature", text: "Feature" },
      { target: "/contact", text: "Contact" }
    ];
  },
  _onLeftNavChange(e, selectedIndex, menuItem) {
     if(menuItem.target){
       FlowRouter.go(menuItem.target);
       //this._toggleLeftNav();
    }
  },
  _toggleLeftNav(){
    this.refs.leftNav.toggle();
  },
  render(){
    return (
      <div>
      <LeftNav
        ref="leftNav"
        docked={false}
        menuItems={this.getMenuItems()}
        onChange={this._onLeftNavChange}
        />
      <AppBar
        title="ReAlink"
        onLeftIconButtonTouchTap={this._toggleLeftNav}
        style={{backgroundColor: Colors.deepPurple400}}
        iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton>
                <NavigationMoreVert />
              </IconButton>
            } >
            <MenuItem primaryText="Help" index={1} />
            <MenuItem primaryText="Sign out" index={2} />
          </IconMenu>
        } />
    </div>
    );
  }
});
