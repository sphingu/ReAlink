MainLayout = React.createClass({
  render(){
    return (
      <div>
        <Header />
        <section id="content" className="main container" style={{marginTop:65+'px'}}>
          {this.props.component}
        </section>
        <Footer />
      </div>
    );
  }
});
