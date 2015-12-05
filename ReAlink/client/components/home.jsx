const { List,ListItem } = mui;
const {ContentInbox,ActionGrade,ContentSend,ContentDrafts } = mui.SvgIcons;
Home = React.createClass({
  render(){
    return (
      <List>
  <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
  <ListItem primaryText="Starred" leftIcon={<ActionGrade />} />
  <ListItem primaryText="Sent mail" leftIcon={<ContentSend />} />
  <ListItem primaryText="Drafts" leftIcon={<ContentDrafts />} />
  <ListItem primaryText="Inbox" leftIcon={<ContentInbox />} />
</List>
    );
  }
});
