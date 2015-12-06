/*     ## Fixtures ##
          --------
Fill in the app with dummy data if database is empty.

*/

if(Links.find().count() == 0)
{
  Fixtures.insert(Links, 'firstLink', {
    title: Fake.word(),
    body: Fake.paragraph(5),
    rating: 4,
    tags: ["test"],
    color: '#343434',
    createdAt: new Date()
  });
  console.log(Fixtures.get(Links, 'firstLink'));
}
else{
  console.log('no need for seeding.');
}
