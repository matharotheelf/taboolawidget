describe('Article', function(){
  var article;

  article = new Article('This Article')

  it('Article stores a title', function() {
    expect(article.title).toBe('This Article');
  });
})
