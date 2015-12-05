setTitle = (title) => {
  let base = 'ReAlink';

  if(title) {
    return document.title = `${title} - ${base}`;
  }
  return document.title = base;
};
