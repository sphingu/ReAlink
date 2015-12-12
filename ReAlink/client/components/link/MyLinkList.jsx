class LinkListContainer extends React.Component{
  constructor(props){
    super(props);
    console.log('Component constructor get state start');
    this.state = LinkStore.getState();
    console.log('Component constructor get state end');
  }

  componentDidMount(){
    console.log('set store listener for state change DIDMOUNT');
    LinkStore.listen(this.onChange.bind(this));
  }
  componentWillUnmount(){
    console.log('set store unlistener for state change DIDUNMOUNT');
    LinkStore.unlisten(this.onChange.bind(this));
  }
  onChange(state){
    console.log('set state from onCHnage start');
    this.setState(state);
    console.log('set state from onCHnage end');
  }

  getViewTypeIcon(){
    return this.state.isThumbView? 'glyphicon glyphicon-th-list' : 'glyphicon glyphicon-th-large';
  }
  onChangeView(){
    this.setState({
      isThumbView: !this.state.isThumbView
    });
  }
  onDetailClick(linkId){
    console.log('detail clicked');
    FlowRouter.go(FlowRouter.path("LinkDetail",{id: linkId}));
  }
  onRemoveClick(e){
    console.log('removeClicked');
    e.stopPropagation();
  }
  getAlphaColorStyle(hexColor){
    const color = tinycolor(hexColor || "#fff");
    const alphacolor = color.setAlpha(.5);
    return {
        backgroundColor : alphacolor ,
        border:'1px solid' + hexColor
      };
  }

  getLinkThumb(){
    return (
      <div className="row">
        {this.state.links.map((link) => {
          return (this.getLinkThumbView(link));
        })}
      </div>
    )
  }
  getLinkThumbView(link){
    return (
    <div key={link._id} className="col-md-4">
      <div className="thumbnail" style={this.getAlphaColorStyle(link.color)} onClick={(this.onDetailClick.bind(this,link._id))}>
        <div className="caption">
          <h4 style={{marginTop:0,fontWeight:'bold'}} title={link.title}>{link.title}</h4>
          <p><span className="glyphicon glyphicon-tag"></span>
            {link.tags.map((tag) => {
              return (<span key={tag} className='label label-primary'>{tag}</span>)
            })}
          </p>
          <p><span className="glyphicon glyphicon-time"></span>{moment(link.createdAt).fromNow()}</p>
        </div>
      </div>
    </div>
    );
  }
  getLinkList(){
    return(
      <table className="table table-striped table-hover">
        <thead>
            <tr>
                <th>{LinksSchema.label('title')}</th>
                <th>{LinksSchema.label('rating')}</th>
                <th>{LinksSchema.label('createdAt')}</th>
                <th>{LinksSchema.label('updatedAt')}</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
          {this.state.links.map((link) => {
            return (this.getLinkListView(link));
          })}
        </tbody>
      </table>
    )
  }
  getLinkListView(link){
    return(
      <tr key={link._id} style={this.getAlphaColorStyle(link.color)} onClick={this.onDetailClick.bind(this,link._id)}>
        <td>{link.title}</td>
        <td>{link.rating}</td>
        <td>{moment(link.createdAt).fromNow()}</td>
        <td>{moment(link.updatedAt).fromNow()}</td>
        <td>
            <a href="#" className="delete btn btn-primary btn-xs" onClick={this.onRemoveClick} title="Delete link">Delete</a>
        </td>
    </tr>
    );
  }

  noLinkText(){
    return (<h3 className="text-center text-capitalize">your awesome links goes here</h3>);
  }
  render(){
    if(this.state.isLoading){
      return (<h2 className="text-center">LOADING ...  </h2>);
    }
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
            <h3 className="panel-title">Links
                (<span>{this.state.links.length}</span>)
            </h3>
            <div style={{float:'right',marginTop:'-12px'}}>
                <a href={FlowRouter.path('AddLink')} className="btn btn-primary" title="Add link">
                    <span className="glyphicon glyphicon-plus"></span>
                </a>
                <a href="#" className="btn btn-default" onClick={this.onChangeView.bind(this)} title="Change view">
                    <span className={this.getViewTypeIcon()}></span>
                </a>
            </div>
        </div>
        <div className="panel-body">
          {(this.state.links.length)? (this.state.isThumbView ? this.getLinkThumb() : this.getLinkList()) : this.noLinkText()}
        </div>
      </div>
    );
  }
}
this.LinkListContainer = LinkListContainer;
