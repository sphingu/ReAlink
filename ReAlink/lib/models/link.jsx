Link = {
  create(link){
    // create link code goes here.
  },
  destroy(id){
    // remove link code goes here.
  },
  findAll(){
    return Links.find({}, { sort: { updatedAt: -1, createdAt: -1 } }).fetch();
  }
}
