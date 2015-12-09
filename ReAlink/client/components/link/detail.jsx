LinkDetail = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData(){
    const handle = Meteor.subscribe('link',this.props.id);
    const data = {};
    if(handle.ready()){
      data.link = Links.findOne({ _id: this.props.id });
    }
    return data;
  },
  getDetailView(link){
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{link.title}</h3>
          <div style={{float:'right', marginTop:-12+'px'}}>
    				<a className="btn btn-default" href={FlowRouter.path('Links')}><span className="glyphicon glyphicon-circle-arrow-left"></span></a>
            <a className="btn btn-primary" href={FlowRouter.path('LinkEdit',{id: link._id})}><span className="glyphicon glyphicon-pencil"></span></a>
    			</div>
        </div>
        <div className="panel-body">
          <p>
            <span className="glyphicon glyphicon-time"></span> {moment(link.createdAt).fromNow()}
          </p>
          <p>
            {link.body}
          </p>
        </div>
      </div>
    );
  },
  getLoadingText(){
    return (<h2 className="text-center">LOADING ...  </h2>);
  },
  render(){
    return (
      <div>
        {(this.data.link)? this.getDetailView(this.data.link) : this.getLoadingText()}
      </div>
    );
  }
});
