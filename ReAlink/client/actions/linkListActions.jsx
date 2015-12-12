class LinkListActions{
  linksChanged(links){
    this.dispatch(links);
  }
}

this.LinkListActions = alt.createActions(LinkListActions);
