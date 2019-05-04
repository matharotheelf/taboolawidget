var request = new XMLHttpRequest();
var articleList = new ArticleList()
request.open('GET', "https://api.taboola.com/1.2/json/apitestaccount/recommendations.get?app.type=web&app.apikey=7be65fc78e52c11727793f68b06d782cff9ede3c&source.id=%2Fdigiday-publishing-summit%2F&source.url=https%3A%2F%2Fblog.taboola.com%2Fdigiday-publishing-summit%2F&source.type=text&placement.organic-type=mix&placement.visible=true&placement.available=true&placement.rec-count=6&placement.name=Below%20Article%20Thumbnails&placement.thumbnail.width=640&placement.thumbnail.height=480&user.session=init", true);
request.onload = function () {
  var result = JSON.parse(this.response);
  lst = result.list
  lst.forEach(function(entry){
    var article = new Article(entry.name, entry.thumbnail[0].url, entry.url, entry.branding)
    articleList.addArticle(article)
  })

  for (var i = 0; i < 6; i++) {
    var frame = document.getElementsByClassName('frame')[i]
    var string = `<img src="` + articleList.list[i].thumbnail + `">`
    frame.insertAdjacentHTML('beforeend', string);
    var title = document.getElementsByClassName('title')[i]
    title.innerText = articleList.list[i].title
    var branding = document.getElementsByClassName('branding')[i]
    branding.innerText = articleList.list[i].brand
    var link = document.getElementsByClassName('link')[i]
    link.href = articleList.list[i].link
  }
}
request.send();
