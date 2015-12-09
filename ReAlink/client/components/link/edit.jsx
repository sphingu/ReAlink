LinkEdit = React.createClass({
  mixins: [ReactMeteorData,React.addons.LinkedStateMixin],
  getMeteorData(){
    const handle = Meteor.subscribe('link',this.props.id);
    const data = {};
    if(handle.ready()){
      data.link = Links.findOne({ _id: this.props.id });
    }
    return data;
  },
  getInitialState: function() {
    return {
      title: '',
      body: '',
      tags: [],
      color: ''
    };
  },
  onSaveClick(){
    console.log('save clicked');
  },
  onCancelClick(){
    console.log('on cancel clicked');
  },
  componentDidMount(){
    if (this.isMounted()) {
      this.setState(this.data.link);
    }
  },
  getEditView(){
    return (<div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">Save Link</h3>
        <div style={{float:'right', marginTop:-12+'px'}}>
          <button type="submit" className="btn btn-primary" onClick={this.onSaveClick} title="Save link"><span className="glyphicon glyphicon-ok"></span></button>
          <button type="reset" className="btn btn-default" onClick={this.onCancelClick} title="Cancel"><span className="glyphicon glyphicon-remove"></span></button>
        </div>
      </div>
      <div className="panel-body">
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="txtTitle" className="col-lg-3 control-label">{LinksSchema.label('title')}</label>
            <div className="col-lg-9">
              <input className="form-control" id="txtTitle" placeholder={LinksSchema.label('title')} type="text" valueLink={this.linkState('title')} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="txtBody" className="col-lg-3 control-label">{LinksSchema.label('body')}</label>
            <div className="col-lg-9">
              <textarea className="form-control" id="txtBody" cols="30" style={{height:500+'px'}} rows="10" placeholder="{LinksSchema.label('body')}" valueLink={this.linkState('body')}></textarea>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="txtTags" className="col-lg-3 control-label">{LinksSchema.label('tags')}</label>
            <div className="col-lg-9">
              <select className="form-control" multiple id="txtTags" valueLink={this.linkState('tags')}>
                {this.state.tags.map((tag) => {
                  return (<option key={tag} value={tag}>{tag}</option>)
                })}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label htmlhtmlFor="txtColor" className="col-lg-3 control-label">{LinksSchema.label('color')}</label>
            <div className="col-lg-9">
              <input type="color" valueLink={this.linkState('color')} className="form-control" />
            </div>
          </div>
          <div className="form-group">
            <div className="col-lg-offset-3 col-lg-9">
              <button type="submit" className="btn btn-primary" onClick={this.onSaveClick} title="Save link"><span className="glyphicon glyphicon-ok"></span></button>
              <button type="reset" className="btn btn-default" onClick={this.onCancelClick} title="Cancel"><span className="glyphicon glyphicon-remove"></span></button>
            </div>
          </div>
        </form>
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
        {(this.data.link)? this.getEditView() : this.getLoadingText()}
      </div>
    );
  }
});
