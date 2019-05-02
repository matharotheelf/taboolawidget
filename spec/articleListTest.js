describe('ArticleList', function(){

  var articleList;

  articleList = new ArticleList()

  it("starts empty of articles", function() {
    expect(articleList.list).toEqual([])
  });

})
