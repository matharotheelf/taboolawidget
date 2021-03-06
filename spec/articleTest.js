describe('Article', function(){
  var article;

  beforeEach(function() {
    article = new Article('This Article', 'Thumbnail Address', 'Link Address', 'Brand', 'Category')
  });

  it('Article stores a title', function() {
    expect(article.title).toBe('This Article');
  });

  it('Article stores thumbnail', function() {
    expect(article.thumbnail).toBe('Thumbnail Address');
  });

  it('Article stores link', function() {
    expect(article.link).toBe('Link Address');
  });

  it('Article stores branding', function() {
    expect(article.brand).toBe('Brand');
  });

  it('Article stores category', function() {
    expect(article.category).toBe('Category');
  });
})
