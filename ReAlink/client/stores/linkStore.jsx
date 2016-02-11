class LinkStore{
  constructor(){
    console.log('LinkStore ctor bindListern');
    this.bindListeners({
      onLinksChanged : LinkListActions.linksChanged,
      onCreate: LinkActions.create,
      onDestroy: LinkActions.destroy
    });
    console.log('LinkStore ctor bindListern end and set state start');
    this.state = {
      links : [],
      linkId: '',
      link: '',
      isThumbView: false,
      isLoading: true
    };
  }

  onLinksChanged(){
    console.log('onLinksChanged start');
    this.setState({
      links: Link.findAll(),
      link: this.state.linkId !=='' ? Link.findOne(this.state.linkId) : '',
      isLoading: false
    });
    console.log('onLinksChanged end');
  }

  onCreate(link) {
    // Call save method for collection.
  }

  onDestroy(linkId){
    // Call deelete method for collection
  }
}

this.LinkStore = alt.createStore(LinkStore,"LinkStore");
