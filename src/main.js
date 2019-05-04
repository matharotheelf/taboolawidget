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

  var frame = document.getElementById('firstFrame')
  var string = `<img src="` + articleList.list[0].thumbnail + `">`
  frame.insertAdjacentHTML('beforeend', string);
  firstTitle.innerText = articleList.list[0].title
  firstBranding.innerText = articleList.list[0].brand
  firstLink.href = articleList.list[0].link

  frame = document.getElementById('secondFrame')
  string = `<img src="` + articleList.list[1].thumbnail + `">`
  frame.insertAdjacentHTML('beforeend', string);
  secondTitle.innerText = articleList.list[1].title
  secondBranding.innerText = articleList.list[1].brand
  secondLink.href = articleList.list[1].link

  frame = document.getElementById('thirdFrame')
  string = `<img src="` + articleList.list[2].thumbnail + `">`
  frame.insertAdjacentHTML('beforeend', string);
  thirdTitle.innerText = articleList.list[2].title
  thirdBranding.innerText = articleList.list[2].brand
  thirdLink.href = articleList.list[2].link

  frame = document.getElementById('fourthFrame')
  string = `<img src="` + articleList.list[3].thumbnail + `">`
  frame.insertAdjacentHTML('beforeend', string);
  fourthTitle.innerText = articleList.list[3].title
  fourthBranding.innerText = articleList.list[3].brand
  fourthLink.href = articleList.list[3].link
}
request.send();
