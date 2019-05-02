describe('Article', function(){
  var article;

  article = new Article('This Article', 'Thumbnail Address')

  it('Article stores a title', function() {
    expect(article.title).toBe('This Article');
  });

  it('Article stores thumbnail', function() {
    expect(article.thumbnail).toBe('Thumbnail Address');
  });
})
