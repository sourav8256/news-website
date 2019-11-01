

/* 

API KEY = "8abd4d0e9b664890b45eb4c1d427c23e";

*/






$.ajax({
    type: 'GET',
    url: 'https://newsapi.org/v2/everything?q=news&from=2019-10-01&sortBy=publishedAt&apiKey=8abd4d0e9b664890b45eb4c1d427c23e',
    data: { get_param: 'articles' },
    dataType: 'json',
    success: function (data) {
        console.log(data);
        $.each(data.articles, function (index, element) {
            /* $('.container').append($('<div>', {
                text: element.title
            })); */

            if(element.urlToImage == null){
                return;
            }

            $('.container').append(
                '<div class="col s12 m7">' +
                '<div class="card horizontal">' +
                '<div class="card-image">' +
                `<img src="${element.urlToImage}">` +
                '</div>' +
                '<div class="card-stacked">' +
                '<div class="card-content">' +
                `<h5 class="header">${element.title}</h5>` +
                `<p>${element.description}</p>` +
                '</div>' +
                '<div class="card-action">' +
                `<a href="${element.url}">See more...</a>` +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>' 
            );


        });
    }
});


/* 
<div class="col s12 m7">
<h2 class="header">Horizontal Card</h2>
<div class="card horizontal">
  <div class="card-image">
    <img src="https://lorempixel.com/100/190/nature/6">
  </div>
  <div class="card-stacked">
    <div class="card-content">
      <p>I am a very simple card. I am good at containing small bits of information.</p>
    </div>
    <div class="card-action">
      <a href="#">This is a link</a>
    </div>
  </div>
</div>
</div> */