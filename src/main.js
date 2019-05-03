var request = new XMLHttpRequest();
var articleList = new ArticleList()
request.open('GET', "https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init", true);
request.onload = function () {
  var result = JSON.parse(this.response);
  lst = result.list
  for (var i = 0; i < lst.length; i++) {
    var article = new Article(lst[i].name, lst[i].thumbnail[0].url, lst[i].name, lst[i].url, lst[i].branding)
    articleList.addArticle(article)
  }
}
request.send();

console.log(articleList.list)
