describe('ArticleList', function(){

  var articleList;

  beforeEach(function() {
    articleList = new ArticleList()
  });
  
  it("starts empty of articles", function() {
    expect(articleList.list).toEqual([])
  });

  it("can have article added to it", function() {
    var article = null
    articleList.addArticle(article)
    expect(articleList.list).toEqual([article])
  });
})
