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
    borderColor: Colors.yellow,
    disabledColor: Colors.grey300
    };
    var newTheme = ThemeManager.modifyRawThemePalette(Theme,appPalette);
    newTheme.inkBar.backgroundColor = Colors.yellow200;
    this.setState({
      muiTheme: newTheme
    });
  },
  getInitialState() {
    return {
      muiTheme: ThemeManager.getMuiTheme(DefaultRawTheme)
    };
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
      { route: "home", text: "Home" },
      { route: "feature", text: "Feature" },
      { route: "contact", text: "Contact" }
    ];
  },
  render(){
    return (
      <div>
      <LeftNav
        ref="leftNav"
        docked={false}
        menuItems={this.getMenuItems()} />
      <AppBar
        title="ReAlink"
        onLeftIconButtonTouchTap={()=>this.refs.leftNav.toggle()}
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
