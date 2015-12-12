class LinkActions {
  create(link){
    this.dispatch(link);
  }

  destroy(linkId){
    this.dispatch(linkId);
  }
}

this.LinkActions = alt.createActions(LinkActions);
